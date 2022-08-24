import Reactotron from 'reactotron-react-native';
import AsyncStorage from 'react-native';
import { reactotronRedux } from 'reactotron-redux';

// AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
Reactotron.setAsyncStorageHandler(AsyncStorage)
  // controls connection & communication settings
  .configure()
  // add all built-in react native plugins
  .useReactNative()
  // let's connect!
  .use(reactotronRedux())
  .connect();

export default Reactotron;
