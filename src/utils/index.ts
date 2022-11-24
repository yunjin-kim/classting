export const shuffle = (array: any[]): any[] => {
  return array.sort(() => Math.random() - 0.5);
};

export const convertTimeFormat = (startTime: number, endTime: number): string => {
  const time = endTime - startTime;
  const sec = time / 1000;
  const min = time / 1000 / 60;
  const hour = time / 1000 / 60 / 60;

  return `${hour > 1 ? `${Math.floor(hour)}시간` : ''} ${min > 1 ? `${Math.floor(min)}분` : ''} ${
    sec > 1 ? `${Math.floor(sec)}초` : ''
  }`;
};
