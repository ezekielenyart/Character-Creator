import React from "react";
import HomePageRender from "./components/HomePageRender";
import CharacterCreateAccMenu from "./components/CharacterCreateAccMenu";
import { BrowserRouter as Router, Route } from "react-router-dom";
<<<<<<< HEAD
import Roster from './components/Roster'
=======
import Roster from './components/Roster';
import Wrapper from './components/Wrapper'
>>>>>>> cf2ad471122c7bd812b9c7bad745a16087b6e7b3

function App() {
   return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={HomePageRender} />
          <Route exact path="/create" component={CharacterCreateAccMenu} />
          <Route exact path="/roster" component={Roster} />
        </Wrapper>
      </div>
    </Router>
  
  )}

export default App;