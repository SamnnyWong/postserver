// user schema

var mongoose = require('mongoose')

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

var RequestSchema = new mongoose.Schema({
	customerid: String,
	brand: String,
	Descritipon: String,
	budget: Number
});




module.exports = {
    User: userSchema,
    Seller: sellerSchema,
    Customer: customerSchema,
    Request: RequestSchema,
};

//
// // lastMod.js
// module.exports = exports = function lastModifiedPlugin (schema, options) {
//     schema.add({ lastMod: Date })
//
//     schema.pre('save', function (next) {
//         this.lastMod = new Date
//         next()
//     })
//
//     if (options && options.index) {
//         schema.path('lastMod').index(options.index)
//     }
// }
//
// // game-schema.js
// var lastMod = require('./lastMod');
// var Game = new Schema({ ... });
// Game.plugin(lastMod, { index: true });
//
// // player-schema.js
// var lastMod = require('./lastMod');
// var Player = new Schema({ ... });
// Player.plugin(lastMod);


// global plugins
// var mongoose = require('mongoose');
// mongoose.plugin(require('./lastMod'));
//
// var gameSchema = new Schema({ ... });
// var playerSchema = new Schema({ ... });
// // `lastModifiedPlugin` gets attached to both schemas
// var Game = mongoose.model('Game', gameSchema);
// var Player = mongoose.model('Player', playerSchema);
