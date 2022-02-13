import { io } from "socket.io-client";

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "connect_socket":
      return {
        ...state,
        socket: io("http://localhost:3001/"),
      };
    case "disconnect_socket":
      state.socket.disconnect();
      return {
        ...state,
      };
    case "data_get":
      return {
        ...state,
        data: action.data,
      };
    case "character_added":
      return {
        ...state,
        data: [...state.data, ...action.data],
      };
    case "drag_start":
      return {
        ...state,
        drag: action.data,
      };
    case "delete_character":
      state.socket.emit("character-delete", action.data);
      break;
    case "character_deleted":
      return {
        ...state,
        data: state.data.filter((x: any) => x.id !== action.data),
      };
    default:
      return state;
  }
};

export const initialState = {
  socket: null,
  user: "tempUser",
  data: [],
  drag: null,
};
