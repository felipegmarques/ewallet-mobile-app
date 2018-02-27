import 'jest';
import { dateMaskBuilder } from '../DateMask';

describe('Money Mask', () => {

  const dateMask = dateMaskBuilder('YYYY/MM/DD');

  it('should return the same received value', () => {
    const date = new Date();
    expect(dateMask.clean(date)).toEqual(date);
  });

});
