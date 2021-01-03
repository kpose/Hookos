import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';

import {Login} from './src/screens';

import DrawerNavigator from './src/navigation/DrawerNavigator';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <DrawerNavigator />
          {/* <Login /> */}
        </View>
      </NavigationContainer>
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
