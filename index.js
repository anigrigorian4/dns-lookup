
var SPFValidator = require('spf-validator');
var validator = new SPFValidator('gid.am');

var spfCheck = require('spf-check');

var spf = new spfCheck.SPF('facebook.com');

// validator.hasRecords((err, hasRecords) => console.log(hasRecords));


// const dns = require('dns');

// dns.resolveTxt('facebook.com', (err,                                     addresses) => console.log('TXT records: %j', addresses));


spf.resolveSPF('facebook.com','TXT',5).then(function(x){

    x.forEach(function (value, key) {
        console.log(value)
console.log(value.address);
    })

});