import React, { createContext, useContext, useReducer } from "react";
//Prepare the data layer

export const StateContext = createContext();
// Wrap the app and provide the data layer
export const StateProvider = ({ reducer, initalState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initalState)}>
    {children}
  </StateContext.Provider>
);
//pul info from the data layer
export const useStateValue = () => useContext(StateContext);
