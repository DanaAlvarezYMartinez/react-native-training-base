import { StyleSheet } from 'react-native';
import { white, fontGray } from '@constants/colors';
import { bookAuthorSize, bookAuthorWeight, bookTitleSize, bookTitleWeight } from '@constants/fonts';

const DEFAULT_SPACE = 15;

const style = StyleSheet.create({
  bookContainer: {
    display: 'flex',
    backgroundColor: white,
    flexDirection: 'row',
    borderRadius: 8,
    padding: DEFAULT_SPACE,
    paddingHorizontal: DEFAULT_SPACE,
    height: 90,
    alignItems: 'center',
    marginVertical: 5
  },
  bookInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: DEFAULT_SPACE
  },
  bookTitle: {
    fontSize: bookTitleSize,
    color: fontGray,
    fontWeight: bookTitleWeight
  },
  bookAuthor: {
    fontSize: bookAuthorSize,
    color: fontGray,
    fontWeight: bookAuthorWeight
  },
  img: {
    width: 40,
    height: 60
  }
});

export default style;
