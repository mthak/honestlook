// this page makes an API call and retrieves the HonestLook Playlist
// this playlist includes 14 30-second commercials
// page returns a shuffled array of videos in the playlist

// Playlist ID: PLqOLwxNnzjQUjubWChKOFlMcYbdECFqLa
// API Key: AIzaSyDkLMqei5OyQREweo8aLmMsT0yC720mS7Q

const apiURL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLqOLwxNnzjQUjubWChKOFlMcYbdECFqLa&key=AIzaSyDkLMqei5OyQREweo8aLmMsT0yC720mS7Q'

function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

const getPlaylist = async () => {
  let response = await fetch(apiURL)
  let playlist = shuffle(response)
  console.log(playlist);
  console.log(typeof playlist);
};

getPlaylist();