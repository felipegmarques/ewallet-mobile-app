
export const dateMaskBuilder = (format: string) => ({
  clean: (maskedValue: Date) => maskedValue,
  apply: (value: Date) => {
    return value.toDateString();
  },
})
