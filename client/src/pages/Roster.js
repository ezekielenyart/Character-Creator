import React, { useContext, useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import CharacterCreateBtn from "../components/CreateCharacterBtn";
import { useHistory } from "react-router-dom";
import characterAPI from "../utils/characterAPI";
import CharacterContext from "../utils/CharacterContext";

function Card({ character, onClick }) {
  const parsedChars = JSON.parse(character.characterData);

  return (
    <div className="anim">
      <img value={character._id} className="roster-img" src={"images/download.png"} alt="Character"></img>
      <button
        className="btn-primary rosterCharBtn"
        value={character._id}
        onClick={onClick}
      >
        {parsedChars.c_name}, the {parsedChars.race}{" "}
        {parsedChars.characterClass}
      </button>
    </div>
  );
}

// Add the createCharBtn to Roster
function Roster() {
  const [charList, setCharList] = useState([]);
  const charState = useContext(CharacterContext);

  const getThatCharacter = (e) => {
    console.log("FUNCTION FIRED");
    console.log(e.target.value);


    console.log("FUNCTION FIRED")
    console.log(e.target.value)

    let desiredChar = charList.find(character => character._id === e.target.value)

    charState.update(desiredChar);

    history.push("/charactersheet");
  };

  const { _id } = useContext(UserContext);
  // console.log(_id)
  const history = useHistory();

  useEffect(() => {
    if (!_id) {
      //reroute to home page
      history.push("/");
    }
    //else, get users character roster

    // Function to parse indices of the returned character array for easier use.
    characterAPI.getCharacters(_id).then((res) => {
      console.log(res.data.characters);
      // var characters = res.data.characters;
      // var parsedChars =[];
      // for (let i = 0; i < characters.length; i++) {
      //   parsedChars.push(JSON.parse(characters[i].characterData))
      // }
      setCharList(res.data.characters);
      // console.log(res.data.characters);
      // console.log(parsedChars);
    });
  }, []);

  console.log(charState);
  return (
    <div>
      <div className="row my-3">
        <CharacterCreateBtn />
      </div>
      <div className="container">
        <div className="row">
          {charList.map((char) => (
            <div className="rosterSpot col-xs-12 col-sm-6 col-md-4 text-center">
              <Card
              character={char}
              onClick={getThatCharacter} 
              key={`${char._id}ID`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roster;
