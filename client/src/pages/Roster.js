import React, { useContext, useEffect, useState } from "react";
import UserContext from '../utils/UserContext'
import CharacterCreateBtn from "../components/CreateCharacterBtn";
import { useHistory } from "react-router-dom";
import characterAPI from "../utils/characterAPI";

const cards = [
  {
    img: "images/download.png",
    alt: "img",
    text:
      "Short description of the character of this card.Probably utilze props parameters to auto- populate",
  },
  {
    img: "images/download.png",
    alt: "img",
    text:
      "Short description of the character of this card.Probably utilze props parameters to auto- populate",
  },
  {
    img: "images/download.png",
    alt: "img",
    text:
      "Short description of the character of this card.Probably utilze props parameters to auto- populate",
  },
  {
    img: "images/download.png",
    alt: "img",
    text:
      "Short description of the character of this card.Probably utilze props parameters to auto- populate",
  },
  {
    img: "images/download.png",
    alt: "img",
    text:
      "Short description of the character of this card.Probably utilze props parameters to auto- populate",
  },
  {
    img: "images/download.png",
    alt: "img",
    text:
      "Short description of the character of this card.Probably utilze props parameters to auto- populate",
  },
];


function Card({ character }) {
  const history = useHistory()
  console.log(character)
  


  return (
    <div data-id={character._id} onClick={() => {
      history.push("/charactersheet")
    }}>
      <img src={"images/download.png"}>
      </img>
      {/* <p>{character.c_name}</p> */}
    </div>
  );
}

// Add the createCharBtn to Roster
function Roster() {
  const { update, _id } = useContext(UserContext);
  console.log(_id)
  const history = useHistory()

  characterAPI.getCharacters(_id)
    .then(data => {
      console.log(data)
      var characters = data.data.characters;

      characters = characters.map(e => {
        return JSON.parse(e.characterData)
      })
      console.log(characters)

    })

  // var newCharacter = {
  //   name: "Jack the Butcher",
  //   race: "Half-Orc",
  //   class: "ranger"
  // }

  // characterAPI.createCharacter(_id, newCharacter)
  // .then(data => {
  //   console.log(data)
  // })
  const [charList, setCharList] = useState([])
  useEffect(() => {
    if (!_id) {
      //reroute to home page
      history.push("/");
    }
    //else, get users character roster


      characterAPI.getCharacters(_id)
        .then(res => {
          setCharList(res.data.characters)
        })
    
  }, [])

  console.log(charList)

  return (
    <div>
      <div className="row my-3">
        <CharacterCreateBtn />
      </div>
      <div className="container">
        <div className="row">
          {charList.map((char) => (
            <div className="rosterSpot col-xs-12 col-sm-6 col-md-4 text-center">            
              <Card character={char}
              />
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default Roster;
