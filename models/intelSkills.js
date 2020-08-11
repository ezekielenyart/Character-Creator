module.exports = function(sequelize, DataTypes) {
    var IntelligenceSkills = sequelize.define("IntelligenceSkills", {

      intelSkillName: {
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
  

    IntelligenceSkills.associate = function (models) {

        IntelligenceSkills.belongsTo(models.Character, {
            foreignKey: {
                allowNull: false
            }
        })
    }
  
    return IntelligenceSkills;
  };