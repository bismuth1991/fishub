import { connect } from 'react-redux';

import { getAllBaits } from '../../selectors/baits';
import Baits from './Baits';

const mapStateToProps = state => ({
  baits: getAllBaits(state),
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Baits);
