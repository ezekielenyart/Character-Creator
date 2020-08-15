import React from 'react';




function RaceModal({ race }) {
  
  return (
    <div className="panel-body text-dark">
      <button type="button"
        className="btn goToModalBtn"
        data-toggle="modal"
        data-target="#exampleModal">
        {race.name}
      </button>


      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id="exampleModalLabel">{race.plural} Subraces</span>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <p>{race.description}</p>
            </div>

            {
              race.subraces.map((subrace, i) => <div key={i + '-subrace'}>
                <div className="modal-body">
                  <h3>{subrace.name}</h3>
                  <p>{subrace.description}</p>
                  <button type="button" className="btn chooseRaceBtn">Choose {subrace.name}</button>
                </div>
                <br />
              </div >)
            }
            {/* <div className="modal-footer">
            </div>
            <div className="modal-body">
              Mountain Dwarves are nearly identical to the Hill Dwarves aside from their propensity to live deeper underground and fairer skin.
      </div>
            <div className="modal-footer">
              <button type="button" className="btn chooseRaceBtn">Choose Mountain Dwarves</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}


export default RaceModal