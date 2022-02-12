import { Dimensions } from 'react-native';
import { resizeFontSize } from '../font-size';

export type Rem = {
  size: number;
  baseFontSize?: number;
  shouldScale?: boolean;
  fontScaleFactor?: number;
};

const { fontScale } = Dimensions.get('window');

export function resizeRem(data: number | Rem) {
  let size;
  let baseFontSize = 16;
  let shouldScale = false;
  let fontScaleFactor = fontScale;

  if (typeof data === 'number') size = data;

  if (typeof data === 'object') {
    size = data?.size || size;
    baseFontSize = data?.baseFontSize || baseFontSize;
    shouldScale = data?.shouldScale || shouldScale;
    fontScaleFactor = data?.fontScaleFactor || fontScaleFactor;
  }

  if (size === undefined) {
    throw new Error('Size undefined');
  }

  return (
    resizeFontSize(size * baseFontSize) * (shouldScale ? fontScaleFactor : 1)
  );
}
