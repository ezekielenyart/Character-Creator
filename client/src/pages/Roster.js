import React, {useContext, useEffect} from "react";
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


function Card({ card }) {
  const history = useHistory()
  
  return (
    <div onClick={() => {
        history.push("/charactersheet")}}>
      <img   src={card.img}>
      </img>
      <p>{card.text}</p>
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
    
    characters = characters.map(e =>{
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

  useEffect(() => {
    if (!_id){
      //reroute to home page
      history.push("/");
    }
    //else, get users character roster

  }, [])

  return (
    <div>
      <div className="row my-3">
        <CharacterCreateBtn />
      </div>
      <div className="container">
        <div className="row">
          {cards.map((card, i) => (
            <div
              key={i + "-cards"}
              className="rosterSpot col-xs-12 col-sm-6 col-md-4 text-center"
            >
              <Card card={card}
              />
            </div>
             
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roster;
