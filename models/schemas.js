// user schema

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/advisorDemoTestDB', { useMongoClient: true });

var userSchema = new mongoose.Schema({
	loggin: Boolean, 
	username: String, 
	passhash: String, 
	email: String, 
	telephone: String

});

userSchema.methods.speak = function () {
	return this.username + this.loggin
}


var sellerSchema = new mongoose.Schema({});


var customerSchema = new mongoose.Schema ({});

var Request = new mongoose.Schema({
	customerid: String, 
	brand: String, 
	Descritipon: String, 
	budget: Number
});



var User = mongoose.model("User", userSchema)
var sam = new User({
	loggin: true, 
	username: 'admin', 
	passhash: 'qwerty', 
	email: 'sample@sample.com', 
	telephone: null
});


//testing

sam.save(function (err, sam) {
	console.log('saving instance');
	if (err) return console.error(err);
	console.log('save completed');
});

User.find(function (err, sam) {
	console.log('finding object...')
	if (err) return console.error(err);
	sam.username;
})


