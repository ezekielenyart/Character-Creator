import React from "react";
import LogRegBar from "./LogRegBar"
import RosterBtn from "./RosterBtn";
import CharacterCreateBtn from "./CreateCharacterBtn"

function HomePageRender() {
  return (
      <div>
    <LogRegBar />
    <br></br> 
    <RosterBtn />
    <br></br>
    <CharacterCreateBtn />    
    </div>
  );
}


export default HomePageRender