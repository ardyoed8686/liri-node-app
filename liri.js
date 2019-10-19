// add code to read and set any environment variables with the dotenv package:
require("dotenv").config();

// add code to require axios package
var axios = require("axios");

// code required to import the `keys.js` file and store it in a variable
var keys = require("./keys.js");

// access your keys information like so
var spotify = new Spotify(keys.spotify);

// create variable to take in commands
var command = (process.argv[2]);
var artist = (process.argv[2]);


// setup axios for Bnds in Town API
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function(response){
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

// setup Spotify Axios call
