import React, {useContext, useEffect} from "react";
import UserContext from '../utils/UserContext'
import CharacterCreateBtn from "../components/CreateCharacterBtn";
import { useHistory } from "react-router-dom";


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

//  const history = useHistory()
function handleClick(e)  {


// history.push("/charactersheet")
}
function Card({ card }) {
  return (
    <div>
      <img  onClick={handleClick} src={card.img}>
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
              <Card card={card} onClick="handleClick()"
              />
            </div>
             
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roster;
