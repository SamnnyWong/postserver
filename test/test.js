// console.log('hello, node');
// var x = 1;
// var y = 2;
// console.log(x+y);


// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/advisorDemoTestDB', { useMongoClient: true });
console.log("setting connection on mongodbb...")

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('openUri', function() {
  // we're connected!
});
console.log("db connected...")


// defining a schema
var kittySchema = mongoose.Schema({
    name: String
});


kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}
// ##############################################
var samSchema = new mongoose.Schema({
  title:  {type: String, default: '书目001'} ,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});


samSchema.methods.titleauthor = function() {
	console.log(this.title.concat(' ', this.author));
}
// ##################################################

var Sam = mongoose.model("bruuhhh", samSchema)
Sam.author = "Alixxxx"
// Sam.titleauthor();


// use the schema
var Kitten = mongoose.model('Kitten', kittySchema);


var fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak();

// Kitten.speak();

// // inheritance from pythom???
// var silence = new Kitten({ name: 'Silence under kitten class' });
// console.log(silence.name); // 'Silence'

// var fluffy = new Kitten({ name: 'fluffy' });
// fluffy.speak(); // "Meow name is fluffy"


// fluffy.save(function (err, fluffy) {
//   if (err) return console.error(err);
//   fluffy.speak();
// });

// Kitten.find(function (err, kittens) {
//   if (err) return console.error(err);
//   console.log(kittens);
// })

// Kitten.find({ name: /^fluff/ }, callback);





