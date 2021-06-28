import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFill,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
