import React, { useState, useEffect, useContext } from "react";
import RaceModal from "../components/RaceModal";
import ClassModal from "../components/ClassModal";
import AbilityScoreModal from "../components/AbilityScoreModal";
import API from "../utils/API";
import { useHistory } from "react-router-dom"
import UserContext from '../utils/UserContext'
import characterAPI from "../utils/characterAPI"
import RosterBtn from "../components/RosterBtn"

function CharacterCreateAccMenu() {

  const pageHistory = useHistory()

  const createCharacterDB = () => {

    // Object to submit to database
    const char = {
      // CHARACTER NAME/GENDER
      c_name: characterState.c_name,
      gender: characterState.gender,
      // CLASS
      characterClass: characterClass,
      // ABILITY SCORES
      str: str,
      dex: dex,
      int: int,
      con: con,
      wis: wis,
      cha: cha,
      // RACE / SUBRACE
      race: race,
      subrace: subrace,
      // SKILLS
      athletics: athletics,
      acrobatics: acrobatics,
      sleight: sleight,
      stealth: stealth,
      arcana: arcana,
      history: history,
      investigation: investigation,
      nature: nature,
      religion: religion,
      animalhandle: animalhandle,
      insight: insight,
      medicine: medicine,
      perception: perception,
      survival: survival,
      deception: deception,
      intimidation: intimidation,
      performance: performance,
      persuasion: persuasion,

      maxHp: maxHp,
      currentHp: currentHp,
      lvl: lvl
    }
    characterAPI.createCharacter(_id, char)
  }

  const { _id } = useContext(UserContext);

  // Leave these here!
  const [scoreDisplay, setScoreDisplay] = useState("anim");
  const [raceDisplay, setRaceDisplay] = useState("hidden");
  const [classDisplay, setClassDisplay] = useState("hidden");
  const [backgroundDisplay, setBackgroundDisplay] = useState("hidden");

  const handleWizView = () => {
    if (scoreDisplay === "anim") {
      setScoreDisplay("hidden");
      setRaceDisplay("anim");
      return
    } else if (raceDisplay === "anim") {
      setRaceDisplay("hidden");
      setClassDisplay("anim");
      return
    } else if (classDisplay === "anim") {
      setClassDisplay("hidden");
      setBackgroundDisplay("anim");
      return
    } else if (backgroundDisplay === "anim") {
      pageHistory.push("/roster");
      createCharacterDB();
      return
    }
  }


  const [classes, setClasses] = useState([]);
  const [races, setRaces] = useState([]);
  const [str, setStr] = useState(1);
  const [dex, setDex] = useState(1);
  const [con, setCon] = useState(1);
  const [int, setInt] = useState(1);
  const [wis, setWis] = useState(1);
  const [cha, setCha] = useState(1);

  const [athletics, setAthletics] = useState(false);
  const [acrobatics, setAcrobatics] = useState(false);
  const [sleight, setSleight] = useState(false);
  const [stealth, setStealth] = useState(false);
  const [arcana, setArcana] = useState(false);
  const [history, setHistory] = useState(false);
  const [investigation, setInvestigation] = useState(false);
  const [nature, setNature] = useState(false);
  const [religion, setReligion] = useState(false);
  const [animalhandle, setAnimalHandle] = useState(false);
  const [insight, setInsight] = useState(false);
  const [medicine, setMedicine] = useState(false);
  const [perception, setPerception] = useState(false);
  const [survival, setSurvival] = useState(false);
  const [deception, setDeception] = useState(false);
  const [intimidation, setIntimidation] = useState(false);
  const [performance, setPerformance] = useState(false);
  const [persuasion, setPersuasion] = useState(false);
  const [backgroundState, setBackgroundState] = useState("");

  const [race, setCharacterRace] = useState();
  const [characterClass, setCharacterClass] = useState();
  const [subrace, setRaceSubrace] = useState();
  const [characterState, setCharacterState] = useState({
    c_name: "Zane",
    gender: "",
  })
  const [lvl, setLvl] = useState(1);
  const [maxHp, setMaxHp] = useState(1);
  const [currentHp, setCurrentHp] = useState(1);

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

  return (

    <div className="container mt-5 text-center wiz">
      <div className="accMenuTopBar">
      <RosterBtn className="accMenuRosterBtn" />
      </div>

      <div className="panel-group" id="accordion">

        {/* BEGINNING OF SCORE SECTION */}
        <div className={scoreDisplay}>
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

              <AbilityScoreModal name="Strength" score={str} setScore={setStr} />
              <AbilityScoreModal name="Dexterity" score={dex} setScore={setDex} />
              <AbilityScoreModal name="Constitution" score={con} setScore={setCon}/>
              <AbilityScoreModal name="Intelligence" score={int} setScore={setInt} />
              <AbilityScoreModal name="Wisdom" score={wis} setScore={setWis} />
              <AbilityScoreModal name="Charisma" score={cha} setScore={setCha} />

              <button data-toggle="collapse" onClick={handleWizView} href="#collapse1" data-parent="#accordion" type="submit" className="abScoreSubBtn">
                Save
            </button>
            </div>
          </div>
        </div>

        {/* BEGINNING OF RACE SECTION */}
        <div className={raceDisplay}>
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
                <RaceModal
                  handleWizView={handleWizView}
                  race={race}
                  setCharacterRace={setCharacterRace}
                  setRaceSubrace={setRaceSubrace}
                  key={`${race.index}ID`}
                  />
              ))}
            </div>
          </div>
        </div>

        {/* BEGINNING OF CLASS SECTION */}
        <div className={classDisplay}>
          <div className="panel panel-default">
            <a
              data-toggle="collapse"
              data-parent="#accordion"
              href="#collapse3"
            >
              <div className="panel-heading">
                <h4 className="panel-title">Class</h4>
              </div>
            </a>
            <div id="collapse3" className="panel-collapse collapse">
              {classes.map((DNDclass) => (
                <ClassModal
                  key={`${DNDclass.index}ID`}
                  con={con}
                  setMaxHp={setMaxHp}
                  setCurrentHp={setCurrentHp}
                  handleWizView={handleWizView}
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
        </div>




        {/* BEGINNING OF BACKGROUND DISPLAY */}
        <div className={backgroundDisplay}>
          <div className="panel panel-default">
            <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">
              <div className="panel-heading">
                <h4 className="panel-title">Background</h4>
              </div>
            </a>
            <div id="collapse5" className="panel-collapse collapse">
              <form>
                <label><span className="creatorText">Enter Your Background Info</span></label>
                <textarea
                  id="background"
                  name="background"
                  rows="16"
                  cols="60"
                  onChange={(e) => {
                    setBackgroundState(e.target.value)
                  }}
                >

                </textarea>
                <br />
                <button onClick={handleWizView}>Save Character</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCreateAccMenu;
