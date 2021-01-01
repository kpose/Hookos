import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
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
    <PaperProvider>
      <View style={styles.container}>
        <Signup />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
