/**
* rodan
* @module rodan
*/
"use strict";

var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    var response = {
        calls: [
            {
                id : "6f595629a7e348fcacdc1f1fc9b5717d",
                title : "1116 Killian Blvd SE",
                status : "Active",
                station_id : "02"

            },
            {
                id : "787a66b81229462d8b923f0c5286f07f",
                title : "1600 Pensylvania Ave",
                status : "Active",
                station_id : "03"
            }
        ]
    };
    req.res.send(response);
});

module.exports = router;
