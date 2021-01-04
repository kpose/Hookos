import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Login, Signup} from '../screens';
import {DrawerNavigator} from './DrawerNavigator';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Signup" headerMode="none">
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};
