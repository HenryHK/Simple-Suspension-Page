'use strict';

var express = require("express");
var controller = require("../controllers/app.server.controller");
var router = express.Router();

router.get('/', controller.render);

module.exports = router;