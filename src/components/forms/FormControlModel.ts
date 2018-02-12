
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

type Validator = (value?: string, pristine?: boolean) => string;

const validate = (value: string | undefined, pristine: boolean, validators: Validator[]) => {
  const errors = validators.map((validator) => validator(value, false))
      .filter((val) => val !== undefined && val !== '');
  const valid = errors.length === 0;
  return { errors, valid };
};

export const nextState = (state: State, {type, value}: Event, validators: Validator[] = []) => {
  if (type === 'change') {
    const { valid, errors } = validate(value, false, validators);
    return { ...state, valid, pristine: false, value, errors };
  } else if (type === 'blur') {
    const { valid, errors } = validate(state.value, state.pristine, validators);
    return { ...state, focus: false, valid, errors };
  } else if (type === 'focus') {
    return { ...state, focus: true };
  } else {
    throw TypeError('Undefined event');
  }
};
