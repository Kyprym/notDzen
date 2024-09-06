import { createStore } from "redux";
import { rootReduscer } from "./reducers/rootReducer";

export const store = createStore(rootReduscer)