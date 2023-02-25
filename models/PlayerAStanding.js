const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerAStandingSchema = new Schema(
  {
    place: {
      type: Number,
      require: true,
    },
    playerName: {
      type: String,
      require: true,
    },
    threeDA: {
      type: Number,
      require: true,
    },
    firstNineAvg: {
      type: Number,
      require: true,
    },
    avgFin: {
      type: String,
      require: true,
    },
    tonPlus: {
      type: String,
      require: true,
    },
    tonFourPlus: {
      type: String,
      require: true,
    },
    tonEighty: {
      type: String,
      require: true,
    },
    matches: {
      type: Number,
      require: true,
    },
    legs: {
      type: Number,
      require: true,
    },
    legWinPct: {
      type: String,
      require: true,
    },
    league: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PlayerAStanding", playerAStandingSchema);
