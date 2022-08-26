import { create } from 'apisauce';
import Config from 'react-native-config';

// define the api
const api = create({
  baseURL: Config.API_BASE_URL,
  timeout: 5000
});

export default api;
