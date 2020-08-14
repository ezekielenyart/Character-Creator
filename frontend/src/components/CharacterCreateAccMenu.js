import React from "react";
import RaceModal from './RaceModal'


const Races = [
    {
 
        name: "Dwarves",
        plural: "Dwarven",
        description: "Bold and hardy, Hill Dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk.",
        subraces: [
            {
                name: "Hill Dwarf",
                description: "Mountain Dwarves are nearly identical to the Hill Dwarves aside from their propensity to live deeper underground and fairer skin."
            },
            {
                name: "Mountain Dwarf",
                description: "Mountain Dwarves are nearly identical to the Hill Dwarves aside from their propensity to live deeper underground and fairer skin."
            }
        ]
    },
    {

        name: "Elves",
        plural: "Elven",
        description: "Generally Assholes.",
        subraces: [
            {

                name: "High Elf",
                description: "Love fighting each other"
            },
            {

                name: "Wood Elf",
                description: "Would rather kiss a tree than another Elf"
            }
        ]
    }
]

function CharacterCreateAccMenu() {
    return (
        <div className="container mt-5">
            <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                    <div className="panel-heading" data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                        <h4 className="panel-title text-center bg-dark">
                            <a className="bg-dark border-white">
                                Race
                        </a>
                        </h4>
                    </div>
                    <div id="collapse1" className="panel-collapse collapse ">
                           
                        <RaceModal 
                            race={(Races[0])} />
                            
                        <RaceModal 
                            race={(Races[1])} />
                        
                        <div className="panel-body">
                            Human
                        </div>
                        <div className="panel-body">
                            Halfling
                        </div>
                        <div className="panel-body">
                            Half-Elf
                        </div>
                        <div className="panel-body">
                            Half-Orc
                        </div>
                        <div className="panel-body">
                            Tiefling
                        </div>
                        <div className="panel-body">
                            Gnome
                        </div>
                        <div className="panel-body">
                            Dragonborn
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                                Class
                        </a>
                        </h4>
                    </div>
                    <div id="collapse2" className="panel-collapse collapse">
                        <div className="panel-body">
                            Barbarian
                    </div>
                        <div className="panel-body">
                            Bard
                    </div>
                        <div className="panel-body">
                            Cleric
                    </div>
                        <div className="panel-body">
                            Druid
                    </div>
                        <div className="panel-body">
                            Fighter
                    </div>
                        <div className="panel-body">
                            Monk
                    </div>
                        <div className="panel-body">
                            Paladin
                    </div>
                        <div className="panel-body">
                            Ranger
                    </div>
                        <div className="panel-body">
                            Rogue
                    </div>
                        <div className="panel-body">
                            Sorcerer
                    </div>
                        <div className="panel-body">
                            Warlock
                    </div>
                        <div className="panel-body">
                            Wizard
                    </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                                Sex</a>
                        </h4>
                    </div>
                    <div id="collapse3" className="panel-collapse collapse">
                        <div className="panel-body">
                            Male
                    </div>
                        <div className="panel-body">
                            Female
                    </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">
                                Education</a>
                        </h4>
                    </div>
                    <div id="collapse4" className="panel-collapse collapse">
                        <div className="panel-body">
                            Classical
                    </div>
                        <div className="panel-body">
                            Spiritual
                    </div>
                        <div className="panel-body">
                            Survival
                    </div>
                        <div className="panel-body">
                            Subsistence
                    </div>
                        <div className="panel-body">
                            Militant
                    </div>
                        <div className="panel-body">
                            Apprenticeship
                    </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">
                                Background</a>
                        </h4>
                    </div>
                    <div id="collapse5" className="panel-collapse collapse">
                        <div className="panel-body">
                            Acolyte
                    </div>
                        <div className="panel-body">
                            Acolyte
                    </div>
                        <div className="panel-body">
                            Acolyte
                    </div>
                        <div className="panel-body">
                            Acolyte
                    </div>
                        <div className="panel-body">
                            Acolyte
                    </div>
                        <div className="panel-body">
                            Acolyte
                    </div>
                        <div className="panel-body">
                            Acolyte
                    </div>
                        <div className="panel-body">
                            Acolyte
                    </div>
                        <div className="panel-body">
                            Acolyte
                    </div>
                        <div className="panel-body">
                            Acolyte
                    </div>
                        <div className="panel-body">
                            Acolyte
                    </div>
                        <div className="panel-body">
                            Acolyte
                    </div>
                        <div className="panel-body">
                            Acolyte
                    </div>
                        <div className="panel-body">
                            Acolyte
                    </div>
                        <div className="panel-body">
                            Acolyte
                    </div>


                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse6">
                                Alignment</a>
                        </h4>
                    </div>
                    <div id="collapse6" className="panel-collapse collapse">
                        <div className="panel-body">
                            Lawful Good
                    </div>
                        <div className="panel-body">
                            Neutral Good
                    </div>
                        <div className="panel-body">
                            Chaotic Good
                    </div>
                        <div className="panel-body">
                            Lawful Neutral
                    </div>
                        <div className="panel-body">
                            True Neutral
                    </div>
                        <div className="panel-body">
                            Chaotic Neutral
                    </div>
                        <div className="panel-body">
                            Lawful Evil
                    </div>
                        <div className="panel-body">
                            Neutral Evil
                    </div>
                        <div className="panel-body">
                            Chaotic Evil
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
console.log(Races)
export default CharacterCreateAccMenu