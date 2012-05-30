/*
 * GET home page.
 */
var
	util = require('util'),
	twitter = require('twitter'),
	twit = new twitter(),
	_ = require("underscore");


function getHashtag(str) {
	str = str.match(/[#]+[A-Za-z0-9-_]+/g);
	return str;
};



exports.index = function (req, res) {

	twit.search('#impact OR #soccer OR #but', function(data) {
		var results = data.results,
			length = results.length,
			hashtag = new Array();

		_.each(results,function(value){
			var currentHashTag = getHashtag(value.text);
			console.log("===", currentHashTag);
		});

		res.render('index', data);
	});
};