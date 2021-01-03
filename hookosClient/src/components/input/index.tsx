import React from 'react';
import {ViewStyle, TextInput} from 'react-native';
//import {HelperText, TextInput} from 'react-native-paper';
import styles from './styles';
import {color} from '../../utils';

type InputProps = {
  placeholder: string;
  inputStyle?: ViewStyle | ViewStyle[];
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  value?: any;
  onSubmitEditing?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  numberOfLines?: number;
};

export default (props: InputProps) => (
  <>
    <TextInput
      style={[styles.input, props.inputStyle]}
      value={props.value}
      numberOfLines={props.numberOfLines}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
      placeholder={props.placeholder}
      placeholderTextColor={
        props.placeholderTextColor ? props.placeholderTextColor : color.WHITE
      }
      onSubmitEditing={props.onSubmitEditing}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
    />
  </>
);
