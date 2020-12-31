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
import {Login, Signup, Home} from './src/screens';

const App = () => {
  return (
    <View style={styles.container}>
      <Signup />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
