var express = require('express')
var app = express();

var routers = require('./routers');

/**
 * config statis file
 */
app.use('/scripts/video.js',express.static(__dirname + '/node_modules/video.js/dist/video.min.js'))
app.use('/scripts/videojs.ads.min.js', express.static(__dirname + '/node_modules/videojs-contrib-ads/dist/videojs.ads.min.js'))
app.use('/styles/video-js.css',express.static(__dirname + '/node_modules/video.js/dist/video-js.min.css'))
app.use('/styles/videojs.ads.css', express.static(__dirname + '/node_modules/videojs-contrib-ads/dist/videojs.ads.css'))
app.use(express.static(__dirname + '/assert/'))

/**
  * config route
  */
app.use('/api',routers.default());

/**
 * starting server
 */
app.listen(8080, function(err){
    if(err) console.log("Cannot starting server");
    else
        console.log('Server is started at http://localhost:8080');
})