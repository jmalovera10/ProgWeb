var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


function getFollowers() {
    MongoClient.connect('mongodb://localhost:27017/animals', function (err, db) {
        if (err) throw err

        db.collection('mammals').find().toArray(function (err, result) {
            if (err) throw err

            console.log(result)
        })
    });
}
