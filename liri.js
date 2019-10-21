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
  case "total":
    total();
    break;
  
  case "deposit":
    deposit();
    break;
  
  case "withdraw":
    withdraw();
    break;
  
  case "lotto":
    lotto();
    break;
  }



  //  function for concert-this
function concert() {
  axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp").then(function(response){
    
    console.log("Here's what we got " + response.data);
})
  
};

// setup axios for Bnds in Town API
axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp").then(function(response){
    console.log("Here's what we got " + response.data);
})

.catch(function (error) {
    if (error.response) {
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log("Error", error.message);
    }
    console.log(error.config);
});

// setup Spotify call
spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });



// setup OMDB axios get

var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";

// Request with axios to the OMDB API with the movie specified

axios.get(queryUrl).then(function(response) {
console.log(queryUrl);
console.log(response.data.Year);

});

// function for concert-this