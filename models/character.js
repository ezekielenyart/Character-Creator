module.exports = function(sequelize, DataTypes) {
    var Character = sequelize.define("Character", {
      // Giving the Character model a name of type STRING
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      classes: {
        type: DataTypes.STRING,
        allowNull: false
      },
      xp: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      strength: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      intelligence: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      dexterity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      wisdom: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      constitution: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      charisma: {
        type: DataTypes.INTEGER,
        allowNull: false
      }

    });
  


    Character.associate = function(models) {
      // Associating Character with Characters
      // When an Character is deleted, also delete any associated HP

      Character.belongsTo(models.User, {
        foreignKey: {
            allowNull: false
        }
    })

      Character.hasOne(models.HP, {
        onDelete: "cascade"
      });

      Character.hasOne(models.Initiative, {
        onDelete: "cascade"
      });

      Character.hasOne(models.ArmorClass, {
        onDelete: "cascade"
      });

      Character.hasOne(models.StrSkills, {
        onDelete: "cascade"
      });

      Character.hasOne(models.IntelSkills, {
        onDelete: "cascade"
      });

      Character.hasOne(models.DexSkills, {
        onDelete: "cascade"
      });

      Character.hasOne(models.WisSkills, {
        onDelete: "cascade"
      });

      Character.hasOne(models.ConsSkills, {
        onDelete: "cascade"
      });

      Character.hasOne(models.CharSkill, {
        onDelete: "cascade"
      });
    };
  
    return Character;
  };