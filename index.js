var express = require('express');
var bodyParser = require('body-parser');
var v1api = require('./src/v1.js');
var dataFile = require('./src/data.js');

var app = new express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.listen(port, function(error) {
    if (typeof(error) == "undefined") {
        console.log('Application is running on : ' + port + ' port');
    }
});

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: __dirname });
});

app.post('/api/addIndividualItem', function(req, res) {
    dataFile.readAsync("allItems", function(data) {
        data.push({
            date : req.body.date,
            particular : req.body.particular,
            remark : req.body.remark,
            value : req.body.value
        });

        res.send(data);

        dataFile.writeAsync("allItems", data, function() {
            console.log("Writing success");
        });
    });
});

app.get('/api/getAllItems', function(req, res) {
    dataFile.readAsync("allItems", function(data) {
        res.send(data);
    });
});

app.get('/api/deleteAllItems', function(req, res) {
    dataFile.writeAsync("allItems", "", function(data) {
        res.send("All items deleted");
    });
});
