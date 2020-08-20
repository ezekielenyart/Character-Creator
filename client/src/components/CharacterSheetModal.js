import React from "react";

function CharacterSheetModal({
  name,
  RaceChoice,
  RCDescription,
  DNDClass,
  ClassDesc,
  Background,
  BackDesc,
  Scores,
  Skills,
  SkillsDesc,
  Proficiencies,
  ProfDesc,
  Stats,
  Level
}) {
  return (
    <div className="b-color">
      
      <div className="container CharSheetContainer">

      <div className="CharacterNamerow">{name}, {RaceChoice} {DNDClass}</div>
      <button className="editBtn">
        <span>EDIT</span>
      </button>
      <button
        type="button"
        className="btn RCModalBtn col-6"
        data-toggle="modal"
        data-target={`#${RaceChoice}`}
      >
        {RaceChoice}
      </button>
      <button
        type="button"
        className="btn ClassModalBtn col-6"
        data-toggle="modal"
        data-target={`#${DNDClass}`}
      >
        {DNDClass}
      </button>
      <button
        type="button"
        className="btn ProfModalBtn col-6"
        data-toggle="modal"
        data-target={`#${Proficiencies}`}
      >
        Proficiencies
      </button>
      <button
        type="button"
        className="btn SkillsModalBtn col-6"
        data-toggle="modal"
        data-target={`#${Skills}`}
      >
        Skills
      </button>
      <button
        type="button"
        className="btn StatsModalBtn col-6"
        data-toggle="modal"
        data-target="#stats"
      >
        Stats
      </button>
      <button
        type="button"
        className="btn BackgroundModalBtn col-6"
        data-toggle="modal"
        data-target={`#${Background}`}
      >
        {Background}
      </button>
      <button
        type="button"
        className="btn ScoresModalBtn col-6"
        data-toggle="modal"
        data-target={`#${Scores}`}
      >
        Scores
      </button>
      <button
        type="button"
        className="btn levelModalBtn col-6"
        data-toggle="modal"
        data-target={`#level`}
      >
        Level:   {Level}
      </button>
      <div
        className="modal fade"
        id={`${RaceChoice}`}
        aria-labelledby={`${RaceChoice}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id={`${RaceChoice}Label`}>
                {RaceChoice}
              </span>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <p className="modalDesc">{RCDescription}</p>
              <div className="row text-right">
                <button className="saveBtn" type="submit">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id={`${DNDClass}`}
        aria-labelledby={`${DNDClass}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id={`${DNDClass}Label`}>
                {DNDClass}
              </span>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <p className="modalDesc">{ClassDesc}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id={`stats`}
        aria-labelledby={`statsLabel`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id={`statsLabel`}>
                Stats
              </span>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <p className="modalDesc">{Stats}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id={`${Background}`}
        aria-labelledby={`${Background}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id={`${Background}Label`}>
                {Background}
              </span>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <p className="modalDesc">{BackDesc}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id={`${Scores}`}
        aria-labelledby={`${Scores}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id={`${Scores}Label`}>
                Ability Scores
              </span>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <p className="modalDesc">{Scores}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id={`${Skills}`}
        aria-labelledby={`${Skills}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id={`${Skills}Label`}>
                Skills
              </span>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <p className="modalDesc">{SkillsDesc}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id={`${Proficiencies}`}
        aria-labelledby={`${Proficiencies}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id={`${Proficiencies}Label`}>
                Proficiencies
              </span>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <p className="modalDesc">{ProfDesc}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="stats"
        aria-labelledby="statsLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id="StatsLabel">
                Stats
              </span>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <p className="modalDesc">{Stats}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id={`level`}
        aria-labelledby={`levelLabel`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id={`levelLabel`}>
                Level
              </span>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <p className="modalDesc">{Level}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default CharacterSheetModal;
