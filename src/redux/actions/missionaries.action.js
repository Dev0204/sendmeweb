import { dataConstants } from "../../constants";

export function missionariesListRequest() {
    return {
        type: dataConstants.FETCH_MISSIONARIES_LIST_REQUEST
    };
}

export function missionariesListSuccess(missionaries) {
    return {
        type: dataConstants.FETCH_MISSIONARIES_LIST_SUCCESS,
        payload: missionaries
    };
}

export function missionariesListFailure(error) {
    return {
        type: dataConstants.FETCH_MISSIONARIES_LIST_FAILURE,
        error
    };
}

export function missionariesListfilter(value) {
    return {
        type: dataConstants.FILTER_BY_MISSIONARIES_LIST,
        payload: { value }
    };
}