function openMusic() {
  document.getElementById("musicBox").style.display = "block";
}

function playMusic(song) {
  
  let player = document.getElementById("player");
  
  player.src = song;
  player.play();
  
  document.getElementById("nowPlaying").innerHTML =
    "🎵 Now Playing: " + song;
}