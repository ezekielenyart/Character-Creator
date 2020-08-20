import React, { useState, useEffect, useContext } from "react";
import RaceModal from "../components/RaceModal";
import ClassModal from "../components/ClassModal";
import AbilityScoreModal from "../components/AbilityScoreModal";
// import ChoiceContext from '../utils/ChoiceContext'
import API from "../utils/API";
import ClassContext from "../utils/ClassContext";
import UserContext from '../utils/UserContext'

// THESE ARE THE VARIABLES THAT THE CHOICES CAN BE PUT INTO
// SHOULD THEY BE THEIR OWN CONTEXT?
// Yeah they should be part of a "currentCharacter" state or something.

const AbilityScores = [
  {
    name: "Strength",
    abv: "str",
    description: "The measure of your athletic skill",

  },
  {
    name: "Dexterity",
    abv: "dex",
    description: "The ability of your body to obey your commands",
  },
  {
    name: "Intelligence",
    abv: "int",
    description: "The measure of your ability to use logic, memory, and attention to detail",
  },
  {
    name: "Constitution",
    abv: "con",
    description: "The measure of your health and vitality",
  },
  {
    name: "Wisdom",
    abv: "wis",
    description: "The measure of your awareness of the world around you",
  },
  {
    name: "Charisma",
    abv: "cha",
    description: "The measure of your command, confidence, and charm in society",
  },
];

// THESE ARE THE VARIABLES THAT THE CHOICES CAN BE PUT INTO
// SHOULD THEY BE THEIR OWN CONTEXT?

function CharacterCreateAccMenu() {
  const { update, _id } = useContext(UserContext);

  // Leave these here!
  // const [scoreDisplay, setScoreDisplay] = useState("");
  // const [raceDisplay, setRaceDisplay] = useState("");
  // const [classDisplay, setClassDisplay] = useState("");
  // const [backgroundDisplay, setBackgroundDisplay] = useState("");

  const [abilityState, setAbilityState] = useState("abilities!")

  const [classes, setClasses] = useState([]);
  const [races, setRaces] = useState([]);
  const [str, setStr] = useState(0);
  const [dex, setDex] = useState(0);
  const [con, setCon] = useState(0);
  const [int, setInt] = useState(0);
  const [wis, setWis] = useState(0);
  const [cha, setCha] = useState(0);

const[athletics, setAthletics]= useState(null);
const[acrobatics, setAcrobatics]= useState();
const[sleight, setSleight]= useState();
const[stealth, setStealth]= useState();
const[arcana, setArcana]= useState();
const[history, setHistory]= useState();
const[investigation, setInvestigation]= useState();
const[nature, setNature]= useState();
const[religion, setReligion]= useState();
const[animalhandle, setAnimalHandle]= useState();
const[insight, setInsight]= useState();
const[medicine, setMedicine]= useState();
const[perception, setPerception]= useState();
const[survival, setSurvival]= useState();
const[deception, setDeception]= useState();
const[intimidation, setIntimidation]= useState(null);
const[performance, setPerformance]= useState();
const[persuasion, setPersuasion]= useState();

  const [race, setCharacterRace] = useState();
  const [characterClass, setCharacterClass] = useState();
  const [subrace, setRaceSubrace] = useState();
  const [characterState, setCharacterState] = useState({
    c_name: "",
    gender: "",
    class: "",
    background: ""

  })

  useEffect(() => {
    API.getClasses().then((res) => {
      setClasses(res.data.results);
    });
    API.getRaces()
      .then((res) => {
        setRaces(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);


  // function setAbilityState(e, abv){
  //   e.preventDefault();
  //   setCharacterState({...characterState, abv: e.target.value })
  // }

  console.log(`Character Class: ${characterClass}`)
  console.log(`Athletics skill chosen: ${athletics}`)
  console.log(`intimidation skill chosen: ${intimidation}`)
  return (
    <div className="container mt-5 text-center">
      <div className="panel-group" id="accordion">
        {/* leave this here! */}
        {/* <div className={scoreDisplay}> */}
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
                onChange={e => setCharacterState({ ...characterState, c_name: e.target.value })}
              ></input>
              <button
                type="button"
                className="btn abilityScoreDesBtn"
              >
                Gender
              </button>
              <input
                type="text"
                className="abilityScoreInput form-control"
                aria-label="gender"
                aria-describedby="basic-addon1"
                onChange={e => setCharacterState({ ...characterState, gender: e.target.value })}
              ></input>
            </div>
            {/* {AbilityScores.map((score) => (
              <AbilityScoreModal name="Strength" score={str} setScore={setStr}} />
            ))} */}

            <AbilityScoreModal name="Strength" score={str} setScore={setStr} />
            <AbilityScoreModal name="Dexterity" score={dex} setScore={setDex} />
            <AbilityScoreModal name="Constitution" score={con} setScore={setCon} />
            <AbilityScoreModal name="Intelligence" score={int} setScore={setInt} />
            <AbilityScoreModal name="Wisdom" score={wis} setScore={setWis} />
            <AbilityScoreModal name="Charisma" score={cha} setScore={setCha} />

            <button type="submit" className="abScoreSubBtn">
              Submit
            </button>
          </div>
        </div>
        {/* leave this here! */}
        {/* </div> */}
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
              <RaceModal race={race} setCharacterRace={setCharacterRace} setRaceSubrace={setRaceSubrace} />
              // is it working?, we arent getting 
              // character details showing up
              // Like in the modal? yeah, it must be something with the setRace
              // SO I FIXED THAT! the problem was the line 52 in racemodal
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
              <ClassModal
                DNDclass={DNDclass}
                characterClass={DNDclass}
                setCharacterClass={setCharacterClass}
                setAthletics={setAthletics}
                setAcrobatics={setAcrobatics}
                setSleight={setSleight}
                setStealth={setStealth}
                setArcana={setArcana}
                setHistory={setHistory}
                setInvestigation={setInvestigation}
                setInsight={setInsight}
                setNature={setNature}
                setReligion={setReligion}
                setAnimalHandle={setAnimalHandle}
                setMedicine={setMedicine}
                setPerception={setPerception}
                setSurvival={setSurvival}
                setDeception={setDeception}
                setIntimidation={setIntimidation}
                setPerformance={setPerformance}
                setPersuasion={setPersuasion}
              />
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
              <label><span className="creatorText">Enter Your Background Info</span></label>
              <textarea id="background" name="background" rows="16" cols="60">

              </textarea>
              <br />
              <button  >Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCreateAccMenu;
