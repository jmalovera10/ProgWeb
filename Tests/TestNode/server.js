const express = require("express");

const app = express();
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('tweets.sqlite3');



app.get("/", (req, res) => {
    console.log("Get /");
    //res.send("Hola bonito!");
    db = new sqlite3.Database('tweets.sqlite3');
    var tw = db.all("SELECT * from tweets", (err, tweets) => {
        if (err) throw err;

        console.log(tweets);
        //db.close();
        res.send(tweets);
    })

});

app.get("/about", (req, res) => {
    console.log("Get /");
    res.send("By John");
});
app.listen(8080, () => {
    console.log("Listening on :8080")
});