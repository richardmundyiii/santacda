const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  venue: {
    type: String,
    require: true,
  },
  league: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Team", teamSchema);
