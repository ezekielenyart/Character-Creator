import React, { useContext } from 'react';
import CharacterSheetModal from '../components/CharacterSheetModal'
import UserContext from '../utils/UserContext'


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
    Skills : "Hammer",
    SkillsDesc : "Drop it like it's Hot",
    Proficiencies : "Swag",
    ProfDesc : "Gets the girl, Saves the day.  All in a day's work",
    Stats : "Eat an apple a day, keep the witch doctor away",
    Level : "High Enough to shag your mom, but not high enough to get away with it"
}


function CharacterSheet() {
    const { update, _id } = useContext(UserContext);

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
    Skills = {CharacterChoices.Skills}
    SkillsDesc = {CharacterChoices.SkillsDesc}
    Proficiencies = {CharacterChoices.Proficiencies}
    ProfDesc = {CharacterChoices.ProfDesc}
    Stats = {CharacterChoices.Stats}
    Level = {CharacterChoices.Level}
/>

    )}

export default CharacterSheet