/* global $ */


function update(tweets) {
  $("#tweets").empty();
  tweets.forEach((t) => {
    let tweetDiv = $("<div>");

    tweetDiv.append($("<div class='name'>")
      .text(t.user.screen_name)
    );
    tweetDiv.append($("<img class='photo'>")
      .attr("src",t.user.profile_image_url)
      .attr("alt", t.user.screen_name + " photo" )
    );
    tweetDiv.append($("<div class='text'>")
      .text(t.text)
    );




    $("#tweets").append(tweetDiv);
  });

}

function updateFromServer(searchQuery) {
  $.getJSON("getTweets/?search="+searchQuery, (tweets, result) => {
    if (result !== "success") throw "Error loading tweets";

    update(tweets);

    // console.log(tweets);
  } );  

}

updateFromServer();

$("#search").on("keyup", () => {
  updateFromServer($("#search").val());
});

