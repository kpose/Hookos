import {StyleSheet} from 'react-native';
import {color, appStyle} from '../../utils';

export default StyleSheet.create({
  chatContainer: {backgroundColor: color.WHITE, borderTopRightRadius: 20},
  chatTxt: {
    color: color.BLACK,
    fontSize: 18,
    marginVertical: 5,
    fontWeight: '500',
    padding: 8,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  footerContent: {
    justifyContent: 'space-around',
  },
  hookoImage: {
    borderRadius: 10,
    margin: 10,
  },
  hookoBody: {
    elevation: 20,
    marginBottom: 3,
  },
});
