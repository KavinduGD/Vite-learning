import React from "react";
import { useCustomerContext } from "../hooks/useCustomerContext";

export default function SingleCustomer(props) {
  const { dispatch } = useCustomerContext();

  const deleteHandler = () => {
    console.log(props.id);
    dispatch({ type: "DELETE_Cus", payload: { id: props.id } });
  };
  return (
    <div style={{ margin: "3rem" }}>
      <h2>{props.name}</h2>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}
