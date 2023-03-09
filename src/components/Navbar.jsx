import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../store/DataProvider";

export const Navbar = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(DataContext);

  const navigate = useNavigate()

  const logout = (e) => {
    e.preventDefault()

    dispatch({
      type: "USER_SET",
      payload: undefined,
    });

    navigate("/");
  };

  return (
    <nav className="flex justify-center gap-4">
      <NavLink to="/">Login</NavLink>
      {user && <NavLink to="/dashboard">Dashboard</NavLink>}
      {user && <NavLink to="#" onClick={ logout }>Logout</NavLink>}
    </nav>
  );
};
