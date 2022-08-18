import { StyleSheet } from 'react-native';
import { aliceBlue, white, btn, fontGray } from '@constants/colors';
import { bookAuthorSize, bookAuthorWeight, bookDetailTitleSize, bookTitleWeight } from '@constants/fonts';

const DEFAULT_SPACE = 15;
const PADDING_BTN = 12;

const style = StyleSheet.create({
  bookDetailContainer: {
    display: 'flex',
    padding: DEFAULT_SPACE,
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: aliceBlue,
    height: '100%'
  },
  whiteBox: {
    display: 'flex',
    paddingVertical: 15,
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: white,
    width: '95%',
    borderRadius: 8,
    marginVertical: 5
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: DEFAULT_SPACE
  },
  whiteBtn: {
    backgroundColor: white,
    borderColor: btn,
    borderStyle: 'solid',
    borderWidth: 2,
    padding: PADDING_BTN,
    borderRadius: 100,
    marginVertical: 5,
    minWidth: '95%'
  },
  whiteBtnText: {
    color: btn,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  blueBtn: {
    backgroundColor: btn,
    borderColor: btn,
    borderStyle: 'solid',
    borderWidth: 2,
    padding: PADDING_BTN,
    borderRadius: 100,
    marginVertical: 5,
    minWidth: '95%'
  },
  blueBtnText: {
    color: white,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: DEFAULT_SPACE,
    justifyContent: 'space-between'
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: PADDING_BTN
  },
  img: {
    height: 105,
    width: 69
  },
  title: {
    fontSize: bookDetailTitleSize,
    color: fontGray,
    fontWeight: bookTitleWeight,
    flex: 1,
    flexWrap: 'wrap'
  },
  text: {
    fontSize: bookAuthorSize,
    color: fontGray,
    fontWeight: bookAuthorWeight
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    minWidth: '80%'
  },
  commentsContainer: {
    display: 'flex',
    padding: DEFAULT_SPACE,
    backgroundColor: white,
    width: '95%',
    borderRadius: 8,
    marginTop: 35,
    overflow: 'scroll'
  },
  viewAll: {
    color: btn
  },
  linkContainer: {
    marginTop: DEFAULT_SPACE,
    alignSelf: 'center'
  }
});

export default style;
