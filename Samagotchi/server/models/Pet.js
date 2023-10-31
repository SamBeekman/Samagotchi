const { Schema, model } = require('mongoose');


const petSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      default: "X",
    },
    sprite: {
      type: String,
      required: true,
      default: "/sprite1.png",
    },
    level: {
      type: Number,
      required: true,
      default: 0,
    },
    exp: {
      type: Number,
      required: true,
      default: 0,
    },
    reqExp: {
      type: Number,
      required: true,
      default: 10,
    },
    hungryLevel: {
      type: Number,
      required: true,
      default: 100,
    },
    hungryThreshold: {
      type: Number,
      required: true,
      default: 80,
    },
    isHungry: {
      type: Boolean,
      required: true,
      default: false,
    },
    sleepyLevel: {
      type: Number,
      required: true,
      default: 100,
    },
    sleepyThreshold: {
      type: Number,
      required: true,
      default: 80,
    },
    isSleepy: {
      type: Boolean,
      required: true,
      default: false,
    },
    dirtyLevel: {
      type: Number,
      required: true,
      default: 100,
    },
    dirtyThreshold: {
      type: Number,
      required: true,
      default: 80,
    },
    isDirty: {
      type: Boolean,
      required: true,
      default: false,
    },
    lazyLevel: {
      type: Number,
      required: true,
      default: 100,
    },
    lazyThreshold: {
      type: Number,
      required: true,
      default: 80,
    },
    isLazy: {
      type: Boolean,
      required: true,
      default: false,
    },
  });


const Pet = model('Pet', petSchema);
module.exports = Pet;
