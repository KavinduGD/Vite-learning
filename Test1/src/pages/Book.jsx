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
      {state.books.map((book) => (
        <div>
          <SingleBook key={book.id} id={book.id} name={book.name}></SingleBook>
        </div>
      ))}

      <BooksForm></BooksForm>
      <div> {<BooksList list={state.books} />}</div>
    </div>
  );
}
