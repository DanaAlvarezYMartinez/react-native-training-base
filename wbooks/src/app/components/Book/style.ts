import { StyleSheet } from 'react-native';
import { white, fontGray } from '@constants/colors';

const style = StyleSheet.create({
  bookContainer: {
    display: 'flex',
    backgroundColor: white,
    flexDirection: 'row',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
    height: 90,
    alignItems: 'center',
    marginVertical: 5
  },
  bookInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 15
  },
  bookTitle: {
    fontSize: 17,
    color: fontGray,
    fontWeight: '700'
  },
  bookAuthor: {
    fontSize: 15,
    color: fontGray,
    fontWeight: '400'
  },
  img: {
    width: 40,
    height: 60
  }
});

export default style;
