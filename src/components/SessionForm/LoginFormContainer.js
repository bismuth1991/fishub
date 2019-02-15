import { connect } from 'react-redux';

import LoginForm from './LoginForm';
import { logIn } from '../../actions/sessionActions';

const mapDispatchToProps = dispatch => ({
  logIn: userData => dispatch(logIn(userData)),
});

export default connect(
  null,
  mapDispatchToProps,
)(LoginForm);
