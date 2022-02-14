import { takeLatest, put, call, delay } from 'redux-saga/effects';
import { userConstants } from '../../../constants';
import { history } from '../../../helpers';
import { clearData, userForgotPasswordFailure, userForgotPasswordSuccess, userLoginFailure, userLoginSuccess, userLogoutFailure, userLogoutSuccess, userRegistrationFailure, userRegistrationSuccess, userResetPasswordFailure, userResetPasswordSuccess, addNotification } from '../../actions';
import { forgotPassword, login, logout, registration, resetPassword } from '../../services';

function* workerUserLoginSaga(action) {
    const { payload } = action;
    try {
        const response = yield call(login, payload);
        localStorage.setItem('auth_token', response.data.auth_token)
        yield put(addNotification({ status: response.status, msg: response.msg }))
        yield put(userLoginSuccess(response));
        history.replace('/')
    } catch (error) {
        yield put(addNotification({ status: error.status, msg: error.msg }))
        yield put(userLoginFailure());
    }
}

function* workerUserRegistrationSaga(action) {
    const { payload } = action;
    try {
        const response = yield call(registration, payload);
        localStorage.setItem('auth_token', response.data.auth_token)
        yield put(addNotification({ status: response.status, msg: response.msg }))
        yield put(userRegistrationSuccess(response));
        history.replace('/')
    } catch (error) {
        yield put(addNotification({ status: error.status, msg: error.msg }))
        yield put(userRegistrationFailure());
    }
}

function* workerUserForgotSaga(action) {
    const { payload } = action;
    try {
        const response = yield call(forgotPassword, payload);
        yield put(addNotification({ status: response.status, msg: response.msg }))
        yield put(userForgotPasswordSuccess());
        history.push('/reset', { email: payload.email })
    } catch (error) {
        yield put(addNotification({ status: error.status, msg: error.msg }))
        yield put(userForgotPasswordFailure());
    }
}

function* workerUserResetSaga(action) {
    const { payload } = action;
    try {
        const response = yield call(resetPassword, payload);
        yield put(addNotification({ status: response.status, msg: response.msg }))
        yield put(userResetPasswordSuccess());
        history.go(-2)
    } catch (error) {
        yield put(addNotification({ status: error.status, msg: error.msg }))
        yield put(userResetPasswordFailure());
    }
}


function* workerUserLogoutSaga() {
    try {
        const response = yield call(logout)
        localStorage.removeItem('auth_token');
        yield put(addNotification({ status: response.status, msg: response.msg }))
        yield put(userLogoutSuccess());
        yield put(clearData());
    } catch (error) {
        yield put(addNotification({ status: error.status, msg: error.msg }))
        yield put(userLogoutFailure());
    }
}

export default function* watchMissionariesSaga() {
    yield takeLatest(userConstants.USER_LOGIN_REQUEST, workerUserLoginSaga);
    yield takeLatest(userConstants.USER_REGISTRATION_REQUEST, workerUserRegistrationSaga);
    yield takeLatest(userConstants.USER_FORGOT_PASSWORD_REQUEST, workerUserForgotSaga);
    yield takeLatest(userConstants.USER_RESET_PASSWORD_REQUEST, workerUserResetSaga);
    yield takeLatest(userConstants.USER_LOGOUT_REQUEST, workerUserLogoutSaga);
}
