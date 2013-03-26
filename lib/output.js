var fs = require('fs');

exports.save = function(appObj, success) {
    fs.writeFile(appObj.config.outFile, 'var MicroJS=' + JSON.stringify(appObj.processedArray) + ';', function (err) {
        if (err) throw err;
        success();
    });
};