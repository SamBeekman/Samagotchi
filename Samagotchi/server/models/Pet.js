const { Schema } = require('mongoose');


const petSchema = new Schema({

  species: {
    type: Number,
    required: true,
  },
  sprite: {
    type: Number,
    required: true,
  },
  happiness: {
    type: Number,
    required: true,
  },
  hungry: {
    type: Boolean,
    required: true,
  },
  sleepy: {
    type: Boolean,
    required: true,
  },
  poopy: {
    type: Boolean,
    required: true,
  },
  fitness: {
    type: Number,
    required: true,
  },
});

module.exports = petSchema;
