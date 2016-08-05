var middleware = require('./middleware.js');
var express = require('express');
var app = express();
var port = 3000;

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About us!');
})

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
	console.log('App listening on port ' + port);
});