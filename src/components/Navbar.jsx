import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../store/DataProvider";

export const Navbar = () => {
  const context = useContext(DataContext);
  const navigate = useNavigate()

  const logout = (e) => {
    e.preventDefault()

    // TODO: clear USER in state (=logout)

    // TODO: FORWARD to home route
  };

  return (
    <nav className="flex justify-center gap-4">
      <NavLink to="/">Login</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="#" onClick={ logout }>Logout</NavLink>
    </nav>
  );
};
