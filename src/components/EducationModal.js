import React from 'react';




function EduModal({ edu }) {
  
  return (
    <div className="panel-body text-dark">
      <button type="button"
        className="btn goToModalBtn"
        data-toggle="modal"
        data-target={`#${edu.name}`}>
        {edu.name}
      </button>


      <div className="modal fade" id={`${edu.name}`} aria-labelledby={`${edu.name}Label`} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
                <span className="modal-title" id={`${edu.name}Label`}>{edu.name}</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <p>{edu.description}</p>
              <button type="button" className="btn btn-outline-primary chooseClassBtn">Choose {edu.name}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default EduModal