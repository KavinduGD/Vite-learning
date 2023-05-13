import { CustomerContext } from "../context/CustomerContex";
import { useContext } from "react";

export const useCustomerContext = () => {
  const context = useContext(CustomerContext);
  return context;
};
