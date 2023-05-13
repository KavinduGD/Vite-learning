import React from "react";
import { useEquipmentContext } from "../hooks/useEquipmentContext";

export default function SingleEquipment(props) {
  const { dispatch } = useEquipmentContext();

  const deleteHandler = () => {
    console.log(props.id);
    dispatch({ type: "DELETE_Eq", payload: { id: props.id } });
  };
  return (
    <div style={{ margin: "3rem" }}>
      <h2>{props.name}</h2>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}
