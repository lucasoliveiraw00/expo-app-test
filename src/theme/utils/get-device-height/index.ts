import { Dimensions, Platform } from 'react-native';
import { getStatusBarOffset } from '../get-status-bar-offset';
import { isIPhoneX } from '../is-iphoneX';

export function getDeviceHeight() {
  const dimensions = Dimensions.get('window');

  const standardLength = Math.max(dimensions.width, dimensions.height);

  const hasFloatingStatusBar = isIPhoneX() || Platform.OS === 'android';

  if (hasFloatingStatusBar) {
    return standardLength - getStatusBarOffset();
  }

  return standardLength;
}
