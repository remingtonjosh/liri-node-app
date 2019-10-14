// "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

// axios installed // bands in town and  spotify.node.api

require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var fs = require("fs");
var moment = require("moment");
var action = process.argv[2];
var value = process.argv.slice(3).join(" ");

switch (action) {
  case "concert-this":
    concertThis();
    break;
  case "spotify-this-song":
    spotifyThisSong();
    break;
  case "movie-this":
    movieThis();
    break;
  case "do-what-it-says":
    doWhatItSays();
    break;
  default:
    break;
    console.log("this is not recognized");
}
function concertThis() {
  var artist = value;
  console.log(artist);
  axios
    .get(
      "https://rest.bandsintown.com/artists/" +
        artist +
        "/events?app_id=codingbootcamp"
    )
    .then(function(response) {
      console.log("--- Concert Information ---");
      console.log("Venue: " + response.data[0].venue.name);
      console.log("City: " + response.data[0].venue.city);
      console.log(
        "Date: " + moment(response.data[0].datetime).format("MM/DD/YYYY")
      );
      console.log(
        "https://rest.bandsintown.com/artists/" +
          artist +
          "/events?app_id=codingbootcamp"
      );
      // console.log(response.data);
    });
}
function movieThis() {
  var movie = value;
  axios
    .get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy")
    .then(function(response) {
      console.log("--- YOUR MOVIE INFO ---");
      console.log("Movie Title: " + response.data.Title);
      console.log("Movie Year Released: " + response.data.Year);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("Rotten Tomato Rating: " + response.data.Ratings[1].Value);
      console.log("Country Produced In: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Actors: " + response.data.Actors);
      console.log("Plot: " + response.data.Plot);
      console.log(
        "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy"
      );
    });
}

function spotifyThisSong() {
  // var track = value;
  // console.log(track);
  spotify.search({ type: "track", query: value }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }
    console.log("--- SPOTIFY TRACK FOUND ---");
    console.log("Artist: " + data.tracks.items[0].artists[0].name);
    console.log("Song: " + data.tracks.items[0].name);
    console.log("Album: " + data.tracks.items[0].album.name);
    console.log("--- SPOTIFY ALBUM SAMPLE ---");
    console.log(data.tracks.items[0].album.external_urls);
  });
}

function doWhatItSays() {
  var contents = fs.readFileSync("random.txt", "utf8");
  console.log(contents);
}
