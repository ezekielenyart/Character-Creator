import React from "react";
import { Link, useLocation } from "react-router-dom";
function RosterBtn() {
  const location = useLocation();
  return (
    <div className = "viewRosterSpot">
        <button className="btn btn-lg rosterBtn">
          
      <Link to="/roster" className={location.pathname === "/roster" ? "nav-link active" : "nav-link"}>
          Go To Roster
        </Link>
          
      </button>
    </div>
  );
}
{/* <datalist id="breeds"> */}
{/* {props.breeds.map(breed => (
  <option value={breed} key={breed} />
))}
</datalist> */}

export default RosterBtn