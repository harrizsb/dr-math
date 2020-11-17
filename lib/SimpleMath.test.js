import SimpleMath from './SimpleMath';

describe('SimpleMath test suite', () => {
  describe('sum test', () => {
    it('2 + 2 = 4', () => {
      const s = new SimpleMath(2, 2);

      expect(s.sum).toEqual(4);
    });
  });

  describe('multiply test', () => {
    it('2 * 2 = 4', () => {
      const s = new SimpleMath(2, 2);

      expect(s.multiply).toEqual(4);
    });
  });

  describe('prime sequence', () => {
    it('sequence of 4 is [2,3,5,7]', () => {
      const s = new SimpleMath(4);

      const res = s.primeSequence;

      expect(res).toEqual([2, 3, 5, 7]);
    });
  });

  describe('fibonacci sequence', () => {
    it('sequence of 4 is [0,1,1,2]', () => {
      const s = new SimpleMath(4);

      const res = s.fibSequence;

      expect(res).toEqual([0, 1, 1, 2]);
    });
  });
});
