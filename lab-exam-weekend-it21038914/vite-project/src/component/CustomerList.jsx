import React from "react";

export default function CustomerList(props) {
  return (
    <div
      style={{
        margin: "20px",
        border: "1px solid black",
        width: "400px",
        padding: "20px",
      }}
    >
      <h2 style={{ textDecoration: "underline" }}>Customer List</h2>

      {props.list.map((cus) => (
        <div key={cus.id}>
          <h3>{cus.name}</h3>
        </div>
      ))}
    </div>
  );
}
