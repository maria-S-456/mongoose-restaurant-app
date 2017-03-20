var mongoose = require('mongoose'),

 Schema = mongoose.Schema;
var catModel = new Schema({
 	name:{type:String},
	place:{type:String}  
});

module.exports = mongoose.model('Cat',catModel, 'category');