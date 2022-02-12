import Constants from 'expo-constants';

// eslint-disable-next-line import/no-extraneous-dependencies
import Reactotron from 'reactotron-react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactotronCore } from 'reactotron-core-client';

declare global {
  interface Console {
    tron: ReactotronCore;
  }
}

const host = Constants.manifest?.extra?.APP_PORT_REACTOTRON;

if (__DEV__ && host) {
  const tron = Reactotron.configure({
    host,
    name: `Project React Native ${Constants.manifest?.name || ''}`,
  })
    .useReactNative()
    .connect();
  // eslint-disable-next-line no-console
  console.tron = tron as ReactotronCore;
}
