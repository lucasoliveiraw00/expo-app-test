import { resizeFontSize } from '../font-size';

export function resizePX(value: number, standardScreenHeight = 680) {
  return resizeFontSize(value, standardScreenHeight);
}
