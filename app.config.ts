import 'dotenv/config';

import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: config.name || 'undefined',
  slug: config.slug || 'undefined',
  extra: {
    ...config.extra,
    APP_ENVIRONMENT: process.env.APP_ENVIRONMENT,
    APP_FETCH_BASE_URL: process.env.APP_FETCH_BASE_URL,
    APP_PORT_REACTOTRON: process.env.APP_PORT_REACTOTRON,
  },
});
