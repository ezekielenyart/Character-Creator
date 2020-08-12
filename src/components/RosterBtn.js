import React from "react";
import { Link, useLocation } from "react-router-dom";
function RosterBtn() {
  const location = useLocation();
  return (
    <div className = "viewRosterSpot">
        <button className="btn rosterBtn" role="button">
          
      <Link to="/roster" className={location.pathname === "/roster" ? "nav-link active" : "nav-link"}>
          Go To Roster
        </Link>
          
      </button>
    </div>
  );
}


export default RosterBtn