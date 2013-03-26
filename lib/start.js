var flow = require('gowiththeflow');
var colors = require('colors');

// var input = require('input');

var application = function(config) {
    var appObj = {
        config: config,
        processedArray: []
    };

    flow().seq(function(next){
        // Get GitHub credentials. 
        require('./ghauth').fetch(appObj, next);
    }).seq(function(next){
        // Fetch input file
        require('./input').fetch(appObj, next);
    }).seq(function(next){
        // Process input data
        // Build new data structure
        require('./process').process(appObj, next);
    }).seq(function(next){
        // Save json
        require('./output').save(appObj, next);
    }).seq(function(next){
        console.log('\n');
        console.log('Success.'.bold.green);
    });

};

exports.start = function(config) {
    application(config);
};