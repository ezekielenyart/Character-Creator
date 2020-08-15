import React from 'react';




function SexModal({ sex }) {

  return (
    <div className="panel-body text-dark">
      <button type="button"
        className="btn goToModalBtn"
        data-toggle="modal"
        data-target={`#${sex.name}`}>
        {sex.name}
      </button>


      <div className="modal fade" id={`${sex.name}`} aria-labelledby={`${sex.name}Label`} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
                <span className="modal-title" id={`${sex.name}Label`}>{sex.name}</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <p>{sex.description}</p>
              <button type="button" className="btn btn-outline-primary chooseClassBtn">Choose {sex.name}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default SexModal