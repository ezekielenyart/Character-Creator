const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const characterSchema = new Schema({

    characterData:{ //Character object is stored as a JSON string. 
      type: String,
      default: "",
      // get: function(data) {
      //   try { //JSon.parse does nto seem to work.
      //     return JSON.parse(data);
      //   } catch(err) { 
      //     return data;
      //   }
      // },
      set: function(data) {
        return JSON.stringify(data);
      }
    }
})

var Character = mongoose.model("Character", characterSchema)



module.exports = Character;






// module.exports = function(sequelize, DataTypes) {
//     var Character = sequelize.define("Character", {
//       // Giving the Character model a name of type STRING
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       classes: {
//         type: DataTypes.STRING,
//         allowNull: false
//       },
//       xp: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       level: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       maxHP: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       currentHP: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       hitDie: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       initProf: {
//         type: DataTypes.BOOLEAN,
//         allowNull: false
//       },
//       initMisc: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       initDoubleProf: {
//         type: DataTypes.BOOLEAN,
//         allowNull: false
//       },
//       armorBonus: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       shieldBonus: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       maxDex: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       initMisc: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       baseSpeed: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       speedMisc: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       strSkillName: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       strProf: {
//         type: DataTypes.BOOLEAN,
//         allowNull: false
//       },
//       strMisc: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       intelSkillName: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       intelProf: {
//         type: DataTypes.BOOLEAN,
//         allowNull: false
//       },
//       intelMisc: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       dexSkillName: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       dexProf: {
//         type: DataTypes.BOOLEAN,
//         allowNull: false
//       },
//       dexMisc: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       wisSkillName: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       wisProf: {
//         type: DataTypes.BOOLEAN,
//         allowNull: false
//       },
//       wisMisc: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       charSkillName: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       charProf: {
//         type: DataTypes.BOOLEAN,
//         allowNull: false
//       },
//       charMisc: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       }

//     });
  


//     Character.associate = function(models) {
//       // Associating Character with Characters
//       // When an Character is deleted, also delete any associated HP

//       Character.belongsTo(models.User, {
//         foreignKey: {
//             allowNull: false
//         }
//     })

      
  
//     return Character;
//   }}