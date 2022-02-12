import React, { createContext, useMemo } from 'react';

import { ThemeProvider } from 'styled-components';

import { light } from '@/theme/styles/theme/light';

import { resizeRem } from '@/theme/utils/resize/rem';
import { resizePX } from '@/theme/utils/resize/px';
import { resizeFontSize } from '@/theme/utils/resize/font-size';
import { resizePercentage } from '@/theme/utils/resize/percentage';
import { mediaQuery } from '@/theme/utils/media-query';

import { DataAppThemeContext, AppThemeProps } from './types';

export const AppThemeContext = createContext({} as DataAppThemeContext);

export const AppTheme = ({ children }: AppThemeProps): React.ReactElement => {
  const value = useMemo(
    () => ({
      theme: 'light',
    }),
    [],
  );

  const theme = useMemo(
    () => ({
      ...light,
      utils: {
        mediaQuery,
        resize: {
          fontSize: resizeFontSize,
          px: resizePX,
          rem: resizeRem,
          percentage: resizePercentage,
        },
      },
    }),
    [],
  );

  return (
    <AppThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
};
