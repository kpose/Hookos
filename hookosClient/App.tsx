import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';
import {Button, Input, Loader} from './src/components';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text> home screen </Text>
        <Button title="here" onPress={() => Alert.alert('Button pressed')} />
        <Input
          placeholder="Enter password"
          secureTextEntry={true}
          placeholderTextColor="blue"
        />
        <Loader />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
