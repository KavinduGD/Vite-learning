import React from "react";
import { useBooksContext } from "../hooks/useBooksContext";
import BooksForm from "../component/BooksForm";
import SingleBook from "../component/SingleBook";
import BooksList from "../component/BooksList";

export default function Book(props) {
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
          <BooksForm />
        </div>
        <div> {<BooksList list={state.books} />}</div>
      </div>
    </div>
  );
}
