var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', ( title: 'Express' ));
});



// const homeHandler = require('./home');
// const staticFiles = require('./static-files');
// module.exports = [homeHandler, staticFiles];


// const catHandler = require('./cats');
// module.exports = [homeHandler, staticFiles, catHandler];
