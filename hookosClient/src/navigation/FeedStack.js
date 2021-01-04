import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar, Avatar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {color} from '../utils';

import {Home, FeedDetails} from '../screens';
import {DrawerNavigator} from './BottomNavigator';

const Stack = createStackNavigator();

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

export const FeedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Hookos"
      headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
      /* screenOptions={{
        headerShown: false,
      }} */
    >
      <Stack.Screen
        name="Hookos"
        component={Home}
        options={{title: 'Hookos'}}
        //options={{headerShown: false}}
      />
      <Stack.Screen
        name="HookoDetails"
        component={FeedDetails}
        options={{headerTitle: 'Hooko'}}
      />
    </Stack.Navigator>
  );
};
