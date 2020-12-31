import * as React from 'react';
import {TouchableOpacity, Text, ViewStyle} from 'react-native';
import styles from './styles';

type ButtonProps = {
  title: string;
  btnStyle?: ViewStyle | ViewStyle[];
  btnTextStyle?: ViewStyle | ViewStyle[];
  onPress: () => void;
};

export default (props: ButtonProps) => (
  <TouchableOpacity
    style={[styles.btn, props.btnStyle]}
    onPress={props.onPress}>
    <Text style={[styles.text, props.btnTextStyle]}>{props.title}</Text>
  </TouchableOpacity>
);
