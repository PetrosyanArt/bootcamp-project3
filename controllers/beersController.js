const db = require("../models");
import axios from 'axios';

// Defining methods for the beersController
module.exports = {
  findAll: function(req, res) {
    db.Beer
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Beer
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Beer
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Beer
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Beer
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  search: function(req, res) {
    console.log("beer search")
    console.log(req.params.query);
    axios.get('https://api.brewerydb.com/v2/search?key=6d66b737226cdd5d6f16d4a6dff7f012&q=' + req.params.query)
      .then(response => {
        console.log(response)
        res.json(response.data)
      })
      .catch(err=>{
        console.log(err)
        throw err;
      })
  }
};
