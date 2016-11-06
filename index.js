var express = require('express');
var pug = require('pug');
var app = express();

app.use(express.static(__dirname +  '/'));

app.get('/', function(request, response) {
  // console.log('request object is:');
  // console.log(request);
  response.sendFile(__dirname + '/index.html');
});

app.get('/hello-world', function(req, res) {
  res.send('Now you request hello-world path!');
});

app.get('/a/*', function(req, res) {
  console.log('your dynamic path is: ');
  console.log(req.params[0]);
  res.send('You have requested a dynamic path');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
app.use(express.static(__dirname + '/'));
});

app.get('/', function(request, response) {
  console.log('Requesting home page...');
  response.send(pug.renderFile(__dirname + '/views/index.pug', {}));
  // response.sendFile(__dirname + '/index.html');
});

app.get('/yoga', function(request, response) {
  console.log('Requesting contact page....');
  response.send(pug.renderFile(__dirname + '/views/yoga.pug', {}));
});

app.get('/pricing', function(request, response) {
  console.log('Requesting contact page....');
  response.send(pug.renderFile(__dirname + '/views/pricing.pug', {}));
});

app.get('/appointment', function(request, response) {
  console.log('Requesting contact page....');
  response.send(pug.renderFile(__dirname + '/views/appointment.pug', {}));
});

app.get('/about', function(request, response) {
  console.log('Requesting contact page....');
  response.send(pug.renderFile(__dirname + '/views/about.pug', {}));
});

app.get('/contact', function(request, response) {
  console.log('Requesting contact page....');
  response.send(pug.renderFile(__dirname + '/views/contact.pug', {}));
});


app.listen(3000, function() {
  console.log('Web server started on port 3000');
});
