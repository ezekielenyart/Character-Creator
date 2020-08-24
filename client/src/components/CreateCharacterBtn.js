import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logout from "./LogoutBtn";

function CharacterCreateBtn() {
  const location = useLocation();
  return (
    <div className="createCharSpot">
      <Link
        to="/create"
        className={
          location.pathname === "/create" ? "nav-link active" : "nav-link"
        }
      >
        <button name="" id="" className="btn btn-lg createBtn">
          Create new Character
        </button>
      </Link>

      <Logout className="logoutBtnSpot" />
    </div>
  );
}

export default CharacterCreateBtn;
