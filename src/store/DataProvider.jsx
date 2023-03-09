import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { initialState } from "./state";

export const DataContext = createContext()

export const DataProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const sharedData = {
    state, dispatch
  }

  return <DataContext.Provider value={ sharedData }>
    { children }
  </DataContext.Provider>
}