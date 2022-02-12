import AppLoading from 'expo-app-loading';

import { useFonts } from 'expo-font';

import { AppTheme } from '@/theme';

import { Navigation } from '@/navigation';

if (__DEV__) import('@/libs/reactotron');

const fonts = {
  // eslint-disable-next-line global-require
  'FiraSans-Regular': require('./assets/fonts/default/FiraSans-Regular.ttf'),
  // eslint-disable-next-line global-require
  'FiraSans-Medium': require('./assets/fonts/default/FiraSans-Medium.ttf'),
  // eslint-disable-next-line global-require
  'FiraSans-SemiBold': require('./assets/fonts/default/FiraSans-SemiBold.ttf'),
};

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) return <AppLoading />;

  return (
    <AppTheme>
      <Navigation />
    </AppTheme>
  );
}
