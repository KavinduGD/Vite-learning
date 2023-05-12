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
    <div style={{ marginTop: "5rem" }}>
      <h2>Books Form</h2>

      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Book Name" onChange={inputHandler} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
