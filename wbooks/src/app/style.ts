import { StyleSheet } from 'react-native';
import { black } from '@constants/colors';

const defaultSpace = 15;

const style = StyleSheet.create({
  sectionContainer: {
    marginTop: defaultSpace,
    paddingHorizontal: defaultSpace,
    backgroundColor: black,
    height: '100%'
  }
});

export default style;
