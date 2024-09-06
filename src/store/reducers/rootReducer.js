import { combineReducers } from "redux";
import { cityListReducer } from "./cityListReducer";

export const rootReduscer = combineReducers({
    cityListState: cityListReducer,
})