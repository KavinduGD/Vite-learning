import React from "react";
import { useBooksContext } from "../hooks/useBooksContext";
import Form from "../component/Form";
import SingleBook from "../component/SingleBook";
import List from "../component/List";

export default function Page() {
  const { state } = useBooksContext();

  console.log(state);

  return (
    <div>
      <div>
        <div
          style={{ margin: "20px", border: "1px solid black", width: "400px" }}
        >
          {state.books.map((book) => (
            <div>
              <SingleBook
                key={book.id}
                id={book.id}
                name={book.name}
              ></SingleBook>
            </div>
          ))}
        </div>
        <div>
          <Form />
        </div>
        <div> {<List list={state.books} />}</div>
      </div>
    </div>
  );
}
