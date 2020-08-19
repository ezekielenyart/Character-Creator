import React, { useState, useEffect } from "react";
import RaceModal from "../components/RaceModal";
import ClassModal from "../components/ClassModal";
import AbilityScoreModal from "../components/AbilityScoreModal";
// import ChoiceContext from '../utils/ChoiceContext'
import API from "../utils/API";
import ClassContext from "../utils/ClassContext";

// THESE ARE THE VARIABLES THAT THE CHOICES CAN BE PUT INTO
// SHOULD THEY BE THEIR OWN CONTEXT?
// Yeah they should be part of a "currentCharacter" state or something.

const AbilityScores = [
  {
    name: "Strength",
    description: "The measure of your athletic skill",
  },
  {
    name: "Dexterity",
    description: "The ability of your body to obey your commands",
  },
  {
    name: "Intelligence",
    description:
      "The measure of your ability to use logic, memory, and attention to detail",
  },
  {
    name: "Constitution",
    description: "The measure of your health and vitality",
  },
  {
    name: "Wisdom",
    description: "The measure of your awareness of the world around you",
  },
  {
    name: "Charisma",
    description:
      "The measure of your command, confidence, and charm in society",
  },
];

// THESE ARE THE VARIABLES THAT THE CHOICES CAN BE PUT INTO
// SHOULD THEY BE THEIR OWN CONTEXT?

function CharacterCreateAccMenu() {
  const [classes, setClasses] = useState([]);
  const [races, setRaces] = useState([]);
  const [state, setstate] = useState({
      str: "",
      dex: "",
      
    })

  useEffect(() => {
    API.getClasses().then((res) => {
      setClasses(res.data.results);
      // console.log("useEffect has fired off")
      // console.log(res.data)
      // ClassContext.setState({
      //     classArray: res.data.results
      // })

      // console.log(ClassContext.classArray)
      // setDeveloperState(res.data)
    });
    API.getRaces()
      .then((res) => {
        setRaces(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  // function loadClasses() {

  // }

  // const handleFormSubmit = event => {
  // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  //     event.preventDefault();
  //     API.getClasses()
  //       .then(res => {
  //         ClassContext.setState({
  //             classArray: res.data.results
  //         })

  //       })
  //       .catch(err => console.log(err));
  //   };

  return (
    <div className="container mt-5 d-flex justify-content-center text-center">
      <div className="panel-group col-md-6" id="accordion">
        <div className="panel panel-default">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
            <div className="panel-heading">
              <h4 className="panel-title">Ability Scores</h4>
            </div>
          </a>
          <div id="collapse1" className="panel-collapse collapse">
            <div className="panel-body">
              <input
                type="text"
                className="abilityScoreNameInput form-control"
                aria-label="Username"
                placeholder="Enter Character's Name Here"
                aria-describedby="basic-addon1"
              ></input>
              <button
                type="button"
                className="btn abilityScoreDesBtn"
                data-toggle="modal"
                data-target={`#`}
              >
                Gender
              </button>
              <input
                type="text"
                className="abilityScoreInput form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              ></input>
            </div>
            {AbilityScores.map((score) => (
              <AbilityScoreModal score={score} />
            ))}
            <button type="submit" className="abScoreSubBtn">
              Submit
            </button>
          </div>
        </div>
        <div className="panel panel-default">
          <div
            className="panel-heading"
            data-toggle="collapse"
            data-parent="#accordion"
            href="#collapse2"
          >
            <h4 className="panel-title text-center bg-dark">
              <a className="bg-dark border-white">Race</a>
            </h4>
          </div>
          <div id="collapse2" className="panel-collapse collapse ">
            {races.map((race) => (
              <RaceModal race={race} />
            ))}
          </div>
        </div>
        <div className="panel panel-default">
          <a
            data-toggle="collapse"
            /*onClick={handleFormSubmit}*/ data-parent="#accordion"
            href="#collapse3"
          >
            <div className="panel-heading">
              <h4 className="panel-title">Class</h4>
            </div>
          </a>
          <div id="collapse3" className="panel-collapse collapse">
            {classes.map((DNDclass) => (
              <ClassModal DNDclass={DNDclass} />
            ))}
          </div>
        </div>

        <div className="panel panel-default">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">
            <div className="panel-heading">
              <h4 className="panel-title">Background</h4>
            </div>
          </a>
          <div id="collapse5" className="panel-collapse collapse">
            <form>
              <label><span>Enter Your Background Info</span></label>
              <textarea id="background" name="background" rows="16" cols="60">
              
              </textarea>
              <br/>
              <button>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCreateAccMenu;
