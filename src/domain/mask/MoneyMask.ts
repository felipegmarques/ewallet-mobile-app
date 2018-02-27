const isNegative = (val: string) => (val.length !== 0 && val[0] === '-');

export const MoneyMask = {
  clean: (maskedValue: string) => {
    return maskedValue.split('')
    .filter((char) => '-0123456789'.indexOf(char) !== -1)
    .reduce(({acc, leadingZero}, digit) => {
      if (leadingZero && digit === '-') {
        return { acc: acc + digit, leadingZero }
      } else if (leadingZero && digit === '0') {
        return { acc, leadingZero};
      } else {
        return { acc: acc + digit, leadingZero: false}
      }
    }, {acc: '', leadingZero: true}).acc;
  },
  apply: (value: string) => {
    let positiveValue = value;
    if (isNegative(value)) {
      positiveValue = value.substring(1, value.length);
    }
    let newValue = positiveValue;
    if (positiveValue.length < 3) {
      for (let i = 0; i < 3 - positiveValue.length; i++) {
        newValue = '0' + newValue;
      }
    }
    const cents = newValue.substring(newValue.length - 2, newValue.length);
    let integerPart = newValue.substring(0, newValue.length - 2);
    if (isNegative(value)) {
      integerPart = '-' + integerPart;
    }
    return `R$ ${integerPart}.${cents}`;
  },
}
