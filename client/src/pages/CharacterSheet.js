import React from 'react';
import CharacterSheetModal from '../components/CharacterSheetModal'


const CharacterChoices = 
   {
    name : "Philemon",
    RaceChoice : "Hill-Dwarves",
    RCDescription : "Dem Daer Hill Dwarfs",
    Background : "Acolyte",
    BackDesc : "One-a-dem Religious Folks",
    DNDClass : "Paladin",
    ClassDesc : "A Hammer? And Spells, too! Wot in Tarnation!", 
    Scores : 0,
}


function CharacterSheet() {
    return (
<CharacterSheetModal 
    name = {CharacterChoices.name}
    RaceChoice = {CharacterChoices.RaceChoice}
    RCDescription = {CharacterChoices.RCDescription}
    Background = {CharacterChoices.Background}
    BackDesc = {CharacterChoices.BackDesc}
    DNDClass = {CharacterChoices.DNDClass}
    ClassDesc = {CharacterChoices.ClassDesc} 
    Scores = {CharacterChoices.Scores}
/>

    )}

export default CharacterSheet