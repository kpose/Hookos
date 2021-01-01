import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';

const animation = require('../../lottie/communicating.json');

const Home = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.containerCentered}>
      <Text>this is the home component</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HookoDetails')}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
