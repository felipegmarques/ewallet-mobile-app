export const applyMask = (value, mask) => {
  let maskIndex = 0;
  let valueIndex = 0;
  let newValue = '';
  while (valueIndex < value.length) {
    let maskCharacter = mask.charAt(maskIndex);
    if (maskCharacter === "X") {
      let valueCharacter = value.charAt(valueIndex++);
      if (/^\d$/.test(valueCharacter)) {
        newValue = newValue + valueCharacter;
        maskIndex++;
      }
    } else {
      newValue = newValue + maskCharacter;
      maskIndex++;
    }
  }
  return newValue;
}
