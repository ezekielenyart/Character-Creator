import React from "react";
import RaceModal from './RaceModal'
import ClassModal from './ClassModal'
import EduModal from './EducationModal'
import BackgroundModal from './BackgroundModal'
import AbilityScoreModal from './AbilityScoreModal'
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
        description: "Elves are a magical people of otherwordly grace, living in the world but not entirely part of it.",
        subraces: [
            {

                name: "High Elf",
                description: "There are two types of High Elves. One type is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type is more Common and more friendly, and often encountered among Humans and other races."
            },
            {

                name: "Wood Elf",
                description: "As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests. "
            },
            {

                name: "Dark Elf",
                description: "Drow grow up believing that surface-dwelling races are inferior, worthless except as slaves. Drow who develop a conscience or find it necessary to cooperate with members of other races find it hard to overcome that prejudice, especially when they are so often on the receiving end of hatred."
            }
        ]
    },
    {

        name: "Human",
        plural: "Human",
        description: "Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, achievers, and pioneers of the worlds",
        subraces: [
            {
                name: "Regular Human",
                description: "Your classic run-of-the-mill Human"
            },
            {
                name: "Variant Human",
                description: "If your campaign uses the optional feat rules from the Player’s Handbook, your Dungeon Master might allow the variant Human choice. "
            }
        ]
    },
    {

        name: "Dragonborn",
        plural: "Dragonborn",
        description: "Dragonborn look very much like dragons stading erect in humanoid form, though they lack wings or a tail",
        subraces: [
            {
                name: "Cone-Breath Dragonborn",
                description: "A Dragonborn with Draconic Ancestry of Gold, Green, Red, Silver, or White dragons."
            },
            {
                name: "Line-Breath Dragonborn",
                description: "A Dragonborn with Draconic Ancestry of Black, Blue, Brass, Bronze, or Copper dragons "
            }
        ]
    },
    {

        name: "Tiefling",
        plural: "Tiefling",
        description: "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling.",
        subraces: [
            {
                name: "Regular Tiefling",
                description: "Your classic run-of-the-mill Tiefling"
            },
            {
                name: "Variant Tiefling",
                description: "If your campaign uses the optional feat rules from the Player’s Handbook, your Dungeon Master might allow the variant Tiefling choice. "
            }
        ]
    },
    {

        name: "Half-Orc",
        plural: "Half-Orc",
        description: "Half-Orcs grayish pigmentation, sloping foreheads, jutting jaws, and towering builds make their orcish heritage plain for all to see",
        subraces: [
            {
                name: "Regular Half-Orc",
                description: "Your classic run-of-the-mill Half-Orc"
            },
            {
                name: "Variant Half-Orc",
                description: "If your campaign uses the optional feat rules from the Player’s Handbook, your Dungeon Master might allow the variant Half-Orc choice. "
            }
        ]
    },
    {

        name: "Halfling",
        plural: "Halfling",
        description: "The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offence",
        subraces: [
            {
                name: "Lightfoot Halfling",
                description: "As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You’re inclined to be affable and get along well with others. In the Forgotten Realms, lightfoot halflings have spread the farthest and thus are the most common variety. Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life."
            },
            {
                name: "Stout Halfling",
                description: "As a stout halfling, you’re hardier than average and have some resistance to poison. Some say that stouts have dwarven blood. In the Forgotten Realms, these halflings are called stronghearts, and they’re most common in the south."
            }
        ]
    },
    {

        name: "Half-Elf",
        plural: "Half-Elven",
        description: "Half-elves combine what some say are the best qualities of their elf and human parents",
        subraces: [
            {
                name: "Regular Half-Elf",
                description: "Your classic run-of-the-mill Half-Elf"
            },
            {
                name: "Variant Half-Elf",
                description: "Some Half-Elves have a racial trait in place of a Skill Versatility trait."
            }
        ]
    },
    {

        name: "Gnome",
        plural: "Gnomish",
        description: "Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, achievers, and pioneers of the worlds",
        subraces: [
            {
                name: "Deep Gnome",
                description: "Guarded, and suspicious of outsiders, Deep Gnomes are cunning and taciturn, but can be just as kind-hearted, loyal, and compassionate as their surface cousins."
            },
            {
                name: "Rock Gnome",
                description: "As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes. Most gnomes in the worlds are rock gnomes"
            }
        ]
    },
]
const DNDClasses = [
    {
        name: "Barbarian",
        description: "People of towns and cities take pride in how their civilized ways set them apart from animals, as if denying one’s own nature was a mark of superiority. To a barbarian, though, civilization is no virtue, but a sign of weakness. The strong embrace their animal nature—keen instincts, primal physicality, and ferocious rage. Barbarians are uncomfortable when hedged in by walls and crowds. They thrive in the wilds of their homelands: the tundra, jungle, or grasslands where their tribes live and hunt. Barbarians come alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of fury only a few times without resting, but those few rages are usually sufficient to defeat whatever threats arise."
    },
    {
        name: "Bard",
        description: "The bard is a master of song, speech, and the magic they contain. Bards say that the multiverse was spoken into existence, that the words of the gods gave it shape, and that echoes of these primordial Words of Creation still resound throughout the cosmos. The music of bards is an attempt to snatch and harness those echoes, subtly woven into their spells and powers. The greatest strength of bards is their sheer versatility. Many bards prefer to stick to the sidelines in combat, using their magic to inspire their allies and hinder their foes from a distance. But bards are capable of defending themselves in melee if necessary, using their magic to bolster their swords and armor. Their spells lean toward charms and illusions rather than blatantly destructive spells. They have a wide-ranging knowledge of many subjects and a natural aptitude that lets them do almost anything well. Bards become masters of the talents they set their minds to perfecting, from musical performance to esoteric knowledge."
    },
    {
        name: "Cleric",
        description: "Divine magic, as the name suggests, is the power of the gods, flowing from them into the world. Clerics are conduits for that power, manifesting it as miraculous effects. The gods don’t grant this power to everyone who seeks it, but only to those chosen to fulfill a high calling. Harnessing divine magic doesn’t rely on study or training. A cleric might learn formulaic prayers and ancient rites, but the ability to cast cleric spells relies on devotion and an intuitive sense of a deity’s wishes. Clerics combine the helpful magic of healing and inspiring their allies with spells that harm and hinder foes. They can provoke awe and dread, lay curses of plague or poison, and even call down flames from heaven to consume their enemies. For those evildoers who will benefit most from a mace to the head, clerics depend on their combat training to let them wade into melee with the power of the gods on their side."
    },
    {
        name: "Druid",
        description: "Druids revere nature above all, gaining their spells and other magical powers either from the force of nature itself or from a nature deity. Many druids pursue a mystic spirituality of transcendent union with nature rather than devotion to a divine entity, while others serve gods of wild nature, animals, or elemental forces. The ancient druidic traditions are sometimes called the Old Faith, in contrast to the worship of gods in temples and shrines.  Druid spells are oriented toward nature and animals—the power of tooth and claw, of sun and moon, of fire and storm. Druids also gain the ability to take on animal forms, and some druids make a particular study of this practice, even to the point where they prefer animal form to their natural form."
    },
    {
        name: "Fighter",
        description: "Fighters learn the basics of all combat styles. Every fighter can swing an axe, fence with a rapier, wield a longsword or a greatsword, use a bow, and even trap foes in a net with some degree of skill. Likewise, a fighter is adept with shields and every form of armor. Beyond that basic degree of familiarity, each fighter specializes in a certain style of combat. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic. This combination of broad general ability and extensive specialization makes fighters superior combatants on battlefields and in dungeons alike."
    },
    {
        name: "Monk",
        description: "Monks make careful study of a magical energy that most monastic traditions call ki. This energy is an element of the magic that suffuses the multiverse—specifically, the element that flows through living bodies. Monks harness this power within themselves to create magical effects and exceed their bodies’ physical capabilities, and some of their special attacks can hinder the flow of ki in their opponents. Using this energy, monks channel uncanny speed and strength into their unarmed strikes. As they gain experience, their martial training and their mastery of ki gives them more power over their bodies and the bodies of their foes."
    },
    {
        name: "Paladin",
        description: "A paladin swears to uphold justice and righteousness, to stand with the good things of the world against the encroaching darkness, and to hunt the forces of evil wherever they lurk. Paladins train for years to learn the skills of combat, mastering a variety of weapons and armor. Even so, their martial skills are secondary to the magical power they wield: power to heal the sick and injured, to smite the wicked and the undead, and to protect the innocent and those who join them in the fight for justice."
    },
    {
        name: "Ranger",
        description: "Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization—humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Rangers focus their combat training on techniques that are particularly useful against their specific favored foes. Thanks to their familiarity with the wilds, rangers acquire the ability to cast spells that harness nature’s power, much as a druid does. Their spells, like their combat abilities, emphasize speed, stealth, and the hunt. A ranger’s talents and abilities are honed with deadly focus on the grim task of protecting the borderlands."
    },
    {
        name: "Rogue",
        description: "Rogues devote as much effort to mastering the use of a variety of skills as they do to perfecting their combat abilities, giving them a broad expertise that few other characters can match. Many rogues focus on stealth and deception, while others refine the skills that help them in a dungeon environment, such as climbing, finding and disarming traps, and opening locks. When it comes to combat, rogues prioritize cunning over brute strength. A rogue would rather make one precise strike, placing it exactly where the attack will hurt the target most, than wear an opponent down with a barrage of attacks. Rogues have an almost supernatural knack for avoiding danger, and a few learn magical tricks to supplement their other abilities."
    },
    {
        name: "Sorcerer",
        description: "Magic is a part of every sorcerer, suffusing body, mind, and spirit with a latent power that waits to be tapped. Some sorcerers wield magic that springs from an ancient bloodline infused with the magic of dragons. Others carry a raw, uncontrolled magic within them, a chaotic storm that manifests in unexpected ways. Sorcerers have no use for the spellbooks and ancient tomes of magic lore that wizards rely on, nor do they rely on a patron to grant their spells as warlocks do. By learning to harness and channel their own inborn magic, they can discover new and staggering ways to unleash that power."
    },
    {
        name: "Warlock",
        description: "A warlock is defined by a pact with an otherworldly being. Sometimes the relationship between warlock and patron is like that of a cleric and a deity, though the beings that serve as patrons for warlocks are not gods. A warlock might lead a cult dedicated to a demon prince, an archdevil, or an utterly alien entity—beings not typically served by clerics. More often, though, the arrangement is similar to that between a master and an apprentice. The warlock learns and grows in power, at the cost of occasional services performed on the patron’s behalf. Unlike bookish wizards, warlocks supplement their magic with some facility at hand-to-hand combat. They are comfortable in light armor and know how to use simple weapons."
    },
    {
        name: "Wizard",
        description: "Wild and enigmatic, varied in form and function, the power of magic draws students who seek to master its mysteries. Some aspire to become like the gods, shaping reality itself. Though the casting of a typical spell requires merely the utterance of a few strange words, fleeting gestures, and sometimes a pinch or clump of exotic materials, these surface components barely hint at the expertise attained after years of apprenticeship and countless hours of study. Wizards live and die by their spells. Everything else is secondary. They learn new spells as they experiment and grow in experience. They can also learn them from other wizards, from ancient tomes or inscriptions, and from ancient creatures (such as the fey) that are steeped in magic."
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
const AbilityScores = [

    {
        name: "Strength",
        description: "The measure of your athletic skill"
    },
    {
        name: "Dexterity",
        description: "The ability of your body to obey your commands"
    },
    {
        name: "Intelligence",
        description: "The measure of your ability to use logic, memory, and attention to detail"
    },
    {
        name: "Constitution",
        description: "The measure of your health and vitality"
    },
    {
        name: "Wisdom",
        description: "The measure of your awareness of the world around you"
    },
    {
        name: "Charisma",
        description: "The measure of your command, confidence, and charm in society"
    },
]

// THESE ARE THE VARIABLES THAT THE CHOICES CAN BE PUT INTO
// SHOULD THEY BE THEIR OWN CONTEXT?
let AbilityScoreChoices =[
    {
        name: "Strength",
        value: 0
    },
    {
        name: "Dexterity",
        value: 0
    },
    {
        name: "Inteilligence",
        value: 0
    },
    {
        name: "Wisdom",
        value: 0
    },
    {
        name: "Charisma",
        value: 0
    },
    {
        name: "Constitution",
        value: 0
    },
]
let raceChoice = ""
let DNDclassChoice = ""
let backgroundChoice = ""
function CharacterCreateAccMenu() {
    return (
        <div className="container mt-5">
            <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                                Ability Scores
                        </a>
                        </h4>
                    </div>
                    <div id="collapse1" className="panel-collapse collapse">
                        <div className="panel-body">
                            <input type="text" className="abilityScoreNameInput form-control" aria-label="Username" placeholder="Enter Character's Name Here" aria-describedby="basic-addon1"></input>
                        </div>
                        {AbilityScores.map(score => (
                            <AbilityScoreModal
                                score={score} />
                        ))}
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading" data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                        <h4 className="panel-title text-center bg-dark">
                            <a className="bg-dark border-white">
                                Race
                        </a>
                        </h4>
                    </div>
                    <div id="collapse2" className="panel-collapse collapse ">
                        {Races.map(race => (
                            <RaceModal race={race} />
                        ))}
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                                Class
                        </a>
                        </h4>
                    </div>
                    <div id="collapse3" className="panel-collapse collapse">
                        {DNDClasses.map(DNDclass => (
                            <ClassModal
                                DNDclass={DNDclass} />
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
                {/* <div className="panel panel-default">
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
                </div> */}
            </div>
        </div>
    )
};

export default CharacterCreateAccMenu