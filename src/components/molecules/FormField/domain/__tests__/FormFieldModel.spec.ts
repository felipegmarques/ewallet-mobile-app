import 'jest';
import * as FormFieldModel from '../FormFieldModel';

describe('FormFiedlModel', () => {

  // Mock Validator
  let mockValidator: () => string;

  beforeEach(() => {
    const mock = jest.fn();
    mock.mockReturnValue('');
    mockValidator = mock;
  });

  it('Focus event: should not validate', () => {
    const state = { valid: true, pristine: true, focus: false };

    FormFieldModel.nextState(state, { type: 'focus' }, [mockValidator]);

    expect(mockValidator).not.toBeCalled();
  });

  it('Focus event: should set focus to true', () => {
    const expectedState = { valid: true, focus: true, pristine: true};
    const previousState = { valid: true, pristine: true, focus: false};

    const actualState = FormFieldModel.nextState(previousState, { type: 'focus' });

    expect(actualState).toMatchObject(expectedState);

  });

  it('Change event: should validate', () => {
    const state = { valid: true, pristine: true, focus: true };

    FormFieldModel.nextState(state, {type: 'change', value: ''}, [mockValidator]);

    expect(mockValidator).toBeCalled();
  });

  it('Change event: updates value and set pristine to false', () => {
    const expectedState = { valid: true, value: 'newvalue', pristine: false };
    const previousState = { valid: true, pristine: true, focus: true};

    const actualState = FormFieldModel.nextState(previousState, { type: 'change', value: 'newvalue' });

    expect(actualState).toMatchObject(expectedState);
  });

  it('Change event: updates value to \'\' when \'\'', () => {
    const expectedState = { valid: true, value: '', pristine: false };
    const previousState = { valid: true, pristine: true, focus: true};
    const actualState = FormFieldModel.nextState(previousState, { type: 'change', value: '' });

    expect(actualState).toMatchObject(expectedState);
  });

  it('Change event: should call Mask clean and apply', () => {
    const state = { valid: true, value: '', pristine: false, focus: false};
    const clean = jest.fn();
    clean.mockReturnValue('a');
    const apply = jest.fn();

    FormFieldModel.nextState(state, { type: 'change', value: 'a'}, [], { clean, apply });

    expect(clean).toBeCalledWith('a');
    expect(apply).toBeCalledWith('a');
  })

  it('Blur event: should validate when looses focus', () => {
    const state = { valid: true, pristine: true, focus: true };

    FormFieldModel.nextState(state, { type: 'blur'}, [mockValidator]);

    expect(mockValidator).toBeCalled();
  });

  it('Blur event: should set focus to false', () => {
    const expectedState = { valid: true, focus: false, pristine: true};
    const previousState = { valid: true, focus: true, pristine: true };

    const actualState = FormFieldModel.nextState(previousState, { type: 'blur' });

    expect(actualState).toMatchObject(expectedState);
  });


});
