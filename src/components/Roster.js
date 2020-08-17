import React from 'react';
import CharacterCreateBtn from './CreateCharacterBtn'
const cards = [
    {
        img: "images/download.png",
        alt: "img",
        text: "Short description of the character of this card.Probably utilze props parameters to auto- populate"
    },
    {
        img: "images/download.png",
        alt: "img",
        text: "Short description of the character of this card.Probably utilze props parameters to auto- populate"
    },
    {
        img: "images/download.png",
        alt: "img",
        text: "Short description of the character of this card.Probably utilze props parameters to auto- populate"
    },
    {
        img: "images/download.png",
        alt: "img",
        text: "Short description of the character of this card.Probably utilze props parameters to auto- populate"
    },
    {
        img: "images/download.png",
        alt: "img",
        text: "Short description of the character of this card.Probably utilze props parameters to auto- populate"
    },
    {
        img: "images/download.png",
        alt: "img",
        text: "Short description of the character of this card.Probably utilze props parameters to auto- populate"
    },
]

function Card({ card }) {
    return (
    <div>
        <img src={card.img} />
        <p>{card.text}</p>
    </div>        
        )
}
// Add the createCharBtn to Roster
function Roster() {
    return (
    <div>
    <div className = "row my-3">
        <CharacterCreateBtn />
           </div>
        <div className="container">
            <div className="row">
                {
                    cards.map((card, i) => <div key={i + '-cards'} className="rosterSpot col-xs-12 col-sm-6 col-md-4 text-center">
                        <Card card={card} />
                    </div>)
                }
            </div>
        </div>
      </div>
    )
}

export default Roster