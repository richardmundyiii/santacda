const StandingB = require("../models/StandingB");
const PlayerBStanding = require("../models/PlayerBStanding");

module.exports = {
  index,
};

function index(req, res) {
  StandingB.find({}, function (err, standings) {
    PlayerBStanding.find({}, function (err, playerBStandings) {
      res.render("stats/bLeague", {
        title: "B League Stats",
        standings,
        playerBStandings,
      });
    });
  });
}
