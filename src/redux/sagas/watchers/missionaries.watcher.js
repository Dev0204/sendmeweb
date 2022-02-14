import { takeLatest, put, call, delay } from 'redux-saga/effects';
import { dataConstants } from '../../../constants';
import { missionariesListFailure, missionariesListSuccess } from '../../actions';
import { getMissionariesFeed } from '../../services';

function* workerGetMissionariesSaga() {
    try {
        let authToken = 'eb9592f62448d9ae683fd4eb5435ae1dc7a1a3eaae4d16ca46e19f0bc98d4a231605f29cd6304207a030d1a3db8160'
        const { data } = yield call(getMissionariesFeed, authToken);
        yield put(missionariesListSuccess(data));
    } catch (error) {
        yield put(missionariesListFailure(error));
    }
}

export default function* watchMissionariesSaga() {
    yield takeLatest(dataConstants.FETCH_MISSIONARIES_LIST_REQUEST, workerGetMissionariesSaga);
}
