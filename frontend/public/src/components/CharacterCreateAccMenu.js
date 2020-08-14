import React from "react";
import RaceModal from './RaceModal'
import ClassModal from './ClassModal'
import SexModal from './SexModal'
import EduModal from './EducationModal'
import BackgroundModal from './BackgroundModal'
import AlignmentModal from './AlignmentModal'
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
    },
    {

        name: "Human",
        plural: "Human",
        description: "Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, achievers, and pioneers of the worlds",
        subraces: [
            {
                name: "HillMan",
                description: "Hillmen are nearly identical to the Mountainmen aside from their propensity to live deeper underground and fairer skin."
            },
            {
                name: "MountainMan",
                description: "Mountain men are nearly identical to the Hill men aside from their propensity to live deeper underground and fairer skin."
            }
        ]
    },
]
const DNDClasses = [
    {
        name: "Barbarian",
        description: "A fierce warrior of primitive background who can enter a battle rage"
    },
    {
        name: "Bard",
        description: "An inspiring magician whose power echoes the music of creation"
    },
    {
        name: "Cleric",
        description: "A priestly champion who wields divine magic in service of a higher power"
    },

]
const Sexes = [
    {
        name: "Male",
        description: "They that which possess the fertilzation catalyst"
    },
    {
        name: "Female",
        description: "They that which host the fertilzation materials"
    }
]
const Educations = [
    {
        name: "Classical",
        description: "A well-rounded education from respected teachers and elders within the halls of learning"
    },
    {
        name: "Spiritual",
        description: "Focused on the dealings of the spiritual, students are brought up within the confines of the cloister with minimal outside contact"
    },
    {
        name: "Survival",
        description: "Either by choice or by chance, a person must survive any circumstances and learns the skills necessary for survival. "
    },
    {
        name: "Subsistence",
        description: "Raised on a farm, or a cabin perhaps, this person has learned the trade of living off the land"
    },
    {
        name: "Militant",
        description: "Living within the walls of a castle near the border from a young age, there was little time for learning anything besides the function of war"
    },
    {
        name: "Apprenticeship",
        description: "Having a mentor and producing a masterpiece ensures this student is highly, if narrowly, skilled in their craft"
    }
]
const Backgrounds = [
    {
        name: "Acolyte",
        description: "You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric—performing sacred rites is not the same thing as channeling divine power."
    },
    {
        name: "Acolyte",
        description: "You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric—performing sacred rites is not the same thing as channeling divine power."
    },
    {
        name: "Acolyte",
        description: "You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric—performing sacred rites is not the same thing as channeling divine power."
    },
    {
        name: "Acolyte",
        description: "You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric—performing sacred rites is not the same thing as channeling divine power."
    },
    {
        name: "Acolyte",
        description: "You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric—performing sacred rites is not the same thing as channeling divine power."
    },
    {
        name: "Acolyte",
        description: "You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric—performing sacred rites is not the same thing as channeling divine power."
    },
]
const Alignments = [
    {
        name: "Lawful Good",
        description: "A lawful good character typically acts with compassion and always with honor and a sense of duty. However, lawful good characters will often regret taking any action they fear would violate their code, even if they recognize such action as being good."
    },
    {
        name: "Neutral Good",
        description: "A neutral good character typically acts altruistically, without regard for or against lawful precepts such as rules or tradition. A neutral good character has no problems with cooperating with lawful officials, but does not feel beholden to them. In the event that doing the right thing requires the bending or breaking of rules, they do not suffer the same inner conflict that a lawful good character would. Neutral good characters do the best they can to help others according to their needs. Lawful good characters can be counted on to do the right thing as expected by society."
    },
    {
        name: "Chaotic Good",
        description: "A chaotic good character does what is necessary to bring about change for the better, disdains bureaucratic organizations that get in the way of social improvement, and places a high value on personal freedom, not only for oneself, but for others as well. Chaotic good characters usually intend to do the right thing, but their methods are generally disorganized and often out of sync with the rest of society. Chaotic good characters act as their conscience directs, with little regard for what others think. "
    },
    {
        name: "Lawful Neutral",
        description: "A lawful neutral character typically believes strongly in lawful concepts such as honor, order, rules, and tradition, but often follows a personal code in addition to, or even in preference to, one set down by a benevolent authority. Lawful neutral characters act in accordance with law, tradition, or personal codes."
    },
    {
        name: "True Neutral",
        description: "A neutral character (also called 'true neutral') is neutral on both axes and tends not to feel strongly towards any alignment, or actively seeks their balance. Druids frequently follow this dedication to balance, whereas a typical druid might fight against a band of marauding gnolls, only to switch sides to save the gnolls' clan from being totally exterminated. Neutral characters prefer to steer clear of moral questions and don't take sides, doing what seems best at the time."
    },
    {
        name: "Chaotic Neutral",
        description: "A chaotic neutral character is an individualist who follows their own heart and generally shirks rules and traditions. Although chaotic neutral characters promote the ideals of freedom, it is their own freedom that comes first; good and evil come second to their need to be free. Chaotic neutral characters follow their whims, holding their personal freedom above all else. "
    },
    {
        name: "Lawful Evil",
        description: "A lawful evil character sees a well-ordered system as being easier to exploit than to necessarily follow. Lawful evil characters methodically take what they want, within the limits of a code of tradition, loyalty, or order. "
    },
    {
        name: "Neutral Evil",
        description: "A neutral evil character is typically selfish and has no qualms about turning on allies-of-the-moment, and usually makes allies primarily to further their own goals. A neutral evil character has no compunctions about harming others to get what they want, but neither will they go out of their way to cause carnage or mayhem when they see no direct benefit for themselves. Another valid interpretation of neutral evil holds up evil as an ideal, doing evil for evil's sake and trying to spread its influence. Examples of the first type are an assassin who has little regard for formal laws but does not needlessly kill, a henchman who plots behind their superior's back, or a mercenary who readily switches sides if made a better offer. An example of the second type would be a masked killer who strikes only for the sake of causing fear and distrust in the community. Neutral evil characters do whatever they can get away with, without compassion or qualms."
    },
    {
        name: "Chaotic Evil",
        description: "A chaotic evil character tends to have no respect for rules, other people's lives, or anything but their own desires, which are typically selfish and cruel. They set a high value on personal freedom, but do not have much regard for the lives or freedom of other people. Chaotic evil characters do not work well in groups because they resent being given orders and usually do not behave themselves unless there is no alternative. Chaotic evil characters act with arbitrary violence, spurred by their greed, hatred, or bloodlust."
    },

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


                        {Races.map(race => (
                            <RaceModal race={race} />
                        ))}

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
                        {DNDClasses.map(DNDclass => (
                            <ClassModal
                                DNDclass={DNDclass} />
                        ))}

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
                        {Sexes.map(sex => (
                            <SexModal sex={sex} />
                        ))}

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
                        {Educations.map(edu => (
                            <EduModal edu={edu} />
                        ))}

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
                        {Backgrounds.map(background => (
                            <BackgroundModal background={background} />
                        ))}

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
                        {Alignments.map(align => (
                            <AlignmentModal align={align} />
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
};

export default CharacterCreateAccMenu