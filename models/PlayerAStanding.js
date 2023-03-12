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
    wins: {
      type: Number,
      require: true,
    },
    lossess: {
      type: Number,
      require: true,
    },
    nineFive: {
      type: Number,
    },
    ton: {
      type: Number,
    },
    tonFourty: {
      type: Number,
    },
    tonEighty: {
      type: Number,
    },
    numHighlights: {
      type: Number,
    },
    totalHighPoints: {
      type: Number,
    },
    fiveMark: {
      type: Number,
    },
    sixMark: {
      type: Number,
    },
    sevenMark: {
      type: Number,
    },
    eightMark: {
      type: Number,
    },
    nineMark: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PlayerAStanding", playerAStandingSchema);
