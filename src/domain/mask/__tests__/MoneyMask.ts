import 'jest';
import { MoneyMask } from '../MoneyMask';
import { Money } from 'app/components/Typography';

describe('Money Mask', () => {
  it('should clean masked value', () => {
    expect(MoneyMask.clean('R$ 503.32')).toEqual('50332');
  });

  it('should clean well negative value', () => {
    expect(MoneyMask.clean('R$ -503.32')).toEqual('-50332')
  });

  it('should clean even if masked is not applyed, that is, when first typed', () => {
    expect(MoneyMask.clean('5')).toEqual('5');
  });

  it('should remove trailling zero when not necessary', () => {
    expect(MoneyMask.clean('R$ 02.05')).toEqual('205')
  });

  it('should remove trailling zero when not necessary, even for negative values', () => {
    expect(MoneyMask.clean('R$ -0.05')).toEqual('-5');
  });

  it('should apply mask', () => {
    expect(MoneyMask.apply('50332')).toEqual('R$ 503.32');
  });

  it('should apply mask correctly', () => {
    expect(MoneyMask.apply('-50332')).toBe('R$ -503.32');
  });

  it('should apply mask with trailing 0 when needed', () => {
    expect(MoneyMask.apply('5')).toEqual('R$ 0.05');
  });

  it('should apply mask with trailing 0 when needed, including negative numbers', () => {
    expect(MoneyMask.apply('-5')).toEqual('R$ -0.05');
  });

});
