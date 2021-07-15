const express = require('express');
const bodyParser = require('body-parser');

const app  = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.post('/', function(request, response) {
  let numberOne = parseInt(request.body.numberOne);
  let numberTwo = parseInt(request.body.numberTwo);
  let result = numberOne + numberTwo;
  response.send('The result is : ' + result);
});

app.get('/bmicalculator', function(req, res) {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmiCalculator', function(req, res) {
  let height = parseFloat(req.body.height);
  let weight = parseFloat(req.body.weight);
  let bmi = weight / (height * height);
  res.send('This is bmi => ' + bmi);
});

app.listen(port);
