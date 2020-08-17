import React from 'react';





function CharacterSheetModal({ name, RaceChoice, RCDescription, DNDClass, ClassDesc, Background, BackDesc, Scores }) {
    return (
        <div className = "container CharSheetContainer">
            <div className = "CharacterNamerow">Hail, {name}!</div>
                <button type="button"
                    className="btn RCModalBtn col-6"
                    data-toggle="modal"
                    data-target={`#${RaceChoice}`}>
                    {RaceChoice}
                </button>
                <button type="button"
                    className="btn ClassModalBtn col-6"
                    data-toggle="modal"
                    data-target={`#${DNDClass}`}>
                    {DNDClass}
                </button>
                <button type="button"
                    className="btn BackgroundModalBtn col-6"
                    data-toggle="modal"
                    data-target={`#${Background}`}>
                    {Background}
                </button>
                <button type="button"
                    className="btn ScoresModalBtn col-6"
                    data-toggle="modal"
                    data-target={`#${Scores}`}>
                    {Scores}
                </button>
            <div className="modal fade" id={`${RaceChoice}`} aria-labelledby={`${RaceChoice}Label`} aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <span className="modal-title" id={`${RaceChoice}Label`}>{RaceChoice}</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <p>{RCDescription}</p>
            </div>
        </div>
    </div>
</div>
<div className="modal fade" id={`${DNDClass}`} aria-labelledby={`${DNDClass}Label`} aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <span className="modal-title" id={`${DNDClass}Label`}>{DNDClass}</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <p>{ClassDesc}</p>
            </div>
        </div>
    </div>
</div>
<div className="modal fade" id={`${Background}`} aria-labelledby={`${Background}Label`} aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <span className="modal-title" id={`${Background}Label`}>{Background}</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <p>{BackDesc}</p>
            </div>
        </div>
    </div>
</div>
<div className="modal fade" id={`${Scores}`} aria-labelledby={`${Scores}Label`} aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <span className="modal-title" id={`${Scores}Label`}>Ability Scores</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <p>{Scores}</p>
            </div>
        </div>
    </div>
</div>
        </div>

    )}

export default CharacterSheetModal