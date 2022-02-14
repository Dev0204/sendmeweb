import { dataConstants } from "../../constants"

const initialState = {
    loading: false,
    activeTab: 0
}

export const headerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case dataConstants.ACTIVE_SELECTED_TAB:
            return { ...state, activeTab: payload }

        case dataConstants.CLEAR_DATA_STORE:
            return initialState;
        default:
            return state
    }
}