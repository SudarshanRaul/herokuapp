var express = require('express');
var app = new express();
var port = process.env.PORT || 3000;

app.listen(port, function(err) {
    if (typeof(err) == "undefined") {
        console.log('Application is running on : ' + port + ' port');
    }
});

app.use(express.static('/'));

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: __dirname });
});
