function caesarCipher (message){
	
	var letters = message.split("");
	var new_letters = letters.map(function(char){
	 	return char.charCodeAt(0) - 3;
	});
	var value = new_letters.map(function(char){
		return String.fromCharCode(char);
	});

	return value.toString()
}

var encrypted = caesarCipher("brutus");
console.log(encrypted);
// => "_orqrp"



