/**
 * Created by sam on 2017-10-02.
 */


var mongoose = require('mongoose')
var models = require('models/schemas');
mongoose.connect('mongodb://localhost/advisorDemoTestDB', { useMongoClient: true });




var User = mongoose.model("User", models.User)  // this is the model
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

    var delayMillis = 10000; //1 second
    setTimeout(function() {
        //your code to be executed after 1 second
    }, delayMillis);




    console.log('finding object...')
    if (err) return console.error(err);
    console.log(sam.username);
})
