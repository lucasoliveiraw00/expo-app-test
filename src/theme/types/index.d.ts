import 'styled-components';

import { Colors } from '../styles/theme/light/color/types';
import { Typography } from '../styles/theme/light/typography/types';
import { Rem } from '@/theme/utils/resize/rem';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: string;
    color: Colors;
    typography: Typography;
    utils: {
      mediaQuery: (min: number, max?: number) => boolean;
      resize: {
        fontSize: (fontSize: number, standardScreenHeight = 680) => number;
        px: (value: number, standardScreenHeight = 680) => number;
        rem: (data: number | Rem) => number;
        percentage: (percent: number) => number;
      };
    };
  }
}
