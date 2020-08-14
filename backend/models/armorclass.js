module.exports = function(sequelize, DataTypes) {
    var Speed = sequelize.define("Speed", {

      baseSpeed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      misc: {
        type: DataTypes.INTEGER,
        allowNull: true
      }

    });
  

    Speed.associate = function (models) {

        Speed.belongsTo(models.Character, {
            foreignKey: {
                allowNull: false
            }
        })
    }
  
    return Speed;
  };