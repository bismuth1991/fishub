import { getAllBaits } from './baits';
import mockState from '../mocks/mockState';
import { mockBaitsArray } from '../mocks/mockBaits';

describe('getAllBaits', () => {
  it('returns an array of baits', () => {
    const allBaits = getAllBaits(mockState);
    expect(allBaits).toEqual(mockBaitsArray);
  });
});
