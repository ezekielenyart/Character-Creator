import React from "react";
import { Link, useLocation } from "react-router-dom";

function LogRegBar() {
  const location = useLocation();
  return (
    <div className="logRegBar">
      <button type="button" className="loginBtn">
                
      <Link to="/login" className={location.pathname === "/login" ? "nav-link active" : "nav-link"}>
          Login
        </Link>
          </button>
      <button type="button" className="registerBtn">
                
      <Link to="/signup" className={location.pathname === "/signup" ? "nav-link active" : "nav-link"}>
          Signup
        </Link>
          </button>
      {/* <p className="welcomeMessage ">Welcome to EZAN Creates, where you can take away your pen-and-paper troubles out of creating characters for campaign.  With NAZE Creates, you can just sit back, relax, and let us do the hard work for you!</p> */}
    </div>
  );
}

export default LogRegBar;
