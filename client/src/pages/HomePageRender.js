import React from "react";
import LogRegBar from "../components/LogRegBar"

function HomePageRender() {

  return (
      <div className="container homePageRenderContainer ">
    <br></br> 
    <LogRegBar />
    <p className="welcomeMessage text-center">Welcome to <strong>HeroCraft</strong>, where you can take away your pen and paper troubles out of creating characters for campaign.  With <strong>HeroCraft</strong>, you can just sit back, relax, and let us do the hard work for you!</p>
    </div>
  );
}


export default HomePageRender