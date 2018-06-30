var fs = require('fs');

exports.readAsync = function(fileName, readSuccess) {
    fs.readFile('data/' + fileName + '.json', 'utf-8', function(error, data){
        if (error) {
            console.log("No file exists :: " + error);
            data = JSON.stringify([]);
        }
        console.log(data);
        readSuccess(JSON.parse(data));
    });
}

exports.writeAsync = function(fileName, data, writeSuccess) {
    var formatedData = JSON.stringify(data, null, '\t')
    fs.writeFile('data/' + fileName + '.json', formatedData, 'utf-8', function (error) {
        if (error) {
            throw error;
        }
        console.log('filelistAsync complete');
        writeSuccess(data);
    });
}
