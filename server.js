// Requires HTTP node module
var http = require('http');

// define two separate ports
var PORTONE = 7000;
var PORTTWO = 7500;

// function to handle requests and send responses
function handleRequestOne(request,response){
	response.end("You're the best!!");
}

function handleRequestTwo(request,response){
	response.end("You smell like rotten cheese");
}

// creates a server
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORTONE, function(){
	console.log('Youre the best!!');
})

serverTwo.listen(PORTTWO, function(){
	console.log('You suck!')
});