import { EquipmentContext } from "../context/EquipmentContext";
import { useContext } from "react";

export const useEquipmentContext = () => {
  const context = useContext(EquipmentContext);
  return context;
};
