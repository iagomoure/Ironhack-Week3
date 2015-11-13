console.log("Hello,wordl!");

function eating (food){
	console.log('Eating some' + food);
}

console.log(eating);

function eat (food){
	if (food === 'pizza'){
		console.log('Yay Pizza');
	}else if (food === 'cookies'){
		console.log('Cookies are good too');
	}else if (food === 'brussel sprouts'){
		console.log('Ok, enjoy eating Brussel Sprouts...');
	}
}

eat("pizza");
eat("cookies");
eat("brussel sprouts");

var numbers = '80:70:90:100';
function averageColon(my_numbers){
	var arr_numbers = my_numbers.split(":");
  var sum = 0;
  arr_numbers.forEach(function(number){
    sum = sum + parseInt(number);
  });
	return sum/arr_numbers.length;
}
// function averageColon(my_numbers){
//  var arr_numbers = my_numbers.split(":"); 
//  var sum = arr_numbers.reduce(function(pre,tot){
//    return parseInt(pre) + parseInt(tot)
// });   
// var result = sum / nums_a.length;    
// return(result);

console.log(averageColon(numbers));
//=> 85

//Scoupes
var x = 5;

function three(){
  console.log(x);
}

function four(){
  x = 4
  console.log(x);
} 

four();
three();

function ticketBuilder(transport){
  var passengerNumber = 0
  return function(name){
    passengerNumber ++;
    console.log("Welcome," + name + ". Here is your ticket for the" + transport + "You are passenger" + passengerNumber + ".");
  }
}

var getPlaneTicket = ticketBuilder("plane");
var getTrainTicket = ticketBuilder("train")

getPlaneTicket("John Smith")
getPlaneTicket("David Murray")
getTrainTicket("Patty Bishop")



