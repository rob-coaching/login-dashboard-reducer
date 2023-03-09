import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../store/DataProvider";

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
        <input
          className="w-full p-1"
          placeholder="rob"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>PW</label>
        <input
          className="w-full p-1"
          placeholder="123"
          type="text"
          onChange={(e) => setPw(e.target.value)}
        />
      </div>
      <div className="py-2">
        <button type="submit" className="w-full rounded bg-slate-200 p-1">
          Ick will rein!
        </button>
      </div>
      <div className="text-red-600 font-bold text-center">{error}</div>
    </form>
  );
};
