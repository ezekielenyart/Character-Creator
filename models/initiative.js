module.exports = function(sequelize, DataTypes) {
    var Initiative = sequelize.define("Initiative", {
      // Giving the Initiative model a name of type STRING
      proficiency: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      doubleProficiency: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      dexterity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      misc: {
        type: DataTypes.INTEGER,
        allowNull: false
      }

    });
  

    Initiative.associate = function (models) {

        Initiative.belongsTo(models.Character, {
            foreignKey: {
                allowNull: false
            }
        })
    }
  
    return Initiative;
  };