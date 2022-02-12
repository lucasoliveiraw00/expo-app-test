import { Dimensions } from 'react-native';

export function mediaQuery(min: number, max?: number): boolean {
  const { width } = Dimensions.get('window');

  const widthUpdated = Number(width.toFixed());

  const isEmptyMax = max === undefined || max === null;
  if (isEmptyMax && Number(min) === widthUpdated) return true;

  const isWidthMin = widthUpdated >= Number(min);
  const isWidthMam = max && widthUpdated <= Number(max);

  if (isWidthMin && isWidthMam) return true;

  return false;
}
