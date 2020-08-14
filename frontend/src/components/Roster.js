import React from 'react';

function Roster() {
    return (
        <div className="container rosterContainer">
            <div className="card" >
                <img src="images/logo192.png" className="border-primary card-img-top" alt="../public/images/logo192.png" />
                <div className="card-body">
                    <p className="card-text">Short description of the character of this card. Probably utilze props parameters to auto-populate</p>
                </div>
            </div>
            <div className="card" >
                <img src="images/logo192.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Short description of the character of this card. Probably utilze props parameters to auto-populate</p>
                </div>
            </div>
            <div className="card" >
                <img src="images/logo192.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Short description of the character of this card. Probably utilze props parameters to auto-populate</p>
                </div>
            </div>
            <div className="card" >
                <img src="images/logo192.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Short description of the character of this card. Probably utilze props parameters to auto-populate</p>
                </div>
            </div>
        </div>
    )
}

export default Roster