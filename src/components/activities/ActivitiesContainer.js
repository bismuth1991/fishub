import { connect } from 'react-redux';

import { getActivities } from '../../selectors/activitiesSelectors';
import { fetchActivities } from '../../actions/activitiesActions';

import Activities from './Activities';

const mapStateToProps = state => ({
  activities: getActivities(state),
});

const mapDispatchToProps = dispatch => ({
  fetchActivities: () => dispatch(fetchActivities()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Activities);
