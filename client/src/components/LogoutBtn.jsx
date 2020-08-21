import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../utils/UserContext";

function Logout() {
  const { update, _id } = useContext(UserContext);
  const history = useHistory();
  const logout = (e) => {
    update("");
    history.push("/");
  };
  return (
    <div  >
      <button className="logoutBtn" type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
export default Logout;
