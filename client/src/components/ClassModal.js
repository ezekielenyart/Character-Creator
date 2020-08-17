import React, { useState } from 'react';
import API from '../utils/API'



function ClassModal( {DNDclass} ) {

  const [classDetails, setClassDetails] = useState({});

  const returnClassDetails = () => {
    API.getClass(DNDclass.index).then(res => {
      console.log("onclick clicked!")
      console.log(res.data)
      setClassDetails(res.data)
    })
  }
  
  return (
    <div className="panel-body text-dark">
      <button type="button"
        onClick={returnClassDetails}
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
              <ul>
                

                {/* classDetails.proficiency_choices.proficiencies.map(score => (
                  <ModalListItem />
 */}

              </ul>
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