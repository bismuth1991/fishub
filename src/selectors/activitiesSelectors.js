export const dummy = 'dummy';

export const getActivities = ({ entities: { activities } }) => (
  Object.values(activities)
);
