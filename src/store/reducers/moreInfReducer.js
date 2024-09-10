const defaultState = false
export const moreInfReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SHOW_MOREINF":
            return true
        case "HIDE_MOREINF":
            return false
        default:
            return state
    }
}