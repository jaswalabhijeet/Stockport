var express = require('express');
var router = express.Router();
const path = require('path');
var db = require('../queries');
/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/data', function (req, res, next) {
  res.status(200)
    .json({
      status: 'success',
      message: 'Retrieved ALL puppies'
    });
});

router.get('/home',function(req,res, next) {
  res.sendFile(path.join(__dirname,'..','views','homepage.html' ));

});
router.get('/api/puppies', db.getAllPuppies);
router.get('/api/stocks', db.getAllStocks);
router.get('/api/puppies/:id', db.getSinglePuppy);
router.post('/api/puppies', db.createPuppy);
// router.put('/api/puppies/:id', db.updatePuppy);
// router.delete('/api/puppies/:id', db.removePuppy);

module.exports = router;
