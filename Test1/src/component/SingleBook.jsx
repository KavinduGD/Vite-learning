import React from "react";
import { useBooksContext } from "../hooks/useBooksContext";

export default function SingleBook(props) {
  const { dispatch } = useBooksContext();

  const deleteHandler = () => {
    console.log(props.id);
    dispatch({ type: "DELETE_BOOK", payload: { id: props.id } });
  };
  return (
    <div style={{ margin: "3rem" }}>
      <h2>{props.name}</h2>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}
