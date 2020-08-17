import React from "react";
import { Link, useLocation } from "react-router-dom";

function RosterBtn() {
  const location = useLocation();
  return (
    <div className = "viewRosterSpot">
        <button className="btn btn-lg rosterBtn">
          
      <Link to="/roster" className={location.pathname === "/roster" ? "nav-link active" : "nav-link"}>
          Submit
        </Link>
          
      </button>
    </div>
  );
}

export default RosterBtn