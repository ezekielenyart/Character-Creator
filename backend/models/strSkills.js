module.exports = function(sequelize, DataTypes) {
    var StrengthSkills = sequelize.define("StrengthSkills", {

      strSkillName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      proficiency: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      misc: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }

    });
  

    StrengthSkills.associate = function (models) {

        StrengthSkills.belongsTo(models.Character, {
            foreignKey: {
                allowNull: false
            }
        })
    }
  
    return StrengthSkills;
  };