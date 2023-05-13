import { useState } from "react";
import { useEquipmentContext } from "../hooks/useEquipmentContext";

export default function EquipmentForm() {
  const { dispatch } = useEquipmentContext();
  const [name, setName] = useState("");
  //console.log(name);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name);
    dispatch({ type: "ADD_Eq", payload: { name } });
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
      <h2>Equipment Form</h2>

      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Equipment" onChange={inputHandler} />
        <button type="submit">Add Equipment</button>
      </form>
    </div>
  );
}
