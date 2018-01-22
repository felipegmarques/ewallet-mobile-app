import { applyMask } from '../ValueMask';

describe('applyMask', () => {
  it('should apply mask til where string is', () => {
    let result = applyMask('11', '(XX) XXXXX-XXXX');
    expect(result).toBe('(11');
  });

  it('should ignore non numeric values', () => {
    let result = applyMask('f11', '(XX) XXXXX-XXXX');
    expect(result).toBe('(11');
  });
});
