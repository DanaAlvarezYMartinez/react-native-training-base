import { StyleSheet } from 'react-native';
import { white } from '@constants/colors';

const style = StyleSheet.create({
  background: {
    height: 110,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '55%',
    justifyContent: 'space-between',
    marginLeft: '5%'
  },
  title: {
    color: white,
    fontWeight: 'bold',
    fontSize: 17
  },
  libraryContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    justifyContent: 'center'
  }
});

export default style;
