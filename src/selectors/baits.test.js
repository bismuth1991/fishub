import { getAllBaits } from './baits';
import mockState from '../store/mockState';

describe('getAllBaits', () => {
  it('returns an array of baits', () => {
    const allBaits = getAllBaits(mockState);
    expect(allBaits).toEqual([
      {
        id: 1,
        name: 'Fat Rap',
        category: 'Crankbait',
        image: 'fat-rap.png',
      },
      {
        id: 2,
        name: 'Yummy Gummy',
        category: 'Softbait',
        image: 'yummy-gummy.png',
      },
      {
        id: 3,
        name: 'Fire Tiger',
        category: 'Spinner',
        image: 'fire-tiger.png',
      },
      {
        id: 4,
        name: 'Mr. Mustache',
        category: 'Popper',
        image: 'mr-mustache.png',
      },
      {
        id: 5,
        name: 'Strike King',
        category: 'Crankbait',
        image: 'strike-king.png',
      },
      {
        id: 6,
        name: 'Rooster Tail',
        category: 'Spinner',
        image: 'rooster-tail.png',
      },
      {
        id: 7,
        name: 'Marabou Muddler',
        category: 'Fly',
        image: 'marabou-muddler.png',
      },
      {
        id: 8,
        name: 'Bucktail',
        category: 'Jig',
        image: 'bucktail.png',
      },
      {
        id: 9,
        name: 'Daredevil',
        category: 'Spoon',
        image: 'daredevil.png',
      },
    ]);
  });
});
