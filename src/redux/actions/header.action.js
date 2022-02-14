import { dataConstants } from "../../constants";

export function activeSelectedTab(id) {
    return {
        type: dataConstants.ACTIVE_SELECTED_TAB,
        payload: id
    };
}