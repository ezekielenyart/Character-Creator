import React from 'react';

const cards = [
    {
        img: "images/logo192.png",
        alt: "img",
        text: "Short description of the character of this card.Probably utilze props parameters to auto- populate"
    },
    {
        img: "images/logo192.png",
        alt: "img",
        text: "Short description of the character of this card.Probably utilze props parameters to auto- populate"
    },
    {
        img: "images/logo192.png",
        alt: "img",
        text: "Short description of the character of this card.Probably utilze props parameters to auto- populate"
    },
    {
        img: "images/logo192.png",
        alt: "img",
        text: "Short description of the character of this card.Probably utilze props parameters to auto- populate"
    },
]

function Card({ card }) {
    return 
}

function Roster() {
    return (
        <div className="container">
            <div className="row">
                {
                    cards.map((card, i) => <div key={i + '-cards'} className="col-12 col-sm-6 col-md-3">
                        <Card card={card} />
                    </div>)
                }
            </div>
        </div>
    )
}

export default Roster