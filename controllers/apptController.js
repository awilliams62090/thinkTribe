const db = require("../models");

// Defining methods for the apptController
module.exports = {
  findAll: function(req, res) {
    db.Appt
      .find(req.query)
      .then(dbAppt => res.json(dbAppt))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Appt
      .findById(req.params.id)
      .then(dbAppt => res.json(dbAppt))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Appt
      .create(req.body)
      .then(dbAppt => res.json(dbAppt))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Appt
      .findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbAppt => res.json(dbAppt))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Appt
      .findById(req.params.id)
      .then(dbAppt => dbAppt.remove())
      .then(dbAppt => res.json(dbAppt))
      .catch(err => res.status(422).json(err));
  }
};


