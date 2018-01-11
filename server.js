/**
 * Created by sam on 2017-10-08.
 */
// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);






// GET（SELECT）：从服务器取出资源（一项或多项）。
// POST（CREATE）：在服务器新建一个资源。
// PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。
// PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。
// DELETE（DELETE）：从服务器删除资源。

// https://api.example.com/v1/zoos
// https://api.example.com/v1/animals
// https://api.example.com/v1/employees

// GET /zoos：列出所有动物园
// POST /zoos：新建一个动物园
// GET /zoos/ID：获取某个指定动物园的信息
// PUT /zoos/ID：更新某个指定动物园的信息（提供该动物园的全部信息）
// PATCH /zoos/ID：更新某个指定动物园的信息（提供该动物园的部分信息）
// DELETE /zoos/ID：删除某个动物园
// GET /zoos/ID/animals：列出某个指定动物园的所有动物
// DELETE /zoos/ID/animals/ID：删除某个指定动物园的指定动物

// ?limit=10：指定返回记录的数量
// ?offset=10：指定返回记录的开始位置。
// ?page=2&per_page=100：指定第几页，以及每页的记录数。
// ?sortby=name&order=asc：指定返回结果按照哪个属性排序，以及排序顺序。
// ?animal_type_id=1：指定筛选条件

var crypto = require('crypto');

var app = express();

var checkPassword = function(user, password){
    var hash = crypto.createHmac('sha512', user.salt);
    hash.update(password);
    var value = hash.digest('base64');
    return (user.saltedHash === value);
};

var session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true,
        httpOnly: true,
        sameSite: true
    }
}));

// User Class
var User = function(user){
    var salt = crypto.randomBytes(16).toString('base64');
    var hash = crypto.createHmac('sha512', salt);
    hash.update(user.password);
    this.username = user.username;
    this.salt = salt;
    this.saltedHash = hash.digest('base64');
    // ...
};

// Registration
app.put('/api/users/', function (req, res, next) {
    var data = new User(req.body);
    users.findOne({username: req.body.username}, function(err, user){
        if (err) return res.status(500).end(err);
        if (user) return res.status(409).end("Username " + req.body.username + " already exists");
        users.insert(data, function (err, user) {
            if (err) return res.status(500).end(err);
            return res.json(user);
        });
    });
});

// Signing out
app.delete('/api/session/', function (req, res, next) {
    req.session.destroy(function(err) {
        if (err) return res.status(500).end(err);
        return res.end();
    });
});

// Signing in
app.post('/api/session/', function (req, res, next) {
    req.checkBody('username', 'Invalid username').notEmpty();
    req.checkBody('password', 'Invalid password').notEmpty();

    if (!req.body.username || ! req.body.password) return res.status(400).send("Bad Request");
    users.findOne({username: req.body.username}, function(err, user){
        if (err) return res.status(500).end(err);
        if (!user || !checkPassword(user, req.body.password)) return res.status(401).end("Unauthorized");
        req.session.user = user;
        res.cookie('username', user.username,
            {
                secure: true,
                httpOnly: true,
                sameSite: true
            });
        return res.json(user);
    });
});

// implement/ put/get

// curl -X PUT http://localhost:3000/api/users -H 'Content-Type: application/json;charset=UTF-8' {'username':'alix'}
//
