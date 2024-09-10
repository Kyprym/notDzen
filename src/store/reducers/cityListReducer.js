const defaultState = false

export const cityListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SHOW_CITY":
            return true
        case "CLOSE_CITY":
            return false
        default:
            return state

    }
}