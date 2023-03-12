const router = require("express").Router();
const Admin = require("../models/Admin");
const adminRouter = require("../controllers/adminController");

router.get("/", adminRouter.index);

module.exports = router;
