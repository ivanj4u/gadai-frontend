/**
 * Created by ivan_j4u on 2/24/2017.
 */
var http = require('http'),
  httpProxy = require('http-proxy');


var server = httpProxy.createServer(function (req, res, proxy) {
  req.headers.host = 'myapp.heroku.com';
  proxy.proxyRequest(req, res, {
    port: 80,
    host: 'myapp.heroku.com'
  });
}).listen(9000);
