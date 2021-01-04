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
  TouchableOpacity,
} from 'react-native';
import {color} from '../../utils';
import {keyboardVerticalOffset} from '../../utils/constants';
import {Input, Button} from '../../components';
import styles from './styles';
import LottieView from 'lottie-react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/RootNavigator';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Signup'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const animation = require('../../lottie/socialnetwork.json');

const Signup = ({navigation}: Props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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
  return (
    <KeyboardAvoidingView
      style={{backgroundColor: color.BLACK, flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={keyboardVerticalOffset}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{backgroundColor: color.WHITE, flex: 1}}>
          <View style={styles.containerCentered}>
            {/* <LottieView
              source={animation}
              autoPlay
              style={{width: 300, height: 250}}
              resizeMode="cover"
            /> */}
          </View>

          <View style={styles.sectionCentered}>
            <Input
              placeholder="Enter email"
              value={email}
              /* onChangeText={(text) => handleOnChange('email', text)} */
              onFocus={() => handleFocus()}
              onBlur={() => handleBlur()}
            />

            <Input
              placeholder="Enter password"
              secureTextEntry={true}
              value={password}
              /* onChangeText={(text) => handleOnChange('password', text)} */
              onFocus={() => handleFocus()}
              onBlur={() => handleBlur()}
            />

            <Button
              title="Sign up"
              onPress={() => navigation.replace('Home')}
            />
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.replace('Login')}>
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: 'bold',
                  color: color.LIGHT_GREEN,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Signup;
