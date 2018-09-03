'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index.hbs', { title: 'Express' });
});

router.get('/error', function (req, res) {
    res.render('error.hbs');
});

module.exports = router;
