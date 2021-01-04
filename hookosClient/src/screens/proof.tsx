import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function GoToButton() {
  const navigation = useNavigation();

  return (
    <Button title="button" onPress={() => navigation.navigate('Hookos')} />
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <GoToButton screenName="Details" />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>

      <GoToButton screenName="Home" />
    </View>
  );
}

const Stack = createStackNavigator();

function Proof() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default Proof;
