function sleep (seconds, callback){
	setTimeout(callback, seconds*1000);
}


console.log("uno");
sleep(3,function(){
	console.log("dos");
})
console.log("tres");
console.log("cuatro");
sleep(3,function(){
	console.log("cinco");
})
console.log(6);
console.log(7);