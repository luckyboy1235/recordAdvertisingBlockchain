var express = require('express')
var app = express();
var controllers = require('../controllers');

app.get('/films',controllers.films.getFilmInfo)
app.get('/films/:id',controllers.films.getFilm)
app.get('/advertisements/random',controllers.advertisements.randomVideo)
module.exports = function(){
    return app;
}