import React from "react";
import LogRegBar from "./LogRegBar"
import RosterBtn from "./RosterBtn";
import CharacterCreateBtn from "./CreateCharacterBtn"

function HomePageRender() {
  // Add Description, Take createCharBtn off
  return (
      <div className="container homePageRenderContainer">
    <LogRegBar />
    <br></br> 
    <RosterBtn />
    <br></br>
    <CharacterCreateBtn />    
    </div>
  );
}


export default HomePageRender