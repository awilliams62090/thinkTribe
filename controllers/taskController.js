const db = require("../models");

// Defining methods for the taskController
module.exports = {
  findAll: function(req, res) {
    db.Task
      .find(req.query)
      .then(dbTask => res.json(dbTask))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Task
      .findById(req.params.id)
      .then(dbTask => res.json(dbTask))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Task
      .create(req.body)
      .then(dbTask => res.json(dbTask))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Task
      .findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbTask => res.json(dbTask))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Task
      .findById(req.params.id)
      .then(dbTask => dbTask.remove())
      .then(dbTask => res.json(dbTask))
      .catch(err => res.status(422).json(err));
  }
};
