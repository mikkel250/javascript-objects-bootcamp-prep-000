var playlist = { Mozart: "Symphony No. 40" } ;

function updatePlaylist(playlist, artist, title) {
  playlist[artist] = title;
  return playlist;
}

function removeFromPlaylist(pl, artistName) {
  delete pl.artistName;
  return pl;
}
