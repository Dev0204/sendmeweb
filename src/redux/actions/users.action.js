import { dataConstants, userConstants } from "../../constants";

export function userLoginRequest(params) {
    return {
        type: userConstants.USER_LOGIN_REQUEST,
        payload: params
    };
}

export function userLoginSuccess(user) {
    return {
        type: userConstants.USER_LOGIN_SUCCESS,
        payload: user
    };
}

export function userLoginFailure() {
    return {
        type: userConstants.USER_LOGIN_FAILURE
    };
}

export function userRegistrationRequest(user) {
    return {
        type: userConstants.USER_REGISTRATION_REQUEST,
        payload: user
    };
}

export function userRegistrationSuccess(user) {
    return {
        type: userConstants.USER_REGISTRATION_SUCCESS,
        payload: user
    };
}

export function userRegistrationFailure() {
    return {
        type: userConstants.USER_REGISTRATION_FAILURE
    };
}


export function userForgotPasswordRequest(params) {
    return {
        type: userConstants.USER_FORGOT_PASSWORD_REQUEST,
        payload: params
    };
}

export function userForgotPasswordSuccess() {
    return {
        type: userConstants.USER_FORGOT_PASSWORD_SUCCESS
    };
}

export function userForgotPasswordFailure() {
    return {
        type: userConstants.USER_FORGOT_PASSWORD_FAILURE
    };
}


export function userResetPasswordRequest(params) {
    return {
        type: userConstants.USER_RESET_PASSWORD_REQUEST,
        payload: params
    };
}

export function userResetPasswordSuccess() {
    return {
        type: userConstants.USER_RESET_PASSWORD_SUCCESS
    };
}

export function userResetPasswordFailure() {
    return {
        type: userConstants.USER_RESET_PASSWORD_FAILURE
    };
}

export function userLogoutRequest() {
    return {
        type: userConstants.USER_LOGOUT_REQUEST
    };
}

export function userLogoutSuccess() {
    return {
        type: userConstants.USER_LOGOUT_SUCCESS
    };
}

export function userLogoutFailure() {
    return {
        type: userConstants.USER_LOGOUT_FAILURE
    };
}

export function addNotification(params) {
    return {
        type: dataConstants.ADD_NOTIFICATION,
        payload: { data: params }
    };
}

export function removeNotification() {
    return {
        type: dataConstants.REMOVE_NOTIFICATION
    };
}

export function clearData() {
    return {
        type: dataConstants.CLEAR_DATA_STORE
    };
}

