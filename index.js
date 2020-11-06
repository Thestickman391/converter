const express = require('express')
const cors = require('cors');

const app = express();
var root = __dirname

app.listen(3000, () =>{
  console.log('Server is working at port: 3000');
});

app.use(cors());
app.use(express.static(root + "/public"));

const ytmp3 = require('./lib/ytAudio')
const ytmp4 = require('./lib/ytVideo')
const ytSearch = require('./lib/ytSearch')
const ytPlaylist = require('./lib/ytPlaylist')
const soundcloud = require('./lib/soundcloud')
const spotify = require('./lib/spotify')

app.use(ytmp3)
app.use(ytmp4)
app.use(ytSearch)
app.use(soundcloud)
app.use(spotify)
app.use(ytPlaylist)
