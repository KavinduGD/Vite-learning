import React from "react";

export default function EquipmentList(props) {
  return (
    <div
      style={{
        margin: "20px",
        border: "1px solid black",
        width: "400px",
        padding: "20px",
      }}
    >
      <h2 style={{ textDecoration: "underline" }}>Equipment List</h2>

      {props.list.map((eq) => (
        <div key={eq.id}>
          <h3>{eq.name}</h3>
        </div>
      ))}
    </div>
  );
}
