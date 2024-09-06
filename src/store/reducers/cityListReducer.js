const defaultState = false

export const cityListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SHOW_CITY":
            return { ...state, state: action.payload }
        case "CLOSE_CITY":
            return { ...state, state: action.payload }
        default:
            return { state }

    }
}