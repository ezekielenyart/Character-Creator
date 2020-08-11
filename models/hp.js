module.exports = function(sequelize, DataTypes) {
    var HP = sequelize.define("HP", {
        maxHP: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        currentHP: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        hitDie: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    HP.associate = function(models) {
        // Associating HP with lete any associated HPs
        HP.belongsTo(models.Character, {
            foreignKey: {
                allowNull: false
            }
        });
      };

    return HP
};