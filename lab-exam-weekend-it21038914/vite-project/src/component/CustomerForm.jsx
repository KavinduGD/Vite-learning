import { useState } from "react";
import { useCustomerContext } from "../hooks/useCustomerContext";

export default function CustomerForm() {
  const { dispatch } = useCustomerContext();
  const [name, setName] = useState("");
  //console.log(name);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name);
    dispatch({ type: "ADD_Cus", payload: { name } });
  };

  const inputHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <div
      style={{
        margin: "20px",
        border: "1px solid black",
        width: "400px",
        padding: "20px",
      }}
    >
      <h2>Customer Form</h2>

      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Customer" onChange={inputHandler} />
        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
}
