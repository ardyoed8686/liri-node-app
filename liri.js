// add code to read and set any environment variables with the dotenv package:
require("dotenv").config();

// require moment.js npm package
var moment = require("moment");

// add code to require axios package
var axios = require("axios");

// get node package for read and write of text files
var fs = require("fs");

// code required to import the `keys.js` file and store it in a variable
var keys = require("./keys.js");

// code require to import the spotify package
var Spotify = require('node-spotify-api');

// access your keys information like so
var spotify = new Spotify(keys.spotify);

// create variable to take in commands
var command = (process.argv[2]);
var userInput = (process.argv[3]);

switch (command) {
  case "concert-this":
    concert();
    break;
  
  case "spotify-this-song":
    song();
    break;
  
  case "movie-this":
    movie();
    break;
  
  case "do-what-it-says":
    doWhatItSays();
    break;
  }


  //  function for concert-this
function concert() {

  // setup axios for Bnds in Town API
  axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp").then(function(response){
    // console.log(response);
    // console.log(JSON.stringify(response.data));
    console.log("------------------");
    console.log(response.data[0].lineup[0]);
    // console.log venue & date (using moment.js)
    console.log(response.data[0].venue.name);
    var showTime = moment(response.data[0].datetime).format("LLLL")
    console.log(showTime);
    console.log("------------------");
  })
};



// setup Spotify call
function song() {
  if (userInput === undefined) {
    userInput = "The Sign";
  }
  spotify.search({ type: 'track', query: userInput }, function(err, data) {
    if (err) {
      console.log('Error occurred: ' + err);
      return
    }
    else {
      for (let i = 0; i < data.tracks.items.length; i++) {
        // console.log(data.tracks.items[1]);

        console.log("------------------");
        // * This will show the following information about the song in your terminal/bash window

        // * Artist(s)
        console.log(data.tracks.items[i].album.artists);
        // * The song's name
        console.log(data.tracks.items[i].name);
        // * A preview link of the song from Spotify
        console.log(data.tracks.items[i].preview_url);
        // * The album that the song is from
        console.log(data.tracks.items[i].album.name);
        console.log("------------------");
        
      }

    }
})
};





// create movie function
function movie() {
// setup OMDB axios get

var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";

// Request with axios to the OMDB API with the movie specified

axios.get(queryUrl).then(function(response) {

console.log("------------------");
console.log("Title: " + response.data.Title);
console.log("Year: " + response.data.Year);
console.log("IMDB Rating: " + response.data.Ratings[0].Value);
console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
console.log("Country: " + response.data.Country);
console.log("Language: " + response.data.Language);
console.log("Plot: " + response.data.Plot);
console.log("Actors: " + response.data.Actors);
console.log("------------------");

//  * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
if (userInput === 0) {

  console.log("If you haven't watched 'Mr. Nobody,' then you should: <http://www.imdb.com/title/tt0485947/>")
   let userInput = "Mr. Nobody";
  movie();
  }
})
};

// create function for do-what-it-says
function doWhatItSays() {
    // use fs to read file random.txt 
    fs.readFile("random.txt", "utf8", function(err, data) {
      if (err) {
        return console.log(err);
      }
      else {

      }
    })
};
