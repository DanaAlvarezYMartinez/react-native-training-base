import { StyleSheet } from 'react-native';
import { aliceBlue, white, btn } from '@constants/colors';

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
    alignItems: 'center'
  },
  whiteBtn: {
    backgroundColor: white,
    borderColor: btn,
    borderStyle: 'solid',
    borderWidth: 2,
    padding: PADDING_BTN,
    minWidth: 275,
    borderRadius: 100,
    marginVertical: 5
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
    minWidth: 275
  },
  blueBtnText: {
    color: white,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
});

export default style;
