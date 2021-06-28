import { StyleSheet } from 'react-native';
import { Colors, verticalScale } from '../../../theme';

const styles = StyleSheet.create({
  closeButton: {
    width: verticalScale(45),
    height: verticalScale(45),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: Colors.color3
  },
  modal: {
    backgroundColor: Colors.color3,
    padding: verticalScale(10),
    flex: 0.3
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: Colors.transparent
  },
  text: {
    backgroundColor: Colors.color2,
    color: Colors.black
  },
  buttonStyle: {
    backgroundColor: Colors.color4,
    marginTop: verticalScale(10),
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
