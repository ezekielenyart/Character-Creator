import React from "react";
import { Link, useLocation } from "react-router-dom";

function CharacterCreateBtn() {
  const location = useLocation();
  return (
    <div className="createCharSpot">


      <button name="" id="" className="btn btn-lg createBtn">

      <Link to="/create" className={location.pathname === "/create" ? "nav-link active" : "nav-link"}>
          Create new Character
        </Link>
      </button>
    
    </div>
  );
}


export default CharacterCreateBtn