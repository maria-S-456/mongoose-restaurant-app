
var mongoose = require('mongoose'),

 Schema = mongoose.Schema;
var restaurantModel = new Schema({
	name:{type:String, required: true},
	borough:{type:String, required: true},
	cuisine:{type:String, required: true},
 	address:{
 		building:String,
 		coord:[String],
 		street: String,
 		zipcode:String
 	},
 	grades:[{
 		date: Date,
 		grade: String,
 		score: Number
 	}]
	
});

restaurantModel.virtual('addressString').get(function(){
	return `${this.address.building} ${this.address.street}`.trim()});

module.exports = mongoose.model('Restaurant',restaurantModel, 'restaurant');