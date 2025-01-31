import accountReducer from "./accountSlice.js";
import customerReducer from "./customerSlice.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        account: accountReducer,
        customer: customerReducer,
    },
});

export default store;