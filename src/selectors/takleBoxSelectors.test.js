import { getTackleBox } from './tackleBoxSelectors';

describe('tackleBox selectors', () => {
  describe('getTackleBox', () => {
    const mockState = {
      entities: {
        tackleBox: [1, 3, 5],
      },
    };

    it('returns tackle box', () => {
      expect(getTackleBox(mockState)).toEqual([1, 3, 5]);
    });
  });
});
