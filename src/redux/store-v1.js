import { createStore, combineReducers, applyMiddleware } from "redux";
import accountReducer from "./accountSlice.js";
import customerReducer from "./customerSlice.js";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;