
const validate = (value: any, pristine: boolean, validators: Array<(value: any, pristine: boolean) => string>) => {
  return validators.map((validator) => validator(value, pristine))
    .filter((msg) => msg !== '')
    .reduce((errors: string[], msg: string) => [...errors, msg], []);
};

const formValidatorBuilder = (validators: Array<(value: any, pristine: boolean) => string>) => {
  return (previousState: any, event: any) => {
    if (event.type === 'reset') {
      return { valid: true };
    }
    const value = event.value || previousState.value;
    const pristine = event.type === 'change' ? false : previousState.pristine;
    const errors = ['blur', 'change', 'submit'].some((ev) => event.type === ev) ?
      validate(value, previousState.pristine, validators) : previousState.errors;
    const valid = !(errors && errors.length !== 0);

    return {pristine, value, valid, errors};
  };
};
export default formValidatorBuilder;
