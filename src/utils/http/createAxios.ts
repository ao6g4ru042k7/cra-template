import axios from 'axios';
import { store } from 'store';
import { setMessage } from 'store/slice/errorSlice';

const DEBUG = process.env.NODE_ENV === 'development';

export const createAxios = (domain: string) => {
  const instance = axios.create({
    baseURL: domain,
  });

  instance.interceptors.request.use(
    (config) => {
      /** In dev, intercepts request and logs it into console for dev */
      if (DEBUG) {
        console.info('✅', config);
      }
      return config;
    },
    (error) => {
      if (DEBUG) {
        console.error('❌', error);
      }
      store.dispatch(setMessage(error));
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      if (response.status === 401) {
        alert('You are not authorized');
      }
      return response;
    },
    (error) => {
      if (error.response && error.response.data) {
        store.dispatch(setMessage(error.response.data));
        return Promise.reject(error.response.data);
      }
      store.dispatch(setMessage(error.message));
      return Promise.reject(error.message);
    }
  );

  return instance;
};
