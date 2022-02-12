import { getDeviceHeight } from '../../get-device-height';

export function resizeFontSize(fontSize: number, standardScreenHeight = 680) {
  const heightPercent = (fontSize * getDeviceHeight()) / standardScreenHeight;
  return Math.round(heightPercent);
}
