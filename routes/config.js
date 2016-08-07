/**
 * Created by patdaburu on 8/6/2016.
 */
"use strict";

var express = require('express');
var router = express.Router();

/* GET settings page. */
router.get('/', function(req, res, next) {
    //var app = express();
    // var config = {
    //     env: req.app.get('env')
    // };
    res.send(req.app.get('config'));
});

module.exports = router;