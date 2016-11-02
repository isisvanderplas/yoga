var express = require('express');
<<<<<<< HEAD
var pug = require('pug');
var app = express();

app.use(express.static(__dirname + '/'));

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
