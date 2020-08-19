import React, { useEffect, useContext} from "react";
import LogRegBar from "../components/LogRegBar"
import RosterBtn from "../components/RosterBtn";
import CharacterCreateBtn from "../components/CreateCharacterBtn"
import UserContext from '../utils/UserContext'

function HomePageRender() {
  // Add Description, Take createCharBtn off
  const { update, _id } = useContext(UserContext);
  console.log(_id)

  return (
      <div className="container homePageRenderContainer ">
    <br></br> 
    <LogRegBar />
    <p className="welcomeMessage text-center">Welcome to <strong>Create-a-Campaigner</strong>, where you can take away your pen and paper troubles out of creating characters for campaign.  With <strong>Create-a-Campaigner</strong>, you can just sit back, relax, and let us do the hard work for you!</p>
    </div>
  );
}


export default HomePageRender