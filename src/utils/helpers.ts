import { CardType } from './data';

export const getMidIndex = (arr: CardType[]) => {
  return (arr.length / 2) | 0;
};

export const getLeftIndex = (currentIndex: number, maxIndex: number) => {
  const leftIndex = currentIndex - 1;

  if (leftIndex < 0) {
    return maxIndex;
  } else {
    return leftIndex;
  }
};

export const getRightIndex = (currentIndex: number, maxIndex: number) => {
  const rightIndex = currentIndex + 1;

  if (rightIndex > maxIndex) {
    return 0;
  } else {
    return rightIndex;
  }
};

export const getRequestedIndex = (
  currentIndex: number,
  arr: CardType[],
  direction: string
) => {
  const { length } = arr;
  const maxIndex = length - 1;

  if (direction === 'left') {
    return getLeftIndex(currentIndex, maxIndex);
  } else if (direction === 'right') {
    return getRightIndex(currentIndex, maxIndex);
  } else {
    return 0;
  }
};
