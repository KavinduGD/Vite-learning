import React from "react";

export default function BooksList(props) {
  return (
    <div>
      <h2>BookList</h2>

      {props.list.map((book) => (
        <div key={book.id}>{book.name}</div>
      ))}
    </div>
  );
}
