import React from "react";
import LogRegBar from "../components/LogRegBar"
import RosterBtn from "../components/RosterBtn";
import CharacterCreateBtn from "../components/CreateCharacterBtn"

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