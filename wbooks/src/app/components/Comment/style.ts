import { fontGray, white } from '@constants/colors';
import { commentSize, commentUserNameSize, commentUserNameWeight, commentWeight } from '@constants/fonts';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  commentContainer: {
    backgroundColor: white,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10
  },
  textContainer: {
    display: 'flex',
    marginLeft: 20
  },
  commentWrapper: {
    flexDirection: 'row',
    minWidth: '85%'
  },
  userName: {
    color: fontGray,
    fontSize: commentUserNameSize,
    fontWeight: commentUserNameWeight
  },
  comment: {
    color: fontGray,
    fontSize: commentSize,
    fontWeight: commentWeight,
    flex: 1,
    flexWrap: 'wrap',
    marginTop: 5
  },
  icomImg: {
    borderRadius: 300,
    height: 45,
    width: 45
  }
});

export default style;
