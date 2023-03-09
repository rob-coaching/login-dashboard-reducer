import { useState } from "react";

export const Login = () => {

  const [email, setEmail] = useState();
  const [pw, setPw] = useState();
  const [error, setError] = useState("")

  const onLoginSubmit = (e) => {
    e.preventDefault();

    // perform login at "backend" here 
    // => holy fake backend in this case :D 
    // usually we would make a POST fetch call here...
    // (e.g. using /lib/helpers.js)

    if (email !== "rob" || pw !== "123") {
      return setError("Wrong creds, my dude");
    }
    console.log("Eingeloggt! Ich will jetzt zum f*** Dashboard weiter!")
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
