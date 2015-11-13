var super_decode = require("./super_decoder.js");
var word_list = require("./word_list.js");
var forwards = [true, false];
var types = ["every","even","odd"];

function allTheOptions(option1,option2){
	var optionsTotal = [];
	for (var i = 0; i < forwards.length; i++){
		for (var j = 0; j < types.length; j++){
			optionsTotal.push([types[j],forwards[i]]);
		}
	}
	return optionsTotal
}

function decode_list(word_list){
	var allOptions = allTheOptions(forwards,types);
	for (var i = 0; i < word_list.length; i++ ){
		for (var j = 0; j < allOptions.length; j++){
			var toPrint = "Message" + (i+1) + " | Option" + allOptions[j];
			toPrint += " | " + super_decoder(word_list, allOptions[j][0], allOptions[j][1]);
			console.log(toPrint)
		}
	}
}


decode_list(word_list);