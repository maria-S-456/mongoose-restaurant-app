var express = require('express');
var mongoose = require('mongoose');
var app = express();

var db = mongoose.connect('mongodb://localhost/dataset'); //change "api" to "dataset" to use the restaurant database
var Cat = require('./models/catModel.js');
var rest = require('./models/restaurantModel.js');

var port = 3000;
app.get('/restaurants',function(req, res){
	rest.find(function(err, data){  //change "Cat" to "rest" to use restaurant data
		if(err){
			res.status(500).send(err);
		}
		else{
			res.json(data);
		}
	}).limit(10);
});



/*

app.get('/restaurant/:id', (req, res)=>{
	rest.find().limit(10).exec().then(restaurant =>{
		res.json({
			restaurant:restaurant.map(
				(restaurant)=> restaurant.apiRepr())
		});
	}).catch(err => {
		console.error(err);
		res.status(500).json({message: 'Internal server error'});
	});
});
*/
app.listen(port, function(){
	console.log('listening to port 3000');
})

