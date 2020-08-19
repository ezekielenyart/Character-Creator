import React, {useContext} from "react";
import { useHistory } from "react-router-dom";
import RosterBtn from "../components/RosterBtn";
import { UserContext } from '../utils/UserContext';


function Login() {



  const history = useHistory();
  const [state, setState] = React.useState({
    email: "",
    password: "",
    _id: ""
  });
// THIS IS SETTING THE GLOBAL CONTEXT
// THIS IS SETTING THE GLOBAL CONTEXT
// THIS IS SETTING THE GLOBAL CONTEXT
// THIS IS SETTING THE GLOBAL CONTEXT
  const userContext = useContext(UserContext)
  const userState = userContext[0]
  const setUserState = userContext[1]
console.log(userContext)
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      const user = await response.json();
      
      console.log(state)
      // UserContext(React.useContext(user))
      console.log(user);
      history.push("/roster")

    } catch (error) {
      console.warn(error.message);
    }
  };

  return (
    // <UserContext.Provider>
    <div className="container logRegContainer">
      <form onSubmit={login}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            required
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            className="form-control email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            required
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            className="form-control password"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <div className="viewRosterSpot">
          <button className="btn btn-lg rosterBtn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
    // </UserContext.Provider>
  );
}

export default Login;
