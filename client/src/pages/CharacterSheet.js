import React, { useContext } from 'react';
import CharacterSheetModal from '../components/CharacterSheetModal'
// import UserContext from '../utils/UserContext'


const CharacterChoices = 
   {
    name : "Philemon",
    RaceChoice : "Dwarf",
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
    Level : 10
}


function CharacterSheet() {
    // const { update, _id } = useContext(UserContext);

    return (<div>

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
</div>
    )}

export default CharacterSheet