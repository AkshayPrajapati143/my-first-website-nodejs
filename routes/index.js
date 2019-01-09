var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.post('/contact', function(req, res, next) {
  var a = req.body.t1;
  console.log("text val is = " +a);
  const myarray ={
    t1 : req.body.t1,
    t2 : req.body.t2,
    t3 : req.body.t3,

  }
  
  res.render('home', { msg: myarray });
});

module.exports = router;
