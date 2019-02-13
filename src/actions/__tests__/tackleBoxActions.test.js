import {
  ADD_BAIT,
  addBait,
} from '../tackleBoxActions';

describe('tackleBoxActions', () => {
  it('should create an action to add bait', () => {
    const baitId = 1;
    const expectedAction = {
      type: ADD_BAIT,
      baitId,
    };
    expect(addBait(baitId)).toEqual(expectedAction);
  });
});
