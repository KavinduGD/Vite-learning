import React from "react";
import { useEquipmentContext } from "../hooks/useEquipmentContext";
import EquipmentList from "../component/EquipmentList";
import EquipmentForm from "../component/EquipmentListForm";
import SingleEquipment from "../component/SingleEquipment";

export default function Equipment() {
  const { state } = useEquipmentContext();
  console.log(state);
  return (
    <div>
      <h2>Equipment Page</h2>
      <div
        style={{ margin: "20px", border: "1px solid black", width: "400px" }}
      >
        {state.equipments.map((eq) => (
          <div>
            <SingleEquipment
              key={eq.id}
              id={eq.id}
              name={eq.name}
            ></SingleEquipment>
          </div>
        ))}
      </div>
      <EquipmentForm />
      <div> {<EquipmentList list={state.equipments} />}</div>
    </div>
  );
}
