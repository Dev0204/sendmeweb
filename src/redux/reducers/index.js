import { combineReducers } from 'redux';

import { missionariesReducer } from './missionaries.reducer';
import { sponsorsReducer } from './sponsors.reducer';
import { userReducer } from './user.reducer';
import { headerReducer } from './header.reducer';

export default combineReducers({
    missionaries: missionariesReducer,
    sponsors: sponsorsReducer,
    user: userReducer,
    header: headerReducer
});