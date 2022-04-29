import * as APIUtil from '../util/session_api_util'

// Create actions for signup, login, logout
// create types
// create consts in order to not need to worry about spelling

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

// takes in currentUser,
export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});
// takes in nothing
export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});
// takes in errors
export const recieveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});
// try to understand this stuff better
export const signup = user => dispatch => (
    APIUtil.signup(user).then(user => (
        dispatch(receiveCurrentUser(user))
        ), error => (
            dispatch(recieveErrors(error.responseJSON))
        ))
);

export const login = user => dispatch => (
    APIUtil.login(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), error => (
        dispatch(recieveErrors(error.responseJSON))
    ))
);

export const logout = () => dispatch => (
    APIUtil.logout().then(user => (
        dispatch(logoutCurrentUser())
    ))
);



