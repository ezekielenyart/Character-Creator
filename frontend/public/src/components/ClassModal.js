import React from 'react';




function ClassModal({ DNDclass }) {
  
  return (
    <div className="panel-body text-dark">
      <button type="button"
        className="btn goToModalBtn"
        data-toggle="modal"
        data-target={`#${DNDclass.name}`}>
        {DNDclass.name}
      </button>


      <div className="modal fade" id={`${DNDclass.name}`} aria-labelledby={`${DNDclass.name}Label`} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
                <span className="modal-title" id={`${DNDclass.name}Label`}>{DNDclass.name}</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <p>{DNDclass.description}</p>
              <button type="button" className="btn btn-outline-primary chooseClassBtn">Choose {DNDclass.name}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ClassModal