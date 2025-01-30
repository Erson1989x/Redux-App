import { createStore, combineReducers } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const accountReducer = (state = initialStateAccount, action) => {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
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

    default:
      return state;
  }
};

const customerReducer = (state = initialStateCustomer, action) => {
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

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
});

const store = createStore(rootReducer);

/*
store.dispatch({
  type: "account/deposit",
  payload: 500,
});

store.dispatch({
  type: "account/withdrawal",
  payload: 200,
});

store.dispatch({
  type: "account/requestLoan",
  payload: {
    amount: 1000,
    purpose: "Buy a car",
  },
});

store.dispatch({
  type: "account/payLoan",
});

console.log(store.getState());
*/

const deposit = (amount) => {
  return {
    type: "account/deposit",
    payload: amount,
  };
};

const withdrawal = (amount) => {
  return {
    type: "account/withdrawal",
    payload: amount,
  };
};

const requestLoan = (amount, purpose) => {
  return {
    type: "account/requestLoan",
    payload: {
      amount: amount,
      purpose: purpose,
    },
  };
};

const payLoan = () => {
  return {
    type: "account/payLoan",
  };
};

store.dispatch(deposit(500));
store.dispatch(withdrawal(200));
store.dispatch(requestLoan(1000, "Buy a car"));
store.dispatch(payLoan());


const createCustomer = (fullName, nationalID) => {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName: fullName,
      nationalID: nationalID,
      createdAt: new Date().toISOString(),
    },
  };
};

const updateCustomer = (fullName, nationalID) => {
  return {
    type: "customer/updateCustomer",
    payload: {
      fullName: fullName,
      nationalID: nationalID,
    },
  };
};

store.dispatch(createCustomer("Erhard Nagy", "123456789"));

console.log(store.getState());

store.dispatch(updateCustomer("Erhard Nagy D", "123456789"));

console.log(store.getState());