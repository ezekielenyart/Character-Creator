import React, { useState, useEffect } from "react";
import HomePageRender from "./pages/HomePageRender";
import CharacterCreateAccMenu from "./pages/CharacterCreateAccMenu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Roster from './pages/Roster';
import Wrapper from './components/Wrapper'
import Login from './pages/Login'
import Signup from './pages/Signup'
import UserContext from './utils/UserContext'
import BasicCharacterSheet from './pages/BasicCharacterSheet/BasicCharacterSheet'
// import DeveloperContext from "./components/utils/DeveloperContext";
import characterAPI from "./utils/characterAPI"
import CharacterContext from "./utils/CharacterContext";


function App() {

  // const [charList, setCharList] = useState([])
  const [charState, setCharState] = useState({char: "Single Char"})
  const [userState, setUserState] = useState({
    _id: "",
    update: (_id) => {
      console.log(_id)
      setUserState({ ...userState, _id })
    }
  })


 
    // characterAPI.getCharacters(userState._id)
    // .then(res => {
    //   console.log(res.data.characters)
    //   setCharList(res.data.characters)
    // }) 
  
   
  

  // const getThatCharacter = (e) => {
  
  //     console.log("FUNCTION FIRED")
  //     console.log(e.target.value) 
  
  //     let desiredChar = charList.find(character => character._id === e.target.value)
  //         setCharState(desiredChar)
        
  //   }


  return (
    <Router>
      <div>
        <Wrapper>
          <UserContext.Provider value={userState}>
            <CharacterContext.Provider value={charState}>
              <Route exact path="/" component={HomePageRender} />
              <Route exact path="/create" component={CharacterCreateAccMenu} />
              <Route exact path="/roster" component={Roster} />
              <Route exact path="/charactersheet" component={BasicCharacterSheet} />
              {/* <Route exact path="/api/test" component={TestAPI} /> */}
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              </CharacterContext.Provider>
          </UserContext.Provider>
        </Wrapper>
      </div>
    </Router>
  )
}


export default App;