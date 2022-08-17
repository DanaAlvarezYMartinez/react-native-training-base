import { StyleSheet } from 'react-native';
import { black } from '@constants/colors';

const DEFAULT_SPACE = 15;

const style = StyleSheet.create({
  sectionContainer: {
    marginTop: DEFAULT_SPACE,
    paddingHorizontal: DEFAULT_SPACE,
    backgroundColor: black,
    height: '100%'
  }
});

export default style;
