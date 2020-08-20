import React from "react";
import "./basicSheet.css";

function BasicCharacterSheet() {
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
            <a className="nav-link" href="#">
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
        <div className="greeting">
          Hail, Philemon
          <p>Dwarf Paladin</p>
        </div>
        <div className="initBox">
          Init
          <p>6</p>
        </div>
        <div className="hpBox">
          HP
          <p>6</p>
        </div>
        <div className="speedBox">
          Sp
          <p>6</p>
        </div>
        <div className="combatGroup">
          <div className="diceBox">
            Dice
            <p>6</p>
          </div>
          <div className="armorBox">
            Arm
            <p>6</p>
          </div>
          <div className="profBox">
            Prof
            <p>6</p>
          </div>
        </div>
        <div className="scoresGroup">
          <div className="strBox">
            Str
            <p>6</p>
          </div>
          <div className="intBox">
            Int
            <p>6</p>
          </div>
          <div className="dexBox">
            Dex
            <p>6</p>
          </div>
          <div className="conBox">
            Con
            <p>6</p>
          </div>
          <div className="wisBox">
            Wis
            <p>6</p>
          </div>
          <div className="charBox">
            Char
            <p>6</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicCharacterSheet;
