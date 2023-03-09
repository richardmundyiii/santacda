const express = require("express");
const router = express.Router();
const teamsCtrl = require("../controllers/teamsController");

router.get("/teams/index", teamsCtrl.index);
router.get("/teams/:id", teamsCtrl.show);

module.exports = router;
