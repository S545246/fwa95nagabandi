var express = require('express');
var router = express.Router();
val = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
   fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
      if (req.method === 'GET' ) {
        const Value1 = search_params.get("x")
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('Math.atan() applied to '+Value1+' is '+Math.atan(Value1) )
        res.write('<br/>Math.exp() applied to '+Value1+' is '+Math.exp(Value1))
        res.write('<br/>Math.expm1() applied to '+Value1+' is '+Math.expm1(Value1))
        res.end()
      }
  val = val+1;
  res.send('User accesses are: '+val);
});

module.exports = router;