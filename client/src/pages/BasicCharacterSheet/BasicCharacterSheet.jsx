import React, { useContext } from "react";
import "./basicSheet.css";
import CharacterContext from '../../utils/CharacterContext'
import { useHistory } from "react-router-dom";
import characterAPI from "../../utils/characterAPI";

function BasicCharacterSheet() {

  const history = useHistory();

  const ChosenCharacter = useContext(CharacterContext)

  var unparsedChar = ChosenCharacter.char.characterData

  let parsedChar = JSON.parse(unparsedChar)

  let strNum = parsedChar.str
  let intNum = parsedChar.int
  let dexNum = parsedChar.dex
  let conNum = parsedChar.con
  let wisNum = parsedChar.wis
  let chaNum = parsedChar.cha
  let maxHp = parsedChar.maxHp
  let currentHp = parsedChar.currentHp

  const deleteCharacter = () => {
    characterAPI.deleteCharacter(ChosenCharacter.char._id);
    history.push("/roster");
  }


  const setAbilityMod = (abilityScore) => {

    if (abilityScore == 1) {
      return -5
    } else if (abilityScore == 2 || abilityScore == 3) {
      return -4
    } else if (abilityScore == 4 || abilityScore == 5) {
      return -3
    } else if (abilityScore == 6 || abilityScore == 7) {
      return -2
    } else if (abilityScore == 8 || abilityScore == 9) {
      return -1
    } else if (abilityScore == 10 || abilityScore == 11) {
      return 0
    } else if (abilityScore == 12 || abilityScore == 13) {
      return 1
    } else if (abilityScore == 14 || abilityScore == 15) {
      return 2
    } else if (abilityScore == 16 || abilityScore == 17) {
      return 3
    } else if (abilityScore == 18 || abilityScore == 19) {
      return 4
    } else if (abilityScore == 20 || abilityScore == 21) {
      return 5
    } else if (abilityScore == 22 || abilityScore == 23) {
      return 6
    } else if (abilityScore == 24 || abilityScore == 25) {
      return 7
    } else if (abilityScore == 26 || abilityScore == 27) {
      return 8
    } else if (abilityScore == 28 || abilityScore == 29) {
      return 9
    } else if (abilityScore == 30) {
      return 10
    } else {
      return "N/A"
    }

  }

  return (
    <div>
      <div className="container charSheetContainer">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Stats
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/roster">
              Info
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Mods
            </a>
          </li>
        </ul>
        <div className="w-100 greeting">

          <h2 id="medText">Hail {parsedChar.c_name}, the {parsedChar.race} {parsedChar.characterClass}!</h2>

        </div>

        {/* EDIT CHARACTER BUTTON */}
        {/* <button onClick={() => {
        }} className="editBtn">EDIT</button> */}

        <button type="button" data-toggle="modal" data-target='#init' className="btn initBox">

          <p className='charSheetNum'>Init<br />6</p>
        </button>
        <button type="button" data-toggle="modal" data-target='#hp' className="btn hpBox">
          <p className='charSheetNum'>HP<br />{currentHp}</p>
        </button>
        <button type="button" data-toggle="modal" data-target='#sp' className="btn speedBox">
          <p className='charSheetNum'>Speed<br />16</p>
        </button>
        <div className="combatGroup">
          <button type="button" data-toggle="modal" data-target='#dice' className="btn diceBox">
            <p className='charSheetNum'>Dice<br />20</p>
          </button>
          <button type="button" data-toggle="modal" data-target='#' className="btn armorBox">
            <p className='charSheetNum'>AC<br />15</p>
          </button>
          <button type="button" data-toggle="modal" data-target='#' className="btn profBox">
            <p className='charSheetNum'>Prof<br />12</p>
          </button>
        </div>
        <div className="scoresGroup">
          {/* Strength Score */}
          <button type="button" data-toggle="modal" data-target='#' className="btn strBox">
            <div className="ability-box">
              <p className='charSheetNum'>Str<br />{parsedChar.str}</p>
            </div>
            <div className="ability-box ability-box-right">
              <p className='charSheetNum'>Mod<br /> {setAbilityMod(strNum)}</p>
            </div>
          </button>

          {/* Intelligence Score */}
          <button type="button" data-toggle="modal" data-target='#' className="btn intBox">
            <div className="ability-box">
              <p className='charSheetNum'>Int<br />{parsedChar.int}</p>
            </div>
            <div className="ability-box ability-box-right">
              <p className='charSheetNum'>Mod<br /> {setAbilityMod(intNum)}</p>
            </div>
          </button>

          {/* Dexterity Score */}
          <button type="button" data-toggle="modal" data-target='#' className="btn dexBox">
            <div className="ability-box">
              <p className='charSheetNum'>Dex<br />{parsedChar.dex}</p>
            </div>
            <div className="ability-box ability-box-right">
              <p className='charSheetNum'>Mod<br /> {setAbilityMod(dexNum)}</p>
            </div>
          </button>

          {/* Constitution Score */}
          <button type="button" data-toggle="modal" data-target='#' className="btn conBox">
            <div className="ability-box">
              <p className='charSheetNum'>Con<br />{parsedChar.con}</p>
            </div>
            <div className="ability-box ability-box-right">
              <p className='charSheetNum'>Mod<br /> {setAbilityMod(conNum)}</p>
            </div>
          </button>

          {/* Wisdom Score */}
          <button type="button" data-toggle="modal" data-target='#' className="btn wisBox">
            <div className="ability-box">
              <p className='charSheetNum'>Wis<br />{parsedChar.wis}</p>
            </div>
            <div className="ability-box ability-box-right">
              <p className='charSheetNum'>Mod<br /> {setAbilityMod(wisNum)}</p>
            </div>
          </button>

          {/* Charisma Score */}
          <button type="button" data-toggle="modal" data-target='#' className="btn charBox">
            <div className="ability-box">
              <p className='charSheetNum'>Cha<br />{parsedChar.cha}</p>
            </div>
            <div className="ability-box ability-box-right">
              <p className='charSheetNum'>Mod<br /> {setAbilityMod(chaNum)}</p>
            </div>
          </button>
        </div>
        <div
          className="modal fade"
          id="hp"
          aria-labelledby="hp"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <span className="modal-title" id='hpLabel'>
                  HP
          </span>

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <p className="modalDesc">Add or Remove HP</p>
                <input type="number" className="AddHPInput form-control" id="maxHp" aria-label="addHP" value={maxHp} >
                  {/* onChange={(e) => { setScore(e.target.value) }} */}

                </input>
                <input type="number" className="RmHPInput form-control" id="currentHp" aria-label="addHP" value={currentHp} >
                  {/* onChange={(e) => { setScore(e.target.value) }} */}

                </input>
              </div>
            </div>
          </div>

        </div>
        <div
          className="modal fade"
          id="init"
          aria-labelledby="init"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <span className="modal-title" id='initLabel'>
                  Initiative
          </span>

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <p className="modalDesc">Add or Remove init</p>
                <input type="number" className="AddinitInput form-control" id="initInput" aria-label="addinit" placeholder="Add init" >
                  {/* onChange={(e) => { setScore(e.target.value) }} */}

                </input>
                <input type="number" className="RminitInput form-control" id="initInput" aria-label="addinit" placeholder="Remove init" >
                  {/* onChange={(e) => { setScore(e.target.value) }} */}

                </input>
              </div>
            </div>
          </div>

        </div> <div
          className="modal fade"
          id="sp"
          aria-labelledby="sp"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <span className="modal-title" id='spLabel'>
                  Speed
          </span>

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <p className="modalDesc">Add or Remove sp</p>
                <input type="number" className="AddspInput form-control" id="spInput" aria-label="addsp" placeholder="Add sp" >
                  {/* onChange={(e) => { setScore(e.target.value) }} */}

                </input>
                <input type="number" className="RmspInput form-control" id="spInput" aria-label="addsp" placeholder="Remove sp" >
                  {/* onChange={(e) => { setScore(e.target.value) }} */}

                </input>
              </div>
            </div>
          </div>

        </div>
        <div
          className="modal fade"
          id="dice"
          aria-labelledby="dice"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <span className="modal-title" id='diceLabel'>
                  Dice
          </span>

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <p className="modalDesc">Change dice</p>
                <select type="number" className="changediceInput form-control" id="diceInput" aria-label="changedice" placeholder="Change dice" >
                  {/* onChange={(e) => { setScore(e.target.value) }} */}
                  <option>d6</option>
                  <option>d8</option>
                  <option>d10</option>
                  <option>d12</option>
                </select>
                <label for="diceCount1">1</label>
                <input className="diceCountCheck1" type="checkbox" id="diceCountCheck1" name="diceCount1" value="1"></input>
                <label for="diceCount2">2</label>
                <input className="diceCountCheck2" type="checkbox" id="diceCountCheck2" name="diceCount2" value="1"></input>

              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="container">
        {/* BACK TO ROSTER BUTTON */}
        <button onClick={() => {
          history.push("/roster");
        }} className="rosterButton">Roster</button>

        {/* DELETE CHARACTER BUTTON */}
        <button onClick={() => {
        }} className="deleteBtn" onClick={deleteCharacter}>Delete</button>
      </div>
    </div >
  );
}

export default BasicCharacterSheet;
