var _ = require('underscore');
exports.isValidString = function(string) {
	return (_.isString(string) && string !== "");
};
exports.isValidArray = function(array) {
	return (_.isArray(array) && array.length > 0);
};
