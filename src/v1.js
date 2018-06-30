var dataFile = require('./data.js');
var app = {};

function v1api(mainApp) {
    app = mainApp;
};


function writeSuccess(data) {
    console.log(data);
}

exports.v1api = v1api;
