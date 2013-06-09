'use strict';

var express = require('express');


var app = module.exports = express();
app.configure(function(){
	app.use(express.static(__dirname));
})

app.get('*', function(req, res){
	res.sendfile('index.html');
});

app.listen(3000, function(){
	console.log("Express server listening on port 3000");
});