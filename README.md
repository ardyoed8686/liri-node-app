# LIRI NODE BOT

This bot will allow a user to query for a movie, concert events and songs by title. 
The app is broken into 3 main search areas. Concert event search using Bands In Town API, song search using Spotify and movie search using OMDB API.

### Operating Instructions
Commands
   * `concert-this` - will call the concert search function

   * `spotify-this-song` - will call the song search function

   * `movie-this` - will call the movie search function

   * `do-what-it-says` - will call a text update function

   Using `node liri.js movie-this '<movie name here>'` a movie search can be run. Substitue the desired command and the string to use the other commands. For example : 
   `node liri.js concert-this <artist/band name here>`
   `node liri.js spotify-this-song '<song name here>'`
   `node liri.js do-what-it-says`

   ### Screenshots

1. ![liri movie-this](https://github.com/ardyoed8686/liri-node-app/blob/master/images/Screen%20Shot%202019-10-22%20at%208.11.13%20PM.png)
   Console.log of `node liri.js movie-this '<movie name here>'`

2. ![liri movie-this blank](https://github.com/ardyoed8686/liri-node-app/blob/master/images/Screen%20Shot%202019-10-22%20at%208.11.50%20PM.png)
   Console.log of `node liri.js movie-this`

3. ![liri spotify-this-song](https://github.com/ardyoed8686/liri-node-app/blob/master/images/Screen%20Shot%202019-10-23%20at%207.06.06%20AM.png)
   Console.log of `node liri.js spotify-this-song '<song name here>'`

4. ![liri spotify-this-song blank](https://github.com/ardyoed8686/liri-node-app/blob/master/images/Screen%20Shot%202019-10-23%20at%207.06.53%20AM.png)
   Console.log of `node liri.js spotify-this-song`

5. ![liri concert-this](https://github.com/ardyoed8686/liri-node-app/blob/master/images/Screen%20Shot%202019-10-22%20at%208.16.10%20PM.png)
   Console.log of `node liri.js concert-this <artist/band name here>`


### Deployed Link
 - https://ardyoed8686.github.io/liri-node-app/


### Technologies Used
*  dotenv package:
*  moment.js npm package
*  axios package
*  fs package for read and write of text files
*  Node-Spotify-API package

Also, required to import the `keys.js` file and store it in a variable

Author: Romy Owens
   