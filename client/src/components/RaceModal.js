import React, { useState } from "react";
import API from "../utils/API";
import ModalListItem from "./ModalListItem";
import DoubleListItem from "./AbilityBonusListItem";
import RadioButton from "./RadioButton";

function RaceModal({ race, setCharacterRace, setRaceSubrace }) {

  const [raceSpeed, setSpeed] = useState("");
  const [raceAbilityBonus, setAbilityBonus] = useState([]);
  const [raceAlignment, setAlignment] = useState();
  const [raceAge, setAge] = useState();
  const [raceLanguage, setLanguage] = useState();
  const [raceSubrace, setSubrace] = useState([]);
  const [raceSize, setSize] = useState("");
  const [raceEquipProf, setEquipProf] = useState([]);
  const [raceTraits, setTraits] = useState([]);

  const returnRaceDetails = () => {
    API.getRace(race.index).then((res) => {
      // Displays the base racial speed.
      setSpeed(res.data.speed);
      // Used to display a list of ability bonuses.
      setAbilityBonus(res.data.ability_bonuses);
      // Text description of alignment options.
      setAlignment(res.data.alignment);
      // Text description of age.
      setAge(res.data.age);
      // Text description of languages known.
      setLanguage(res.data.language_desc);
      // Radio button to select a subrace.
      // Ideally when a button is clicked their bonuses would populate visually for the user to see.
      setSubrace(res.data.subraces);
      // Descriptive text identifying a general size of certain races.
      setSize(res.data.size_description);
      // A list of racial proficiencies.
      setEquipProf(res.data.starting_proficiencies);
      // List of racial traits
      setTraits(res.data.traits);
    });
  };

  const returnSetRace = (e) => {
    returnRaceDetails();
    setCharacterRace(e.target.value);
  }

  return (
    // Modal for races that reveals details like size, ability bonuses, languages, speed, etc.
    <div className="panel-body text-dark">
      <button
        type="button"
        onClick={returnSetRace}
        className="btn goToModalBtn"
        data-toggle="modal"
        value={race.name}
        data-target={`#${race.name}`}
      // onClick={(e) => { setCharacterRace(e.target.value) }}
      >
        {race.name}
      </button>

      <div
        className="modal fade"
        id={`${race.name}`}
        aria-labelledby={`${race.name}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="raceModalHeader row m-3">
                <span className="modal-title" id={`${race.name}Label`}>
                  {race.name}
                </span>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="row">
                <div className="col-xs-6 container">
                  {/* Racial ability bonus list */}

                  <ul className="raceDescSpot">
                    <em>Ability Bonuses</em>
                    {raceAbilityBonus.map((race) => (
                      <DoubleListItem name={race.name} bonus={race.bonus} />
                    ))}
                  </ul>
                  <ul>
                    <em className="m-2">Speed</em>
                    <li>{raceSpeed} ft</li>
                  </ul>

                  {/* Racial alignment details */}
                  <div className="raceDescSpot">
                    {/* This line uses the classProfNum state because the number of starter skills can vary by class */}
                    <form>
                      <em className="m-2">Alignment</em>
                      <br></br>
                      {raceAlignment}
                    </form>
                  </div>

                  {/* Race Age details */}
                  <div className="raceDescSpot">
                    {/* This line uses the classProfNum state because the number of starter skills can vary by class */}
                    <div>
                      <em className="m-2">Age</em>
                      <br></br>
                      {raceAge}
                    </div>
                  </div>
                </div>
                <div className="container col-xs-6">
                  {/* Race Language details */}

                  {/* This line uses the classProfNum state because the number of starter skills can vary by class */}
                  <div>
                    <br></br>
                    <em className="raceDescSpot">Language Description</em>
                    <br></br>
                    {raceLanguage}
                  </div>


                  {/* Race Size details */}

                  {/* This line uses the classProfNum state because the number of starter skills can vary by class */}
                  <div>
                    <br></br>
                    <em className="m-2">Size Description</em>
                    <br></br>
                    {raceSize}
                  </div>

                  {/* Race Subrace choice */}
                  <div className="">
                    {/* This line uses the classProfNum state because the number of starter skills can vary by class */}
                    <form>
                      <br></br>
                      <em className="m-2">
                        {raceSubrace.length === 0 ? null : "Subraces"}
                      </em>
                      <br></br>

                      {/* RADIO BUTTON */}

                      {raceSubrace.map((subrace) => (
                        <RadioButton
                          value={subrace.name}
                          choice={subrace.name}
                          name="subrace"
                          onChange={setRaceSubrace(subrace.name)}
                        />
                      ))}
                    </form>
                  </div>

                  {/* Race Equipment proficiencies */}

                  <ul>
                    <em className="">
                      {raceEquipProf.length === 0
                        ? null
                        : "Equipment Proficiencies"}
                    </em>
                    {raceEquipProf.map((subrace) => (
                      <ModalListItem name={subrace.name} />
                    ))}
                  </ul>

                  {/* Race Traits */}

                  <ul>
                    <em className="">
                      {raceTraits.length === 0 ? null : "Racial Traits"}
                    </em>
                    {raceTraits.map((traits) => (
                      <ModalListItem name={traits.name} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center row">
              <button
                type="button"
                className="btn btn-outline-primary chooseClassBtn"
                aria-label="Close"
                data-dismiss="modal"
              >
                Choose {race.name}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaceModal;
