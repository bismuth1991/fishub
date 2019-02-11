export const getTackleBox = ({ entities: { tackleBox } }) => tackleBox;

export const getBaitsInTackleBox = (state) => {
  const { entities: { baits, tackleBox } } = state;
  return tackleBox.map(baitId => baits[baitId]);
};

export const isTackleBoxEmpty = ({ entities: { tackleBox } }) => (
  tackleBox.length === 0
);
