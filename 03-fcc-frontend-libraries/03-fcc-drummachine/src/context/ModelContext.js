// A context to switch between the two drum machine models, 808 and 909
import React, { createContext } from "react";
import useToggleState from "../hooks/useToggleState";

export const ModelContext = createContext();

export function ModelProvider(props) {
  const [is808, toggle808] = useToggleState(false);

  return (
    <ModelContext.Provider value={{ is808, toggle808 }}>
      {props.children}
    </ModelContext.Provider>
  );
}
