import React from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Home} from '../screens';
import {DrawerContent} from './DrawerContent';

const Drawer = createDrawerNavigator();

/* function DrawerContent() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Drawer content</Text>
    </View>
  );
}
 */
export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
