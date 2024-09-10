import { combineReducers } from "redux";
import { cityListReducer } from "./cityListReducer";
import { moreInfReducer } from "./moreInfReducer";

export const rootReduscer = combineReducers({
    cityListState: cityListReducer,
    moreInfState: moreInfReducer
})