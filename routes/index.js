var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shade Price Calculator' });
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  if(req.body.price)
    res.render('app', { title: 'Shade Price Calculator' , price: req.body.price });
  else
    res.render('error', { error: 'No Price to caclulate' })
});

module.exports = router;
