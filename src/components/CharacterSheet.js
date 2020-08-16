import React from 'react';
import CharacterChoices from './CharacterCreateAccMenu'
// Race, Background, Skills, Stats, Class
function CharacterSheet() {
    return (
        <div className="container">
            <div className="panel-body text-dark">
        <button type="button"
          className="btn goToModalBtn"
          data-toggle="modal"
          data-target={`#${race.name}`}>
          {race.name}
        </button>
  
  
        <div className="modal fade" id={`${race.name}`} aria-labelledby={`${race.name}Label`} aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <span className="modal-title" id={`${race.name}Label`}>{race.plural} Subraces</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <p>{race.description}</p>
              </div>
              </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default CharacterSheet