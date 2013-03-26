var program = require('commander');
var flow = require('gowiththeflow');
var colors = require('colors');

exports.fetch = function(appObj, success) {

	success();

	// Todo: Add Github intigration.

	// console.log('\n');
	// console.log('To collect GitHub stats we need you to authenticate so we can exceed API rate-limiting.'.bold.green);
	// console.log('This information is not stored.'.bold.green);
	// console.log('\n');

 //    flow().seq(function(next){
	// 	program.prompt('GitHub username: ', function(ghUser){
	// 		if (ghUser === "") {
	// 			console.log('\n');
	// 			console.log('Username is required.'.bold.red);
	// 			process.exit();
	// 		}
	// 		appObj.ghUser = ghUser;
	// 		next();
	// 	});
 //    }).seq(function(next){
	// 	program.password('GitHub password: ', function(ghPass){
	// 		if (ghPass === "") {
	// 			console.log('\n');
	// 			console.log('Password is required.'.bold.red);
	// 			process.exit();
	// 		}
	// 		appObj.ghPass = ghPass;
	// 		next();
	// 	});
	// }).seq(function(next){
	// 	success();
	// });
};

