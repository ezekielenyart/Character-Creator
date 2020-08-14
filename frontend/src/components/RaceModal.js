import React from 'react';

function RaceModal () {
    return (
<div className="panel-body text-dark">
<button type="button" className="btn goToModalBtn" data-toggle="modal" data-target="#exampleModal">
  Dwarves
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Dwarven Subraces</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      Bold and hardy, Hill Dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk.
      </div>
      <div className="modal-footer">
        <button type="button" className="btn chooseRaceBtn">Choose Hill Dwarves</button>
      </div>
      <div className="modal-body">
      Mountain Dwarves are nearly identical to the Hill Dwarves aside from their propensity to live deeper underground and fairer skin.
      </div>
      <div className="modal-footer">
        <button type="button" className="btn chooseRaceBtn">Choose Mountain Dwarves</button>
      </div>
    </div>
  </div>
</div>
</div>
    )
}


export default RaceModal