export const isValidNumberTelepon = (number) => {
  return /^\d+$/.test(number) && number.length >= 9 && number.length <= 13;
};

export const validationChecked = (number, isChecked) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isValidNumberTelepon(number) && isChecked === true) {
        resolve(true);
      } else {
        reject("Async operation failed");
      }
    }, 2000);
  });
};
