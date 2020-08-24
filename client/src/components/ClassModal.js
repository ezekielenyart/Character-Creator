import React, { useState } from 'react';
import API from '../utils/API'
import ModalListItem from './ModalListItem'
import ModalCheckbox from './ModalCheckbox'

function ClassModal(props) {
  
  const { con, setCurrentHp, setMaxHp, handleWizView, DNDclass, setCharacterClass, setAthletics, setAcrobatics, setSleight, setStealth, setArcana, setHistory, setInvestigation, setNature, setReligion, setAnimalHandle, setInsight, setMedicine, setSurvival, setDeception, setIntimidation, setPerception, setPersuasion, setPerformance } = props
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
      setMaxHp(res.data.hit_die)
      setCurrentHp(res.data.hit_die)
    })
  }




  const returnSetClass = (e) => {
    returnClassDetails();
    setCharacterClass(e.target.value);
  }

  return (

    // Modal for classes that reveals weapon & armor proficiencies, saving throws, and skill selection menu.
    <div className="panel-body text-dark">
      <button type="button"
        onClick={returnSetClass}
        className="btn goToModalBtn"
        data-toggle="modal"
        value={DNDclass.name}
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
                  {classSkillProf.map(skill => {


                    // console.log(classSkillProf)
                    //   var skillsArray = []
                    // for (let skill = 0; skill < classSkillProf.length; skill++) {

                    //     skillsArray.push(classSkillProf[skill].name)

                    //   }
                    //   for (let i = 0; i < skillsArray.length; i++) {
                    const setSkillSetFunction = () => {
                      // console.log("setskillsetfunction fired off")
                      if (skill.name === "Skill: Athletics") {
                        return setAthletics(true)
                      } else if (skill.name === "Skill: Acrobatics") {
                        return setAcrobatics(true)
                      } else if (skill.name === "Skill: Sleight of Hand") {
                        return setSleight(true)
                      } else if (skill.name === "Skill: Stealth") {
                        return setStealth(true)
                      } else if (skill.name === "Skill: Arcana") {
                        return setArcana(true)
                      } else if (skill.name === "Skill: History") {
                        return setHistory(true)
                      } else if (skill.name === "Skill: Investigation") {
                        return setInvestigation(true)
                      } else if (skill.name === "Skill: Nature") {
                        return setNature(true)
                      } else if (skill.name === "Skill: Religion") {
                        return setReligion(true)
                      } else if (skill.name === "Skill: Animal Handling") {
                        return setAnimalHandle(true)
                      } else if (skill.name === "Skill: Insight") {
                        return setInsight(true)
                      } else if (skill.name === "Skill: Medicine") {
                        return setMedicine(true)
                      } else if (skill.name === "Skill: Perception") {
                        return setPerception(true)
                      } else if (skill.name === "Skill: Survival") {
                        return setSurvival(true)
                      } else if (skill.name === "Skill: Deception") {
                        return setDeception(true)
                      } else if (skill.name === "Skill: Intimidation") {
                        return setIntimidation(true)
                      } else if (skill.name === "Skill: Performance") {
                        return setPerformance(true)
                      } else if (skill.name === "Skill: Persuasion") {
                        return setPersuasion(true)
                      }
                      // console.log(skill.name)
                    }



                    // "Skill: Athletics"
                    // // we want to make something that says setAthletics
                    // // then say props[setAthletics]
                    // var skillName = skill.name.split(": ")
                    // var skillSetter = (`set${skillName[1]}`)
                    // console.log(props[skillSetter])
                    // // "setAthletics" /= setAthletics
                    // // console.log(props)

                    return (
                      <ModalCheckbox
                        name={skill.name}
                        onClick={setSkillSetFunction}
                      />)
                  })}
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
            </div>

            {/* Button to choose a class */}
            <div className="text-center row">
              <button
                type="button"
                className="btn btn-outline-primary chooseClassBtn"
                onClick={handleWizView}
                aria-label="Close"
                data-dismiss="modal"
              >Choose {DNDclass.name}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ClassModal