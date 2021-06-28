import { StyleSheet } from 'react-native';
import { verticalScale } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: verticalScale(10),
    justifyContent: 'center',
  },
  inputStyle: {
    flex: 0,
    height: verticalScale(55),
    padding: verticalScale(5),
    borderWidth: verticalScale(1),
    borderRadius: verticalScale(5),
  },
});

export default styles;
