const { Schema, model } = require('mongoose');


const petSchema = new Schema(
  {
    sprite: {
      type: Number,
      required: true,
      default: 0,
    },
    happiness: {
      type: Number,
      required: true,
      default: 0,
    },
    hungry: {
      type: Boolean,
      required: true,
      default: true,
    },
    sleepy: {
      type: Boolean,
      required: true,
      default: false,
    },
    poopy: {
      type: Boolean,
      required: true,
      default: true,
    },
    fitness: {
      type: Number,
      required: true,
      default: 0,
    },
  });


const Pet = model('Pet', petSchema);
module.exports = Pet;
