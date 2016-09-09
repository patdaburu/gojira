/**
 * Created by patdaburu on 7/21/2016.
 */
"use strict";

var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('scratch', { title: 'A Scratch Page for Tests' });
});

module.exports = router;