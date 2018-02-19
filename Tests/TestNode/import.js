const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

function insertTweets(tweets) {
    var db = new sqlite3.Database('tweets.sqlite3');
    db.serialize(function() {
        db.run("DROP TABLE IF EXISTS tweets");
        db.run("CREATE TABLE tweets (screen_name VARCHART, text TEXT, profile_image_url VARCHART)");
        var stmt = db.prepare("INSERT INTO tweets VALUES (?, ?, ?)");
        for (let t of tweets) {
            stmt.run(t.user.screen_name, t.user.profile_image_url, t.text);
        }
        stmt.finalize();
        console.log("Tweets inserted!");
    });
    db.close();

}

fs.readFile("data/web_dev_data.json", "utf8", (err, data) => {
    if(err) throw err;
    let tweets;
    try{
        tweets = JSON.parse(data);
    }catch (e){
        throw e;
    }
    insertTweets(tweets);
    console.log(tweets);
});