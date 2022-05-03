import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './SignupForm';


const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'signup'    
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);