import React from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Home} from '../screens';
import {FeedStack} from './FeedStack';
import {BottomNavigator} from './BottomNavigator';
import {DrawerContent} from './DrawerContent';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen name="Home" component={BottomNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
