import { createContext, useReducer } from "react";

export const CustomerContext = createContext();

export const customerReducer = (state, action) => {
  switch (action.type) {
    case "ADD_Cus":
      return {
        customers: [
          ...state.customers,
          { id: Math.random(), name: action.payload.name },
        ],
      };
    case "DELETE_Cus":
      return {
        customers: state.customers.filter(
          (cus) => cus.id !== action.payload.id
        ),
      };
  }
};

export const CustomerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(customerReducer, {
    customers: [
      {
        id: 1,
        name: "customer1",
      },
      {
        id: 2,
        name: "customer2",
      },
    ],
  });

  return (
    <CustomerContext.Provider value={{ state, dispatch }}>
      {children}
    </CustomerContext.Provider>
  );
};
