const express = require('express');
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
const mongoose = require("mongoose");


const app = express();

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));
}

// Catch all route to redirect unmanaged routes back to the react app.
// THIS OPTION IS NOT SEO OPTIMIZED
// THIS ROUTE SENDS ALL SAVED LINKS TO THE ROOT

// app.get('/*', function (req, res) {
//   res.redirect('/')
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require("./Routes/userRoutes.js")(app);
require("./Routes/characterRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/CCUsers", { useNewUrlParser: true });


app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
});