import { dataConstants } from "../../constants"

const initialState = {
    loading: false,
    searchValue: '',
    missionariesList: [],
    filteredMissionariesList: []
}

export const missionariesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case dataConstants.FETCH_MISSIONARIES_LIST_REQUEST:
            return { ...state, loading: true }
        case dataConstants.FETCH_MISSIONARIES_LIST_SUCCESS:
            return missionariesListSuccess(state, payload);
        case dataConstants.FETCH_MISSIONARIES_LIST_FAILURE:
            return { ...state, loading: false }

        case dataConstants.FILTER_BY_MISSIONARIES_LIST:
            return missionariesListFilter(state, payload);

        case dataConstants.CLEAR_DATA_STORE:
            return initialState;
        default:
            return state
    }
}


function missionariesListSuccess(state, payload) {
    const { data } = payload;
    return {
        ...state,
        loading: false,
        missionariesList: data,
        filteredMissionariesList: data
    };
}

function missionariesListFilter(state, payload) {
    const { value } = payload;
    let filteredValues = state.missionariesList.filter(missionarie => {
        //return any product whose name or designer contains the input box string
        return missionarie.display_name.toLowerCase().includes(value);
    });
    return {
        ...state,
        loading: false,
        searchValue: value,
        filteredMissionariesList: filteredValues
    };
}
