import {StyleSheet} from 'react-native';
import {appStyle, color} from '../../utils';

export default StyleSheet.create({
  input: {
    paddingLeft: 16,
    backgroundColor: color.SILVER,
    width: '90%',
    color: color.BLACK,
    height: appStyle.fieldHeight,
    alignSelf: 'center',
    marginVertical: appStyle.fieldMarginVertical,
    fontSize: 16,
    borderRadius: 10,
  },
});
