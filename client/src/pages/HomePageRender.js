import React from "react";
import LogRegBar from "../components/LogRegBar"
import "./BasicCharacterSheet/basicSheet.css";

function HomePageRender() {

  return (
    <div className="container homePageRenderContainer">

      <br></br>
      {/* <h1 className="display-1 titleText">HeroCraft</h1> */}
 
      <p className="welcomeMessage text-center">Welcome to<br /><strong id="bigText">HeroCraft</strong><br /><br /> Do away with your pen and paper, bid farewell to the follies of creating D&D characters the olde way. With <strong>HeroCraft</strong>, your character creation process will be a breeze, freeing you up to get adventuring sooner!
      <LogRegBar />
      </p>
    </div>
  );
}


export default HomePageRender