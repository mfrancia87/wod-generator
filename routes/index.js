var express = require('express');
var router = express.Router();
var db = require('../db/database.json');


/* GET home page. */
router.get('/', function (req, res) {
    res.render('index.hbs', { title: 'Express' });
});

router.get('/wods', function (req, res) {
    res.render('wods.hbs', { wods: encodeURIComponent(JSON.stringify(db)) });
});

router.get('/daily', function (req, res) {
    res.render('daily.hbs', { title: 'daily' });
});

router.get('/error', function (req, res) {
    res.render('error.hbs');
});

module.exports = router;
