const lowRancidSongs = ["assets/audio/low1.mp3", "assets/audio/low2.mp3"];
const highRancidSongs = ["assets/audio/high1.mp3", "assets/audio/high2.mp3"];

let rancidLevel = "low"; // 'low' or 'full'
let currentTrackIndex = 0;
const audioPlayer = document.getElementById("audio-player");
const statusText = document.getElementById("status-text");

function getCurrentPool() {
  return rancidLevel === "low" ? lowRancidSongs : highRancidSongs;
}

function playCurrentTrack() {
  const pool = getCurrentPool();
  const track = pool[currentTrackIndex % 2];
  audioPlayer.src = track;
  audioPlayer.play();
  statusText.textContent = "Now Playing: " + track.split('/').pop();
}

function skipTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % 2;
  playCurrentTrack();
}

function setRancidLevel(level) {
  rancidLevel = level;
  currentTrackIndex = 0;
  playCurrentTrack();
}

document.getElementById("rancid-slider").addEventListener("input", (e) => {
  setRancidLevel(e.target.value === "1" ? "full" : "low");
});

document.getElementById("skip-button").addEventListener("click", skipTrack);

window.onload = playCurrentTrack;
