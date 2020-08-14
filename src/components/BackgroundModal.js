import React from 'react';




function BackgroundModal({ background }) {
  
  return (
    <div className="panel-body text-dark">
      <button type="button"
        className="btn goToModalBtn"
        data-toggle="modal"
        data-target={`#${background.name}`}>
        {background.name}
      </button>


      <div className="modal fade" id={`${background.name}`} aria-labelledby={`${background.name}Label`} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
                <span className="modal-title" id={`${background.name}Label`}>{background.name}</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <p>{background.description}</p>
              <button type="button" className="btn btn-outline-primary chooseClassBtn">Choose {background.name}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default BackgroundModal