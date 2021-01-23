var express = require('express');
var router = express.Router();
const fs = require('fs');
let catBreeds = require("../data/breeds.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('add-cat', { title: 'Add Cat Form', catBreeds: catBreeds });
});

router.post('/', (req, res, next) => {
  //do something
  fs.readFile("./data/breeds.json", 'utf8' , (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      let newBreed = req.body.breed;
      //console.log('the raw dataJSON is ', data )
      let currentBreeds = JSON.parse(data);
      currentBreeds.push(newBreed);
      //console.log("the breeds.json parsed data is the varible currentBreeds " ,currentBreeds);
      let updatedBreeds = JSON.stringify(currentBreeds);
      //console.log("JSON updated ready to save updated breeds", updatedBreeds);
      fs.writeFile('./data/breeds.json', updatedBreeds, 'utf-8', (err) => {
        if (err) {
          console.log(err)
        }
        console.log("The breed was uploaded successfully...")
      });
      res.writeHead(301, { location: '/' });
      res.end();
  });
});

module.exports = router;
