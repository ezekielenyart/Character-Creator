import React, { useState, useEffect } from "react";
import HomePageRender from "./components/HomePageRender";
import CharacterCreateAccMenu from "./components/CharacterCreateAccMenu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Roster from './components/Roster';
import Wrapper from './components/Wrapper'

// import CharacterSheet from './components/CharacterSheet'
// import DeveloperContext from "./components/utils/DeveloperContext";
import TestAPI from "./components/APItestcomponent.js"
import DeveloperContext from "./components/utils/DeveloperContext.js";



function App() {

  const [developerState, setDeveloperState] = useState({
    classList: {
      class1: "wizard", 
      class2: "dragonborne", 
      class3: "jasonborne"
    }
  });


  // useEffect({
  //   classList: {
  //     class1: "wizard",
  //     class2: "dragonborne",
  //     class3: "jasonborne"
  //   }
  // })


   return (
    <Router>
      <div>
        <Wrapper>

          <DeveloperContext.Provider value={developerState}>

          <Route exact path="/" component={HomePageRender} />
          <Route exact path="/create" component={CharacterCreateAccMenu} />
          <Route exact path="/roster" component={Roster} />

          {/* <Route exact path="/charactersheet" component={CharacterSheet} /> */}
          <Route exact path="/api/test" component={TestAPI} />
          </DeveloperContext.Provider>
        </Wrapper>
      </div>
    </Router>
  )
}


export default App;