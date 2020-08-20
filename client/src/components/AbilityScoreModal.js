import React, { useState } from "react";

function AbilityScoreModal({ name, score, setScore }) {


  return (
    
    <div className="panel-body text-dark">
      <button
        type="button"
        className="btn abilityScoreDesBtn"
        data-toggle="modal"
        data-target={`#${name}`}
      >
        {name}
      </button>
      <input
        type="number"
        className="abilityScoreInput form-control"
        id={score}
        aria-label="Username"
        aria-describedby="basic-addon1"
        onChange={(e) => { setScore(e.target.value) }}

      ></input>

      <div
        className="modal fade"
        id={`${name}`}
        aria-labelledby={`${name}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id={`${name}Label`}>
                {name}
              </span>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
);
}

export default AbilityScoreModal;
