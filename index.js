var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = new express();
var port = process.env.PORT || 3000;

var allValues = [];



//app.use('/', express.static(__dirname));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.listen(port, function(err) {
    if (typeof(err) == "undefined") {
        console.log('Application is running on : ' + port + ' port');
    }
});

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: __dirname });
});

app.get('/api/getItems', function(req, res) {
    res.send(JSON.stringify(users));
});

app.post('/api/addIndividualItem', function(req, res) {
  console.log(req.body);
    allValues.push({
        date : req.body.date,
        particular : req.body.particular,
        remark : req.body.remark,
        value : req.body.value
  });

    res.send(allValues);
});

function readWriteAsync() {
  fs.readFile('data/allValues.json', 'utf-8', function(err, data){
    if (err) throw err;

    console.log(data);
    fs.writeFile('filelistAsync.txt', "newValue", 'utf-8', function (err) {
      if (err) throw err;
      console.log('filelistAsync complete');
    });
  });
}

readWriteAsync();
