import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';

const animation = require('../../lottie/communicating.json');

const Settings = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.containerCentered}>
      <Text>this is the Settings component</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Notifications')}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
