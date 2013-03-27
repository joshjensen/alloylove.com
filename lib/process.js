var _ = require('underscore');
var _s = require('underscore.string');
var flow = require('gowiththeflow');
var colors = require('colors');
var checks = require('./checks');
var input = require('./input');
var utilities = require('./utilities');

var types = {
    widget: function(item, index, appObj, success) {
        var widgetData = {};

        flow().seq(function(next){
            if (!checks.widgetChecks(item, index)) {
                console.log('\n');
                console.log('Your data.json file is showing some errors.'.bold.red);
                process.exit();
            } else {
                next();
            }
        }).seq(function(next){
            input.fetchWidget(item.json, function(data) {
                widgetData = data;
                next();
            }, function() {
                console.log('\n');
                console.log(('There was an error fetching the widget data for ' + item.json + '.').bold.red);
                process.exit();
            });
        }).seq(function(next){
            widgetData.tags = widgetData.tags.split(",");
            widgetData.name = (utilities.isValidString(widgetData.name)) ? widgetData.name : widgetData.id;
            var splitName = (widgetData.name.indexOf('.') === -1) ? widgetData.name : widgetData.name.split(".");
            widgetData.name = (_.isArray(splitName)) ? _s.humanize(splitName[splitName.length - 1]) : _s.humanize(splitName);
            item = _.extend(widgetData, item);
            widgetData.tags.push(widgetData.type);
            next();
        }).seq(function(next){
            if (!checks.standardChecks(item, index)) {
                console.log('\n');
                console.log('Your data.json file is showing some errors.'.bold.red);
                process.exit();
            } else {
                next();
            }
        }).seq(function(next){
            appObj.processedArray.push(item);
            success();
        });
    },
    adapter: function(item, index, appObj, success) {
        if (!checks.standardChecks(item, index)) {
            console.log('\n');
            console.log('Your data.json file is showing some errors.'.bold.red);
            process.exit();
        } else {
            appObj.processedArray.push(item);
            success();
        }
    },
    application: function(item, index, appObj, success) {
        if (!checks.standardChecks(item, index)) {
            console.log('\n');
            console.log('Your data.json file is showing some errors.'.bold.red);
            process.exit();
        } else {
            appObj.processedArray.push(item);
            success();
        }
    },
    tutorial: function(item, index, appObj, success) {
        if (!checks.standardChecks(item, index)) {
            console.log('\n');
            console.log('Your data.json file is showing some errors.'.bold.red);
            process.exit();
        } else {
            appObj.processedArray.push(item);
            success();
        }
    }
};

exports.process = function(appObj, success) {
    var runEach = function(index) {
        var item = appObj.inputArray[index];

        if (item === undefined) {
            success();
            return;
        }

        if (types[item.type] === undefined) {
            console.log('\n');
            console.log('Type is not supported.'.bold.red);
            console.log('We currently list widets, apps, and tutorials. If your listing fall outside of those categories please contact me josh@roar.pro.'.bold.red);
            process.exit();
        }

        types[item.type](item, index, appObj, function() {
            runEach(index + 1);
        });
    };

    runEach(0);
};