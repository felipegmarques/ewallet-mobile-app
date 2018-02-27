export interface State {
  valid: boolean;
  pristine: boolean;
  focus: boolean;
  value?: any;
  errors?: string[];
}

export interface Event {
  type: string;
  value?: string;
}

export type Validator = (value?: string, pristine?: boolean) => string;
export interface Mask {
  clean: (val: any) => any;
  apply: (val: any) => any;
}

const validate = (value: string | undefined, pristine: boolean, validators: Validator[]) => {
  const errors = validators.map((validator) => validator(value, pristine))
      .filter((val) => val !== undefined && val !== '');
  const valid = errors.length === 0;
  return { errors, valid };
};

export const nextState = (state: State,
  {type, value}: Event,
  validators: Validator[] = [],
  {clean, apply}: Mask = { clean: (val: any) => val, apply: (val: any) => val}) => {
  if (type === 'change') {
    const cleanValue = clean(value);
    const { valid, errors } = validate(cleanValue, false, validators);
    return { ...state, valid, pristine: false, value: apply(cleanValue), errors };
  } else if (type === 'blur') {
    const { valid, errors } = validate(state.value, state.pristine, validators);
    return { ...state, focus: false, valid, errors };
  } else if (type === 'focus') {
    return { ...state, focus: true };
  } else {
    throw TypeError('Undefined event');
  }
};
