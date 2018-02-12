import * as Validators from '../Validators';
describe('Validators', () => {
  it('Required: should be valid if pristine is true', () => {
    expect(Validators.required('', true)).toBe('');
  });

  it('Required: should be valid if pristine is false but value is present', () => {
    expect(Validators.required('value', false)).toBe('');
  });

  it('Required:  should be invalid if value is empty string', () => {
    expect(Validators.required('', false)).toBe('required');
  });

  it('Email: should be valid for valid email', () => {
    expect(Validators.email('felipe@gmail.com', false)).toBe('');
  });

  it('Email: should be invalid for invalid email', () => {
    expect(Validators.email('invalidl', false)).toBe('invalid-email');
  });
});
