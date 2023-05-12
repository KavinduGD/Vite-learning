import { useState } from "react";
import { useBooksContext } from "../hooks/useBooksContext";

export default function BooksForm() {
  const { dispatch } = useBooksContext();
  const [name, setName] = useState("");
  //console.log(name);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name);
    dispatch({ type: "ADD_BOOK", payload: { name } });
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
      <h2>Books Form</h2>

      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Book Name" onChange={inputHandler} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
