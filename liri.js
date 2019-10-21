// add code to read and set any environment variables with the dotenv package:
require("dotenv").config();

// add code to require axios package
var axios = require("axios");

// code required to import the `keys.js` file and store it in a variable
var keys = require("./keys.js");

// get node package for read and write of text files
var fs = require("fs");

// access your keys information like so
var spotify = new Spotify(keys.spotify);

// create variable to take in commands
var command = (process.argv[2]);
var userInput = (process.argv[3]);

switch (action) {
  case "concert-this":
    concert();
    break;
  
  case "spotify-this-song":
    spotify();
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
    console.log("Here's what we got " + response.data);
    console.log(dat.name);
  // console.log venue & date (using moment.js)
  })
};



// setup Spotify call
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
    spotify.search({type: 'track', query: 'The Sign'},)
  }
 
console.log(data); 
console.log(data.name)
// console log song name, preview link, album


});



// create movie function
function movie() {
// setup OMDB axios get

var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";

// Request with axios to the OMDB API with the movie specified

axios.get(queryUrl).then(function(response) {
console.log(queryUrl);
console.log("Your movie data" + response.data);
console.log(response.data.Year);
// console log 
// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.
});
  //  * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
};

// create function for do-what-it-says
function doWhatItSays() {
    // use fs to read 
    fs.readFile("random.txt", "utf8", function(err, data) {
      if (err) {
        return console.log(err);
      }
    })
};


 
