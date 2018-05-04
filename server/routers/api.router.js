var express = require('express')
var app = express();
var controllers = require('../controllers');

app.get('/helloworld',controllers.helloworld.sendHelloworld)

module.exports = function(){
    return app;
}