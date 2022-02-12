import { Dimensions, Platform, StatusBar } from 'react-native';
import { isIPhoneX } from '../../is-iphoneX';

export function resizePercentage(percent: number): number {
  const { height, width } = Dimensions.get('window');
  const standardLength = width > height ? width : height;

  let offset = StatusBar.currentHeight || 0;
  const isCorrectWidth = width > height;

  if (isCorrectWidth) offset = 0;

  if (!isCorrectWidth && Platform.OS === 'ios') offset = 78;

  const deviceHeight =
    isIPhoneX() || Platform.OS === 'android'
      ? standardLength - offset
      : standardLength;

  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}
