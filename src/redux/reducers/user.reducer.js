import { userConstants, dataConstants } from "../../constants"

const initialState = {
    loading: false,
    isLoginSuccesss: false,
    isAuth: false,
    isNotificationEnabled: false,
    userData: [],
    notification: {
        status: 0,
        msg: ''
    }
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case userConstants.USER_LOGIN_REQUEST:
            return { ...state, loading: true }
        case userConstants.USER_LOGIN_SUCCESS:
            return loginSuccess(state, payload);
        case userConstants.USER_LOGIN_FAILURE:
            return { ...state, loading: false }

        case userConstants.USER_REGISTRATION_REQUEST:
            return { ...state, loading: true }
        case userConstants.USER_REGISTRATION_SUCCESS:
            return registrationSuccess(state, payload);
        case userConstants.USER_REGISTRATION_FAILURE:
            return { ...state, loading: false }

        case userConstants.USER_FORGOT_PASSWORD_REQUEST:
            return { ...state, loading: true }
        case userConstants.USER_FORGOT_PASSWORD_SUCCESS:
            return { ...state, loading: false }
        case userConstants.USER_FORGOT_PASSWORD_FAILURE:
            return { ...state, loading: false }

        case userConstants.USER_RESET_PASSWORD_REQUEST:
            return { ...state, loading: true }
        case userConstants.USER_RESET_PASSWORD_SUCCESS:
            return { ...state, loading: false }
        case userConstants.USER_RESET_PASSWORD_FAILURE:
            return { ...state, loading: false }

        case userConstants.USER_LOGOUT_REQUEST:
            return { ...state, loading: true }
        case userConstants.USER_LOGOUT_SUCCESS:
            return logoutSuccess(state, payload);
        case userConstants.USER_LOGOUT_FAILURE:
            return { ...state, loading: false }

        case dataConstants.ADD_NOTIFICATION:
            return addWebNotification(state, payload)
        case dataConstants.REMOVE_NOTIFICATION:
            return removeWebNotification(state, payload)

        case dataConstants.CLEAR_DATA_STORE:
            return initialState;
        default:
            return state
    }
}

function loginSuccess(state, payload) {
    const { data } = payload;
    return {
        ...state,
        isAuth: true,
        isLoginSuccesss: true,
        loading: false,
        userData: data
    };
}

function registrationSuccess(state, payload) {
    const { data } = payload;
    return {
        ...state,
        isAuth: true,
        isLoginSuccesss: true,
        loading: false,
        userData: data
    };
}

function logoutSuccess(state, payload) {
    // const { data } = payload;
    return {
        ...state,
        isAuth: false,
        loading: false,
    };
}

function addWebNotification(state, payload) {
    const { data } = payload;
    return {
        ...state,
        isNotificationEnabled: true,
        notification: data
    };
}

function removeWebNotification(state, payload) {
    // const { data } = payload;
    return {
        ...state,
        isNotificationEnabled: false,
    };
}