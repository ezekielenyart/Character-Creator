import React from "react";
import LogRegBar from "../components/LogRegBar"
import "./BasicCharacterSheet/basicSheet.css";

function HomePageRender() {

  return (
<<<<<<< HEAD
    <div className="container homePageRenderContainer">

      <br></br>
      {/* <h1 className="display-1 titleText">HeroCraft</h1> */}
 
      <p className="welcomeMessage text-center">Welcome to<br /><strong id="bigText">HeroCraft</strong><br /><br /> Do away with your pen and paper, bid farewell to the follies of creating D&D characters the olde way. With <strong>HeroCraft</strong>, your character creation process will be a breeze, freeing you up to get adventuring sooner!
      <LogRegBar />
      </p>
=======
      <div className="container homePageRenderContainer ">
    <br></br> 
    <LogRegBar />
    <p className="welcomeMessage text-center">Welcome to <strong>HeroCraft</strong>, where you can take away your pen and paper troubles out of creating characters for campaign.  With <strong>HeroCraft</strong>, you can just sit back, relax, and let us do the hard work for you!</p>
>>>>>>> 109343dc9955972680d14e9281b5f81b9670c3dc
    </div>
  );
}


export default HomePageRender