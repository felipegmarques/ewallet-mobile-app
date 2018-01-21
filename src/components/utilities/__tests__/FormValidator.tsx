import formValidatorBuilder from '../FormValidator';

describe('FormValidator', () => {
  const validators = [(value: any, pristine: boolean) => value === undefined ? 'required' : ''];
  const formValidator = formValidatorBuilder(validators);

  it('should keep valid when focus', () => {
    const expectedState = { valid: true };
    let actualState = { valid: true };

    actualState = formValidator(actualState, { type: 'focus'} );

    expect(actualState).toMatchObject(expectedState);
  });

  it('should validate when loose focus', () => {
    const expectedState = { valid: false, errors: ['required']};
    let actualState = { valid: true };

    actualState = formValidator(actualState, { type:  'blur' });

    expect(actualState).toMatchObject(expectedState);
  });

  it('shoud validate when loose focus, and return valid', () => {
    const expectedState = { valid: true };
    let actualState: any = { valid: true, value: 'text' };

    actualState = formValidator(actualState, { type:  'blur' });

    expect(actualState).toMatchObject(expectedState);
  });

  it('shoud update value when value changes, and validate', () => {
    const expectedState = { valid: true, value: 'newvalue', pristine: false };
    let actualState: any = { valid: true, pristine: true };

    actualState = formValidator(actualState, { type:  'change', value: 'newvalue'});

    expect(actualState).toMatchObject(expectedState);
  });

  it('should validate when submit', () => {
    const expectedState = { valid: false, errors: ['required'] };
    let actualState: any = { valid: true };

    actualState = formValidator(actualState, { type:  'submit' });

    expect(actualState).toMatchObject(expectedState);
  });

  it('should keep pristine when reset', () => {
    const expectedState = { valid: true };
    let actualState: any = { valid: false, errors: ['required'] , value: 'somevalue'};

    actualState = formValidator(actualState, { type: 'reset' });

    expect(actualState).toMatchObject(expectedState);
  });

  it('should keep pristine after focus and blur, without change', () => {
    const expectedState = { valid: true, pristine: true};
    let actualState: any = { valid: true, pristine: true};

    actualState = formValidator(actualState, { type: 'focus'});
    actualState = formValidator(actualState, { type: 'blue'});

    expect(actualState).toMatchObject(expectedState);
  });
});
