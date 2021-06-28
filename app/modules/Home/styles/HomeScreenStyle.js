import { StyleSheet } from 'react-native';
import { verticalScale, Colors, moderateScale } from '../../../theme';
export const cellHeight = verticalScale(200);
const styles = StyleSheet.create({
  content:{
    paddingBottom: verticalScale(60),
    backgroundColor: Colors.color2
  },
  spacer: {
    width: verticalScale(10)
  },
  todoText: {
    color: Colors.color3,
    fontSize: moderateScale(16),
    fontWeight: 'bold'
  },
  container: {
    padding: verticalScale(10),
    backgroundColor: Colors.color2
  },
  listItem: {
    marginBottom: verticalScale(10),
    flexDirection: 'row'
  },
  absolutePlusView: {
    position: 'absolute',
    bottom: verticalScale(20),
    right: verticalScale(20),
    backgroundColor: Colors.color3
  },
  flexView: {
    flex: 1
  },
  buttonView: {
    padding: verticalScale(12),
    backgroundColor: Colors.color4
  },
  todoChecked: {
    color: Colors.color1
  },
  todoUnChecked: {
    color: Colors.neutral
  },
  cancelRequest: {
    height: verticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary
  },
  plusButton: {
    position: 'absolute',
    height: verticalScale(55),
    width: verticalScale(55),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: verticalScale(15),
    right: verticalScale(15),
    backgroundColor: Colors.green
  },
  cellContainer: {
    height: cellHeight - verticalScale(7.5),
    backgroundColor: Colors.neutral,
    marginBottom: verticalScale(5),
    borderRadius: verticalScale(10)
  }
});

export default styles;
