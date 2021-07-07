"use strict";
//Require Express.js Router and users controller:
const router = require("express").Router(),
    mainController = require("../controllers/main_controller");

router.get("/", mainController.showIndex);

//Export the module router:
module.exports = router;