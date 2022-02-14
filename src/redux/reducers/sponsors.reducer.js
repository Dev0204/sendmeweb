import { dataConstants } from "../../constants"

const initialState = {
    loading: false,
    searchValue: '',
    sponsorsList: [],
    filteredSponsorsList: []
}

export const sponsorsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case dataConstants.FETCH_SPONSORS_LIST_REQUEST:
            return { ...state, loading: true }
        case dataConstants.FETCH_SPONSORS_LIST_SUCCESS:
            return sponsorsListSuccess(state, payload);
        case dataConstants.FETCH_SPONSORS_LIST_FAILURE:
            return { ...state, loading: false }

        case dataConstants.FILTER_BY_SPONSORS_LIST:
            return sponsorsListFilter(state, payload);

        case dataConstants.CLEAR_DATA_STORE:
            return initialState;
        default:
            return state
    }
}

function sponsorsListSuccess(state, payload) {
    const { data } = payload;
    return {
        ...state,
        loading: false,
        sponsorsList: data,
        filteredSponsorsList: data
    };
}

function sponsorsListFilter(state, payload) {
    const { value } = payload;
    let filteredValues = state.sponsorsList.filter(sponsor => {
        //return any product whose name or designer contains the input box string
        return sponsor.display_name.toLowerCase().includes(value);
    });
    return {
        ...state,
        loading: false,
        searchValue: value,
        filteredSponsorsList: filteredValues
    };
}