const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
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
