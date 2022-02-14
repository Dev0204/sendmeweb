import { dataConstants } from "../../constants";

export function sponsorsListRequest() {
    return {
        type: dataConstants.FETCH_SPONSORS_LIST_REQUEST
    };
}

export function sponsorsListSuccess(sponsors) {
    return {
        type: dataConstants.FETCH_SPONSORS_LIST_SUCCESS,
        payload: sponsors
    };
}

export function sponsorsListFailure(error) {
    return {
        type: dataConstants.FETCH_SPONSORS_LIST_FAILURE,
        error
    };
}

export function sponsorsListfilter(value) {
    return {
        type: dataConstants.FILTER_BY_SPONSORS_LIST,
        payload: { value }
    };
}