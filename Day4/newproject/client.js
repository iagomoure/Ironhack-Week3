var simplecached = require('simplecached')

var options = {
	port: 11312,
	host: '127.0.0.1'
};

var client = new simplecached.Client(options, function(error){
	console.log('Connected');
});

client.set("name", "fernando", function(error,response){
	console.log(response);
	client.get("name",function(error,valor){
		console.log("el nombre guardado es: " + String(valor))
	})
})

