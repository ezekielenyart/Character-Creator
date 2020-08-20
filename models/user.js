const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema({

    email: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        required: true
    },

    password: {
        type: String,
        required: true
    },

    characters: [{

        type: Schema.Types.ObjectId,
      // this id references the Book model
        ref: "Character"
    }]

})

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

userSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null);
    next();
})

var User = mongoose.model("User", userSchema)

// User.prototype.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
//   };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password


//   User.addHook("beforeCreate", function(user) {
//     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
//   });

module.exports = User;