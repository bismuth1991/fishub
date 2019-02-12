import dateFns from 'date-fns';

const formatDate = date => (
  dateFns.format(date, 'MMMM Do [at] h:mm a')
);

export default formatDate;
