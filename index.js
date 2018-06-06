var express = require('express');
var app = new express();
var port = process.env.PORT || 3000;

var users = [{
    name : "Babu",
    Address : "RR Nagar"
  },{
    name : "Manju",
    Address : "Banshankari"
  }
}];

app.listen(port, function(err) {
    if (typeof(err) == "undefined") {
        console.log('Application is running on : ' + port + ' port');
    }
});

app.use(express.static('/'));

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: __dirname });
});

app.get('/users', function(res. req) {
    res.send(JSON.stringify(users));
});
