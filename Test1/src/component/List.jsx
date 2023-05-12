import React from "react";

export default function List(props) {
  return (
    <div
      style={{
        margin: "20px",
        border: "1px solid black",
        width: "400px",
        padding: "20px",
      }}
    >
      <h2 style={{ textDecoration: "underline" }}>List</h2>

      {props.list.map((book) => (
        <div key={book.id}>
          <h3>{book.name}</h3>
        </div>
      ))}
    </div>
  );
}
