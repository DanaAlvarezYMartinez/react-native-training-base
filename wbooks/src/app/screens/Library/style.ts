import { StyleSheet } from 'react-native';
import { aliceBlue } from '@constants/colors';

const DEFAULT_SPACE = 15;

const style = StyleSheet.create({
  libraryContainer: {
    display: 'flex',
    padding: DEFAULT_SPACE,
    alignItems: 'center',
    backgroundColor: aliceBlue,
    height: '100%'
  }
});

export default style;
