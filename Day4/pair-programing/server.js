var fs = require('fs');
function fileActions1(err, file){ 
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file);

    for (var i = 0; i < episodes.length; i++){
    	console.log("Title: " + episodes[i].title + "  #: " + episodes[i].episode_number + "\r\n");
    	console.log("Description: " + episodes[i].description + "\r\n");
    	console.log("Rating: " + episodes[i].rating + "\r\n");
    }
}
fs.readFile("./GoTEpisodes.json", 'utf8', fileActions1);

var fs = require('fs');
function fileActions2(err, file){ 
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file);

    for (var i = 0; i < episodes.length; i++){
    	console.log("Title: " + episodes[i].title + "  #: " + episodes[i].episode_number + "\r\n");
    	console.log("Description: " + episodes[i].description + "\r\n");
    	console.log("Rating: " + episodes[i].rating + "  ************\r\n");
    }
}
fs.readFile("./GoTEpisodes.json", 'utf8', fileActions2);

function fileActions3(err, file){ 
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file);

    
    	
    	var newEpisodes = episodes["episode_number"].sort(function(a,b){
    		return a - b

    	})
    
    console.log(newEpisodes);

    
    	// console.log("Title: " + newEpisodes[i].title + "  #: " + newEpisodes[i].episode_number + "\r\n");
    	// console.log("Description: " + newEpisodes[i].description + "\r\n");
    	// console.log("Rating: " + newEpisodes[i].rating + "  ********* \r\n");
    
}

fs.readFile("./GoTEpisodes.json", 'utf8', fileActions3);

