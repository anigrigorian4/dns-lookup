var express = require('express');
var router = express.Router();
var spfCheck = require('spf-check');


router.get('/', function(req, res, next) {

  res.render('index', { title: 'SPF Lookup tool' });
});


router.get('/spf-lookup', function(req, res, next) {
  var spf = new spfCheck.SPF(req.query.domain);

  spf.resolveSPF(req.query.domain,'TXT').then(function(x){
    let data = [];
    x.forEach(function (value, key) {

      if(typeof value.address != 'undefined') {
        data.push(value.address);
      }
    });


    res.render('index', {
      title: 'SPF Lookup tool',
      domain: req.query.domain,
      data: data
    });
  }).catch(function(error){

    res.render('index', {
      title: 'SPF Lookup tool',
      domain: req.query.domain,
      errorMessage: error.message
    });
  });
});


module.exports = router;