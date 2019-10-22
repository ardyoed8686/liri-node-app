// add code to read and set any environment variables with the dotenv package:
require("dotenv").config();

// add code to require axios package
var axios = require("axios");

// code required to import the `keys.js` file and store it in a variable
// var keys = require("./keys.js");

// get node package for read and write of text files
var fs = require("fs");

// access your keys information like so
// var spotify = new Spotify(keys.spotify);

// create variable to take in commands
var command = (process.argv[2]);
var userInput = (process.argv[3]);

switch (command) {
  case "concert-this":
    concert();
    break;
  
  // case "spotify-this-song":
  //   spotify();
  //   break;
  
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
    console.log(JSON.stringify(response.data));
    console.log(response.data[0].lineup[0]);
    console.log(response.data[0].venue.name);
  // console.log venue & date (using moment.js)
   console.log(response.data[0].datetime);
  })
};



// setup Spotify call
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//     spotify.search({type: 'track', query: 'The Sign'},)
//   }
 
// console.log(data); 
// console.log(data.name)
// // console log song name, preview link, album


// });



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
if (userInput === "") {
  userInput = "Mr. Nobody";
  movie();
  }
})
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
