const express = require('express');

const app = express();
const port = 3000;
app.get('/', function(request, response) {
  response.send("<p style='color: pink;'>hello</p>");
});

app.get('/contact', function(request, response) {
  response.send('Contact me at : kaliroot08');
});

app.get('/products/show', function(request, response) {
  response.send('Coming soon...');
});


app.listen(port);
