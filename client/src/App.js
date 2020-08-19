import React, { useState, useEffect } from "react";
import HomePageRender from "./pages/HomePageRender";
import CharacterCreateAccMenu from "./pages/CharacterCreateAccMenu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Roster from './pages/Roster';
import Wrapper from './components/Wrapper'
import Login from './pages/Login'
import Signup from './pages/Signup'
import UserContext from './utils/UserContext'
import CharacterSheet from './pages/CharacterSheet'
// import DeveloperContext from "./components/utils/DeveloperContext";
import TestAPI from "./components/APItestcomponent.js"

function App() {

  const [developerState, setDeveloperState] = useState({
    classList: {
      class1: "wizard",
      class2: "dragonborne",
      class3: "jasonborne"
    }
  });
  const [userState, setUserState] = useState({
      _id: "",
      update: (_id) => {
        console.log(_id)
        setUserState({...userState, _id})
      }
  })


  return (
    <Router>
      <div>
        <Wrapper>
          <UserContext.Provider value={userState}>
          <Route exact path="/" component={HomePageRender} />
          <Route exact path="/create" component={CharacterCreateAccMenu} />
          <Route exact path="/roster" component={Roster} />
          <Route exact path="/charactersheet" component={CharacterSheet} />
          <Route exact path="/api/test" component={TestAPI} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          </UserContext.Provider>
        </Wrapper>
      </div>
    </Router>
  )
}


export default App;