const express = require('express');
const Router = express.Router();
const CardSchema = require('./CardSchema');



// route 1 fetch all SavedData by Get "./view". 
Router.get("/card", async (req, res) => {
  try {
    const CARD = await CardSchema.find();

    res.json(CARD);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error:");
  }
});

// route 2 Save Data by Post "./savedata". 
Router.post("/addcard", async (req, res) => {
  try {
    
    const {Name, Birthdate} = req.body;

      const data = new CardSchema({
        Name, Birthdate
      })
      
      const SaveData = await data.save();
      res.json(SaveData);

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error:");
    }
  });

  Router.get("/card/:id", async (req, res) => {
    // find the note for delete & delete it
    try {
      let data = await CardSchema.findById(req.params._id);
      if (!data) {
        return res.status(404).send("Not Found In Database");
      }
      // find notes using id
      data = await CardSchema.findOne(req.params._id);
      byid
      // catching error
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error:");
    }
  });

  module.exports = Router