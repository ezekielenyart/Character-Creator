const express = require('express');
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
const mongoose = require("mongoose");


const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require("./Routes/userRoutes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/CCUsers", { useNewUrlParser: true });


app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
});