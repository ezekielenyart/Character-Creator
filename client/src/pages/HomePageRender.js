import React from "react";
import LogRegBar from "../components/LogRegBar"
import RosterBtn from "../components/RosterBtn";
import CharacterCreateBtn from "../components/CreateCharacterBtn"

function HomePageRender() {
  // Add Description, Take createCharBtn off
  return (
      <div className="container homePageRenderContainer ">
    <br></br> 
    <LogRegBar />
    {/* <p className="welcomeMessage">Welcome to NAZE Creates, where you can take away your pen and paper troubles out of creating characters for campaign.  With NAZE Creates, you can just sit back, relax, and let us do the hard work for you!</p> */}
    </div>
  );
}


export default HomePageRender