import React, { createContext, useReducer } from "react";
import { ContextProps } from "../../models/ContextProps";
import { initialState, reducer } from "../reducers/reducer";

export const Context = createContext<Partial<ContextProps>>({});

const ContextProvider: React.FC = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
