import React from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';

const animation = require('../../lottie/communicating.json');

const Home = () => {
  return (
    <View style={styles.containerCentered}>
      <Text>this is the home component</Text>
    </View>
  );
};

export default Home;
