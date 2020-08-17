// Routes for creating, updating, and deleting characters.
const db = require('../models')

module.exports = function(app) {

    // GET route for getting all of the characters
    app.get("/api/characters/", function(req, res) {
      db.Character.findAll({})
        .then(function(dbCharacter) {
          res.json(dbCharacter);
        })
        .catch(err => console.log(err))
    });
    
    
  
    // Get route for returning characters of a specific class (future dev)
    // app.get("/api/characters/class/:class", function(req, res) {
    //   db.Character.findAll({
    //     where: {
    //       category: req.params.class
    //     }
    //   })
    //     .then(function(dbCharacter) {
    //       res.json(dbCharacter);
    //     })
    //     .catch(err => console.log(err))
    // });
  
    // Get route for retrieving a single character
    app.get("/api/characters/:id", function(req, res) {
      db.Character.findOne({
        where: {
          id: req.params.id
        }
      })
        .then(function(dbCharacter) {
          res.json(dbCharacter);
        })
        .catch(err => console.log(err))
    });
  
    // POST route for saving a new character
    app.post("/api/characters", function(req, res) {

        // NEED TO CORRECT FOR OUR CURRENT CHARACTER MODEL!!

      var { name, classes, xp, strength, intelligence, dexterity, wisdom, constitution, charisma } = req.body;
      db.Character.create({
        name,
        classes,
        xp,
        strength,
        intelligence,
        dexterity,
        wisdom,
        constitution,
        charisma
      })
        .then(function(dbPost) {
          res.json(dbPost);
        })
        .catch(err => console.log(err))
    });
  
    // DELETE route for deleting characters
    app.delete("/api/characters/:id", function(req, res) {
      db.Character.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(function(dbCharacter) {
          res.json(dbCharacter);
        })
        .catch(err => console.log(err))
    });
  
    // PUT route for updating characters
    app.put("/api/characters", function(req, res) {
      db.Character.update(req.body,
        {
          where: {
            id: req.body.character_Id
          }
        })
        .then(function(dbCharacter) {
          res.json(dbCharacter);
        })
        .catch(err => console.log(err))
    });
  };