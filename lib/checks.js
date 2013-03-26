var _ = require('underscore');
var colors = require('colors');
var utilities = require('./utilities');

exports.widgetChecks = function(obj, index) {
    if (!utilities.isValidString(obj.type)) {
        console.log(('"type" is missing from the object at index ' + obj.name + ' in app.js').bold.red);
        return false;
    }
    if (!utilities.isValidString(obj.url)) {
        console.log(('"url" is missing from the object at index ' + obj.name + ' in app.js').bold.red);
        return false;
    }
    if (!utilities.isValidString(obj.json)) {
        console.log(('"json" is missing from the object at index ' + obj.name + ' in app.js').bold.red);
        return false;
    }
    return true;
};

exports.standardChecks = function(obj, index) {
    if (!utilities.isValidString(obj.type)) {
        console.log(('"type" is missing from the object at index ' + obj.name + ' in app.js').bold.red);
        return false;
    }
    if (!utilities.isValidString(obj.name)) {
        console.log(('"name" is missing from the object at index ' + obj.name + ' in app.js').bold.red);
        return false;
    }
    if (!utilities.isValidArray(obj.tags)) {
        console.log(('"tags" is missing from the object at index ' + obj.name + ' in app.js').bold.red);
        return false;
    }
    if (!utilities.isValidString(obj.description)) {
        obj.description = "Another awesome piece of Alloy love (it had no description).";
        console.log(('Warning: "description" is missing from the object at index ' + obj.name + ' in app.js').bold.red);
    }
    if (!utilities.isValidString(obj.url)) {
        console.log(('"url" is missing from the object at index ' + obj.name + ' in app.js').bold.red);
        return false;
    }

    return true;
};