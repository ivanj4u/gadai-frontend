/**
 * Created by ivan_j4u on 2/24/2017.
 */
var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var authServer = 'https://gd-server.herokuapp.com/',
  backendServer = 'https://gd-backend.herokuapp.com/';
var routing = {
  '/oauth/**': { port: port, host: authServer },
  '/api/**': { port: port, host: backendServer }
}
var apiProxy = httpProxy.createProxyServer(routing);

app.all("/oauth/*", function (req, res) {
  console.log('redirecting to auth server');
  apiProxy.web(req, res, {target: authServer});
});

app.use(express.static(__dirname + '/dist'));
console.log("Aplikasi sudah dijalankan");
app.listen(process.env.PORT || 3000);
