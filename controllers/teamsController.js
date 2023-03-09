const Team = require("../models/Team");
const Player = require("../models/Player");

module.exports = {
  index,
  show,
};

function index(req, res) {
  Team.find({}, function (err, teams) {
    res.render("teams/index", { title: "All Teams", teams });
  });
}

function show(req, res) {
  Team.findById(req.params.id, (err, team) => {
    Player.find({ team: req.params.id }, (err, players) => {
      res.render("teams/show", { title: "Team Details", team, players });
    });
  });
}
