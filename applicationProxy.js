/**
 * Created by ivan_j4u on 2/24/2017.
 */
var httpProxy = require('http-proxy');
var port = process.env.PORT || 8000;
var authServer = 'https://gd-server.herokuapp.com/',
  backendServer = 'https://gd-backend.herokuapp.com/';


var routing = {
  '/oauth/**': { port: port, host: authServer },
  '/api/**': { port: port || 3000, host: backendServer }
}

var server = httpProxy.createServer(routing).listen(port);
