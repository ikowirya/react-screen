export const isValidNumberTelepon = (number) => {
  return /^\d+$/.test(number) && number.length >= 9 && number.length <= 13;
};
