import React from 'react';




function AlignmentModal({ align }) {
  
  return (
    <div className="panel-body text-dark">
      <button type="button"
        className="btn goToModalBtn"
        data-toggle="modal"
        data-target={`#${align.name}`}>
        {align.name}
      </button>


      <div className="modal fade" id={`${align.name}`} aria-labelledby={`${align.name}Label`} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
                <span className="modal-title" id={`${align.name}Label`}>{align.name}</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <p>{align.description}</p>
              <button type="button" className="btn btn-outline-primary chooseClassBtn">Choose {align.name}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default AlignmentModal