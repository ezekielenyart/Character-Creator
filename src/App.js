import React from "react";
import HomePageRender from "./components/HomePageRender";
import CharacterCreateAccMenu from "./components/CharacterCreateAccMenu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Roster from './components/Roster'
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePageRender} />
        <Route exact path="/create" component={CharacterCreateAccMenu} />
        <Route exact path="/roster" component={Roster} />
      </div>
    </Router>
  
}

export default App;