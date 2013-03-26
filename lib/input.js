var fs = require('fs');
var request = require('request');

exports.fetchWidget = function(url, success, error) {
    request(url, function (err, response, body) {
        if (!err && response.statusCode == 200) {
            success(JSON.parse(body));
        } else {
            error(response);
        }
    });
};


exports.fetch = function(appObj, success) {
    fs.readFile(appObj.config.inFile, 'utf8', function(err, data) {
        if (err) throw err;
        appObj.inputArray = JSON.parse(data);
        success();
    });
};