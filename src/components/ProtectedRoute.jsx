import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DataContext } from "../store/DataProvider";

export const ProtectedRoute = ({ children }) => {
  const {
    state: { user },
  } = useContext(DataContext); 

  if(!user) {
    return <Navigate to="/"></Navigate>
  }

  return children
}