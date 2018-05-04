var express = require('express')
var app = express();

var routers = require('./routers');

app.use('/api',routers.default());

app.listen(8080, function(err){
    if(err) console.log("Cannot starting server");
    else
        console.log('Server is started at http://localhost:8080');
})