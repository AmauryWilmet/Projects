const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
  let cityName = req.body.city;
  const apiKey = 'c7f9e04d3965103c913e417226581fb0';
  const units = 'metric';
  const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey + '&units=' + units + '&lang=fr';
  http.get(url, function(resp) {
    resp.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const errorCode = weatherData.cod;
      if (errorCode != 404 || errorCode != '404') {
        const temp = weatherData.main.temp;
        const desc = weatherData.weather[0].description;
        const iconCode = weatherData.weather[0].icon;
        const errorCode = weatherData.cod;
        const urlIcon = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
        res.write('<p>' + desc + '</p>');
        res.write('<h1>Wavre Temperature is ' + temp + '</h1>');
        res.write('<img src="' + urlIcon + '">');
        res.send();
      }else{
        res.send('Error ville nom trouvé !');
      }
    });
  });
});

app.listen(port);
