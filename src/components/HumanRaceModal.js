import React from 'react';

function HumanRaceModal () {
    return (
<div>
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Human
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Human</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, achievers, and pioneers of the worlds
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
    )
}


export default HumanRaceModal