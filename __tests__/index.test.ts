const calculator = require('../index');

describe('string calculator', () => {
  describe('when adding numbers', () => {
    describe('when receiving empty input', () => {
      it('should return 0', () => {
        expect(calculator.add('')).toBe(0);
      });
    });
  });
});
