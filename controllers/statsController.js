const StandingA = require("../models/StandingA");
const PlayerAStanding = require("../models/PlayerAStanding");

module.exports = {
  index,
};

function index(req, res) {
  StandingA.find({}, function (err, standings) {
    PlayerAStanding.find({}, function (err, playerAStandings) {
      res.render("stats/aLeague", {
        title: "A League Stats",
        standings,
        playerAStandings,
      });
    });
  });
}
