/**
 * Created by patdaburu on 7/17/2016.
 */
"use strict";

var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('about', { title: 'About Gojira Mappu' });
});

module.exports = router;