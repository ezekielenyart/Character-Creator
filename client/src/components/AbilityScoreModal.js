import React, { useState } from "react";

function AbilityScoreModal({ score, setAbilityState }) {

  
  return (
    <div className="panel-body text-dark">
      <button
        type="button"
        className="btn abilityScoreDesBtn"
        data-toggle="modal"
        data-target={`#${score.name}`}
      >
        {score.name}
      </button>
      <input
        type="number"
        className="abilityScoreInput form-control"
        aria-label="Username"
        aria-describedby="basic-addon1"
        onChange={setAbilityState()}
        // onChange={e => setCharacterState({...characterState, str: e.target.value})}
      ></input>

      <div
        className="modal fade"
        id={`${score.name}`}
        aria-labelledby={`${score.name}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id={`${score.name}Label`}>
                {score.name}
              </span>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <p>{score.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AbilityScoreModal;
