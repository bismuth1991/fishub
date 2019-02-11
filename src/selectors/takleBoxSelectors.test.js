import {
  getTackleBox,
  getBaitsInTackleBox,
  isTackleBoxEmpty,
} from './tackleBoxSelectors';

describe('tackleBox selectors', () => {
  const tackleBox = [1, 4];
  const baits = {
    1: {
      id: 1,
      name: 'Fat Rap',
      category: 'Crankbait',
      image: 'fat-rap.png',
    },
    4: {
      id: 4,
      name: 'Mr. Mustache',
      category: 'Popper',
      image: 'mr-mustache.png',
    },
  };
  const mockState = {
    entities: {
      tackleBox,
      baits,
    },
  };

  describe('getTackleBox', () => {
    it('returns tackle box', () => {
      expect(getTackleBox(mockState)).toEqual(tackleBox);
    });
  });

  describe('getBaitsInTackleBox', () => {
    it('returns an array of baits', () => {
      expect(getBaitsInTackleBox(mockState)).toEqual(baits);
    });
  });

  describe('isTackleBoxEmpty', () => {
    const mockStateWithEmptyTackleBox = {
      entities: { tackleBox: [] },
    };

    it('returns true when tackle box is empty', () => {
      expect(isTackleBoxEmpty(mockStateWithEmptyTackleBox))
        .toBe(true);
    });

    it('returns false when tackle box is not empty', () => {
      expect(isTackleBoxEmpty(mockState))
        .toBe(false);
    });
  });
});
