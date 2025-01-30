import { createStore, combineReducers } from "redux";
import accountReducer from "./accountSlice.js";
import customerReducer from "./customerSlice.js";

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;