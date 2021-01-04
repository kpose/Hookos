import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Login, Signup} from '../screens';
import {DrawerNavigator} from './DrawerNavigator';
import {Appbar, Avatar} from 'react-native-paper';
import {color} from '../utils';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Signup: undefined;
  DrawerHome: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Header = ({scene, previous, navigation}) => {
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header theme={{colors: {primary: color.WHITE}}}>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.openDrawer}
          color={color.PURPLE}
        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <MaterialCommunityIcons
            name="menu-open"
            size={40}
            color={color.PURPLE}
          />
        </TouchableOpacity>
      )}
      <Appbar.Content
        title={
          previous ? (
            title
          ) : (
            <MaterialCommunityIcons
              name="twitter"
              size={40}
              color={color.PURPLE}
            />
          )
        }
      />
    </Appbar.Header>
  );
};

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
