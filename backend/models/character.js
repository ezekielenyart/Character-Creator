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
      level: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
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
      },
      initProf: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      initMisc: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      initDoubleProf: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      armorBonus: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      shieldBonus: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      maxDex: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      initMisc: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      baseSpeed: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      speedMisc: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      strSkillName: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      strProf: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      strMisc: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      intelSkillName: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      intelProf: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      intelMisc: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      dexSkillName: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      dexProf: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      dexMisc: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      wisSkillName: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      wisProf: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      wisMisc: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      charSkillName: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      charProf: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      charMisc: {
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