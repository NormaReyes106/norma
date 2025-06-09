export type Activity = {
  id: string; // Cambiado a string para UUID
  category: number;
  name: string;
  calorias: number;
  service: string; // Tipo de servicio
  client: string;
  plates?: string; // Opcional para servicios distintos de estacionamiento
  startTime?: number; // Tiempo de inicio para estacionamiento
  price?: number; // Precio fijo para otros servicios
};

export type ActivityActions =
  | { type: "ADD_ACTIVITY"; payload: Activity }
  | { type: "REMOVE_ACTIVITY"; payload: string } // Updated to use UUID
  | { type: "RESET" };

export type ActivityState = {
  activities: Activity[];
  activeId?: Activity["id"];
};

export const initialState: ActivityState = {
  activities: [],
};

export function activityReducer(state: ActivityState, action: ActivityActions): ActivityState {
  switch (action.type) {
    case "ADD_ACTIVITY":
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };
    case "REMOVE_ACTIVITY":
      return {
        ...state,
        activities: state.activities.filter((activity) => activity.id !== action.payload), // Updated to filter by UUID
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}