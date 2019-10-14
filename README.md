![Logo](IMG_6563.PNG)

# LIRI

### LIRI is your personal assistant for songs, concerts and movie information all in one app.

#

## HOW TO USE LIRI

| To search for:                            | Use Command line:                                  |
| ----------------------------------------- | -------------------------------------------------- |
| Songs and samples through Spotify         | node liri.js spotify-this-song _(SONG TITLE HERE)_ |
| Concerts near you through Bands In Town   | node liri.js concert-this _(ARTIST HERE)_          |
| Movies and information through OMDB       | node liri.js movie-this _(MOVIE HERE)_             |
| \*Do What I Say feature (Preset commands) | node liri.js do-what-it-says                       |

#

## What Each Command Should Do

#

### node liri.js concert-this _(ARTIST HERE)_

This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

- Name of the venue

- Venue location

- Date of the Event

#

### node liri.js spotify-this-song _(SONG TITLE HERE)_

This will search the Spotify API for song title information. We are also using a JS file to store and hide our keys for security purposes. This command will show the following information about the song in your terminal/bash window:

- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album that the song is from

#

### node liri.js movie-this _(MOVIE HERE)_

This will search the The IMDB API for specific movie information. This command will show the following information about the song in your terminal/bash window:

- Title of the movie.
- Year the movie came out.
- IMDB Rating of the movie.
- Rotten Tomatoes Rating of the movie.
- Country where the movie was produced.
- Language of the movie.
- Plot of the movie.
- Actors in the movie.

#

### node liri.js do-what-it-says

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

#

![screenshot place holder](IMG_6563.PN)
