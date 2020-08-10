import React from "react";
import LogRegBar from "./LogRegBar"
import CharacterCreateBtn from "./CreateCharacterBtn"
import RosterBtn from "./RosterBtn";


function HomePageRender() {
  return (
      <div>
    <LogRegBar />
    <br></br>
    <CharacterCreateBtn />
    <br></br>
    <RosterBtn />
    </div>
  );
}


export default HomePageRender