import { getAllBaits } from './baitsSelectors';
import { mockBaitsArray, mockBaits } from '../mocks/mockBaits';

describe('getAllBaits', () => {
  const mockState = {
    entities: {
      baits: mockBaits,
    },
  };

  it('returns an array of baits', () => {
    const allBaits = getAllBaits(mockState);
    expect(allBaits).toEqual(mockBaitsArray);
  });
});
