import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName: fullName,
            nationalID: nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateCustomer(state, action) {
      state.fullName = action.payload.fullName;
      state.nationalID = action.payload.nationalID;
    },
  },
});

export const { createCustomer, updateCustomer } = customerSlice.actions;

export default customerSlice.reducer;

/*
const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
      };
    default:
      return state;
  }
};

export default customerReducer;

export const createCustomer = (fullName, nationalID) => {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName: fullName,
      nationalID: nationalID,
      createdAt: new Date().toISOString(),
    },
  };
};

export const updateCustomer = (fullName, nationalID) => {
  return {
    type: "customer/updateCustomer",
    payload: {
      fullName: fullName,
      nationalID: nationalID,
    },
  };
};
*/
