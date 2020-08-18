import React, { useState } from 'react';
import API from '../utils/API'
import ModalListItem from './ModalListItem'
import ModalCheckbox from './ModalCheckbox'

function ClassModal({ DNDclass }) {

  // Setup states to store information from the api calls.
  const [classEquipmentProf, setClassEquipmentProf] = useState([]);
  const [classSkillProf, setClassSkillProf] = useState([]);
  const [classProfNum, setClassProfNum] = useState([]);
  const [classSaveThrows, setClassSaveThrows] = useState([]);

  const returnClassDetails = () => {
    API.getClass(DNDclass.index).then(res => {
      setClassEquipmentProf(res.data.proficiencies)
      setClassSkillProf(res.data.proficiency_choices[0].from)
      setClassProfNum(res.data.proficiency_choices[0].choose)
      setClassSaveThrows(res.data.saving_throws)
    })
  }

  return (

    // Modal for classes that reveals weapon & armor proficiencies, saving throws, and skill selection menu.
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
              <div className="row">
                <span className="modal-title" id={`${DNDclass.name}Label`}>{DNDclass.name}</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              {/* Class skill list */}
              <div className="col-xs-6">
                {/* This line uses the classProfNum state because the number of starter skills can vary by class */}
                <form><em className="m-2">Choose {classProfNum} Skills</em>
                  {classSkillProf.map(name => (
                    <ModalCheckbox
                      name={name.name} />))}
                </form>
              </div>

              {/* Class weapon and armor proficiencies */}
              <div className="row">
                <div className="col-xs-6">
                  <ul><em className="m-2">Weapon and Armor Proficiencies</em>
                    {classEquipmentProf.map(name => (
                      <ModalListItem
                        name={name.name} />))}
                  </ul>

                  {/* Class saving throws */}
                  <div>
                    <ul><em className="m-2">Saving Throws</em>
                      {classSaveThrows.map(name => (
                        <ModalListItem
                          name={name.name} />))}
                    </ul>
                  </div>
                </div>

              </div>

              <button type="button" className="btn btn-outline-primary chooseClassBtn">Choose {DNDclass.name}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ClassModal