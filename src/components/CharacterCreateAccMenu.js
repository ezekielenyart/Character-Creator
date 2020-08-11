import React from "react";
import HumanRaceModal from './HumanRaceModal'
function CharacterCreateAccMenu() {
    return (
        <div className="container mt-5">
            <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                    <div className="panel-heading" data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                        <h4 className="panel-title text-center bg-dark">
                            <a className="bg-dark">
                                Race
                        </a>
                        </h4>
                    </div>
                    <div id="collapse1" className="panel-collapse collapse ">
                        <HumanRaceModal />
                        <div className="panel-body">
                            Elf
                        </div>
                        <div className="panel-body">
                            Dwarves
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

export default CharacterCreateAccMenu