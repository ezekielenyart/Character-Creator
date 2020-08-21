import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logout from "./LogoutBtn"

function RosterBtn() {
  const location = useLocation();
  return (
    <div className="viewRosterSpot">
      <Link
        to="/roster"
        className={
          location.pathname === "/roster" ? "nav-link active" : "nav-link"
        }
      >
        <button className="btn btn-lg rosterBtn">View Roster</button>
      </Link>
      <Logout className="logoutBtnSpot" />
    </div>
  );
}

export default RosterBtn;
