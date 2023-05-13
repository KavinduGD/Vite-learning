import { createContext, useReducer } from "react";

export const EquipmentContext = createContext();

export const equipmentReducer = (state, action) => {
  switch (action.type) {
    case "ADD_Eq":
      return {
        equipments: [
          ...state.equipments,
          { id: Math.random(), name: action.payload.name },
        ],
      };
    case "DELETE_Eq":
      return {
        equipments: state.equipments.filter(
          (eq) => eq.id !== action.payload.id
        ),
      };
  }
};

export const EquipmentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(equipmentReducer, {
    equipments: [
      {
        id: 1,
        name: "equipment1",
      },
      {
        id: 2,
        name: "equipment2",
      },
    ],
  });

  return (
    <EquipmentContext.Provider value={{ state, dispatch }}>
      {children}
    </EquipmentContext.Provider>
  );
};
