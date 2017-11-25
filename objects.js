var playlist = { Mozart: "Symphony No. 40" } ;

function updatePlaylist(playlist, artist, title) {
  playlist[artist] = title;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete plalist.artistName;
  return playlist;
}
