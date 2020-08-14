import React from 'react';

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

function Roster() {
    return (
        <div className="container">
            <div className="row">
                {
                    cards.map((card, i) => <div key={i + '-cards'} className="col-xs-6 col-sm-4 col-md-3 text-center">
                        <Card card={card} />
                    </div>)
                }
            </div>
        </div>
    )
}

export default Roster