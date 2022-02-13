import React, { useState, useCallback, createContext, useEffect } from "react";
import { initialState, reducer } from "./reducer";

function useReducer(reducer, initState) {
  const [state, setState] = useState(initState);

  const dispatch = useCallback(
    (action) => {
      const nextState = reducer(state, action);
      setState(nextState);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setState, state]
  );

  return [state, dispatch];
}
const AppContext = createContext({
  state: initialState,
  dispatch: (type, data) => null,
});
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "connect_socket" });
    return () => {
      dispatch({ type: "disconnect_socket" });
    };
  }, []);

  //sloppy
  useEffect(() => {
    if (state.socket == null) return;
    state.socket.emit("get-data");
    state.socket.on("get-data", (data) => dispatch({ type: "data_get", data }));
    state.socket.on("send-data", (data) => {
      dispatch({ type: "data_get", data });
    });
    state.socket.on("character-added", (data) => {
      dispatch({ type: "character_added", data });
    });
    state.socket.on("character-deleted", (data) =>
      dispatch({ type: "character_deleted", data })
    );
    return () => {
      state.socket.on("get-data", (x) => console.log(x));
      state.socket.on("recieve-changes", (x) => console.log(x));
    };
  }, [state.socket]);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider, initialState };
