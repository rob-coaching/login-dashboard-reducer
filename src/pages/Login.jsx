import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataProvider";

export const Login = () => {

  const { dispatch } = useContext(DataContext)

  const [email, setEmail] = useState();
  const [pw, setPw] = useState();
  const [error, setError] = useState("")

  const navigate = useNavigate();

  const onLoginSubmit = (e) => {
    e.preventDefault();

    if(email !== "rob" || pw !== "123") {
      return setError("Wrong creds, my dude")
    }

    dispatch({
      type: "USER_SET",
      payload: {
        _id: "u1",
        username: "robbos",
        email: email,
        avatar: "https://source.unsplash.com/100x100?avatar-guest",
      },
    });

    navigate("/dashboard");
  };

  return (
    <form onSubmit={onLoginSubmit} className="flex flex-col">
      <div>
        <label>Email</label>
        <input placeholder="rob" type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>PW</label>
        <input placeholder="123" type="text" onChange={(e) => setPw(e.target.value)} />
      </div>
      <button type="submit" className="rounded">Login</button>
      <div className="text-red-600 font-bold text-center">{error}</div>
    </form>
  );
};
