const express = require("express");
const app = express();

const MongoClient = require("mongodb").MongoClient;


const url = "mongodb://localhost:27017";



function findDocuments(db, callback) {
  const collection= db.collection("tweets");


  collection.find({}).toArray((err, docs) => {
    if (err ) throw err;
    console.log("Found " + docs.length + " docs");

    callback(docs);
  });
}



function getTweets(callback) {

  MongoClient.connect(url, (err, client) => {
    if (err) throw err;


    console.log("Connected");
    const db = client.db("webdev_tweets");
    findDocuments(db, callback);

    client.close();
  });

}


app.use(express.static("public"));


app.get("/getTweets", (req, res) => {

  console.log(req.query);
  getTweets((ts) => res.send(ts) );
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));






















