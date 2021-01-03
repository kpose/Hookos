import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  StyleSheet,
} from 'react-native';
import {color} from '../../utils';
import {keyboardVerticalOffset} from '../../utils/constants';
import {Input, Button, Loader} from '../../components';
import LottieView from 'lottie-react-native';
import axios from 'axios';
//import {useNavigation} from '@react-navigation/native';

type LoginProps = {
  message?: string;
};

const animation = require('../../lottie/socialnetwork.json');

const Login = (props: LoginProps) => {
  //const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState({});
  const [showAnmie, toggleAnmie] = useState(true);

  const handleFocus = () => {
    setTimeout(() => {
      toggleAnmie(false);
    }, 2000);
  };

  const handleBlur = () => {
    setTimeout(() => {
      toggleAnmie(true);
    }, 200);
  };

  const handleLogin = () => {
    setLoading(true);
    const userData = {
      email: email,
      password: password,
    };
    axios
      .post(
        'https://us-central1-hooko-36c30.cloudfunctions.net/api/login',
        userData,
      )
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        //navigation.navigate('Home');
      })
      .catch((err) => {
        setErrors(err.response.data);
        setLoading(false);
      });
  };

  return (
    <KeyboardAvoidingView
      style={{backgroundColor: color.BLACK, flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={keyboardVerticalOffset}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{backgroundColor: color.WHITE, flex: 1}}>
          <View style={styles.containerCentered}>
            <LottieView
              source={animation}
              autoPlay={true}
              loop
              style={{width: 300, height: 250}}
              resizeMode="cover"
            />
          </View>

          <View style={styles.sectionCentered}>
            <Input
              placeholder="Enter email"
              value={email}
              onChangeText={(text: string) => setEmail(text)}
              onFocus={() => handleFocus()}
              onBlur={() => handleBlur()}
            />
            <Input
              placeholder="Enter password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text: string) => setPassword(text)}
              onFocus={() => handleFocus()}
              onBlur={() => handleBlur()}
            />

            <Button title="Login" onPress={() => handleLogin()} />
            <Text>Don't have an account?</Text>
            <Text
              style={{
                fontSize: 28,
                fontWeight: 'bold',
                color: color.LIGHT_GREEN,
              }}>
              Sign up
            </Text>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerCentered: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  sectionCentered: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
});

export default Login;
