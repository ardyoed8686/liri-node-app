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



// create function to evaluate userinput
var evaluate = function (command, userInput) {
  switch (command) {
    case "concert-this":
      concert(userInput);
      break;
    
    case "spotify-this-song":
      song(userInput);
      break;
    
    case "movie-this":
      movie(userInput);
      break;
    
    case "do-what-it-says":
      doWhatItSays(userInput);
      break;
    }
};





  //  function for concert-this
function concert(userInput) {
console.log("I am " + userInput);

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
function song(userInput) {
  //  * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
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
        console.log([i]);

        console.log("------------------");
        // * Artist(s)
        console.log("Artist(s): " + data.tracks.items[i].album.artists[0].name);
        // * The song's name
        console.log("Song name: " + data.tracks.items[i].name);
        // * A preview link of the song from Spotify
        console.log("Preview link: " + data.tracks.items[i].preview_url);
        // * The album that the song is from
        console.log("Album: " + data.tracks.items[i].album.name);
        console.log("------------------");
        
      }

    }
})
};

// create movie function
function movie(userInput) {
// setup OMDB axios get
if (userInput === undefined) {
  userInput = "Mr. Nobody";
}
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

})
};

// create function for do-what-it-says
function doWhatItSays(userInput) {
  
    // use fs to read file random.txt 
    fs.readFile("random.txt", "utf8", function(err, data) {
      if (err) {
        return console.log(err);
      }
      else {
        var output = data.split(",");
        for (var i = 0; i < output.length; i++) {
          console.log(output[i]);
        }
        // run spotify-this based on text in random.txt
        command = output[0];
        userInput = output[1];
        evaluate(command, userInput);

      }
    })
};

evaluate(process.argv[2], process.argv[3]);