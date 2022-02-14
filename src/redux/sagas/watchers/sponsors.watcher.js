import { takeLatest, put, call, delay } from 'redux-saga/effects';
import { dataConstants } from '../../../constants';
import { sponsorsListFailure, sponsorsListSuccess } from '../../actions';
import { getAllSponsors } from '../../services';

function* workerGetSponsorsSaga() {
    try {
        let authToken = 'eb9592f62448d9ae683fd4eb5435ae1dc7a1a3eaae4d16ca46e19f0bc98d4a231605f29cd6304207a030d1a3db8160'
        const { data } = yield call(getAllSponsors, authToken);
        yield put(sponsorsListSuccess(data));
    } catch (error) {
        yield put(sponsorsListFailure(error));
    }
}

export default function* watchMissionariesSaga() {
    yield takeLatest(dataConstants.FETCH_SPONSORS_LIST_REQUEST, workerGetSponsorsSaga);
}
