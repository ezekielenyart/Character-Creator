module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the User model a name of type STRING
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // validation regex for correct email format
          }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // validation regex for valid password string
          }
      },
      groups: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });

    User.associate = function(models) {
      // Associating User with Characters
      // When an User is deleted, also delete any associated Characters
      User.hasMany(models.Character, {
        onDelete: "cascade"
      });
    };


  // This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  
    return User;
  };