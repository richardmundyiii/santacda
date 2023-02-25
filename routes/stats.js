const express = require("express");
const router = express.Router();
const statsACtrl = require("../controllers/statsController");
const statsBCtrl = require("../controllers/statsBController");

router.get("/stats/aLeague", statsACtrl.index);

router.get("/stats/bLeague", statsBCtrl.index);

module.exports = router;
