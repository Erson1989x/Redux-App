import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdrawal(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: {
            amount: amount,
            purpose: purpose,
          },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;

        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },
    payload(state, action) {
      state.loan = 0;
      state.loanPurpose = "";
      state.balance -= state.loan;
    },
  },
});

export const { deposit, withdrawal, requestLoan, payLoan } =
  accountSlice.actions;
export default accountSlice.reducer;
/*
const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false
      };
    case "account/withdrawal":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      //LAter
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    case "account/convertingCurrency":
      return {
        ...state,
        isLoading: true
      }

    default:
      return state;
  }
};

export default accountReducer;

export const deposit = (amount, currency) => {
  if (currency === "USD")
    return {
      type: "account/deposit",
      payload: amount,
    };

  return async (dispatch, getState) => {
    dispatch({
      type:"account/convertingCurrency"
    })

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;
    
    dispatch({
      type: "account/deposit",
      payload: converted,
    });
  };
};

export const withdrawal = (amount) => {
  return {
    type: "account/withdrawal",
    payload: amount,
  };
};

export const requestLoan = (amount, purpose) => {
  return {
    type: "account/requestLoan",
    payload: {
      amount: amount,
      purpose: purpose,
    },
  };
};

export const payLoan = () => {
  return {
    type: "account/payLoan",
  };
};

*/
