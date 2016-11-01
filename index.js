var express = require('express');
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
});
