import { connect } from 'react-redux';

import { getAllBaits } from '../../selectors/baitsSelectors';
import { getTackleBox } from '../../selectors/tackleBoxSelectors';
import { addBait } from '../../actions/tackleBoxActions';
import { fetchBaits } from '../../actions/baitsActions';

import Baits from './Baits';

const mapStateToProps = state => ({
  baits: getAllBaits(state),
  tackleBox: getTackleBox(state),
});

const mapDispatchToProps = dispatch => ({
  addBait: baitId => dispatch(addBait(baitId)),
  fetchBaits: () => dispatch(fetchBaits()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Baits);
