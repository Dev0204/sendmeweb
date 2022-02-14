import { all } from 'redux-saga/effects';

import watchMissionariesSaga from './watchers/missionaries.watcher';
import watchSponsorsSaga from './watchers/sponsors.watcher';
import watchUsersSaga from './watchers/users.watcher';

export default function* sagas() {
    yield all([watchMissionariesSaga(), watchSponsorsSaga(), watchUsersSaga()]);
}