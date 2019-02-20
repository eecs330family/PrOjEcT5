// Create your global variables below:
var tracklist = ["All We Got", "No Problem", "Summer Friends", "D.R.A.M. Sings Special", "Blessings", "Same Drugs", "Mixtape", "Angels", "Juke Jam", "All Night"];
var song_name;
var volLevels = [];
var playing;
var timer;
var current_volume;


function init() {
  var i;
  for (i=0; i<6; i++) {
    volLevels.push(document.getElementById("vl"+i));
  }
  volLevels[0].style.backgroundColor = "#cc0000";
  volLevels[1].style.backgroundColor = "#cc0000";
  volLevels[2].style.backgroundColor = "#cc0000";
  current_volume = 3;
  playing = 0; //default: not playing
  song_name = 0; //default: display first song name
};

function volUp() {
  if (current_volume < 6) {
    volLevels[current_volume].style.backgroundColor = "#cc0000";
    current_volume++;
  }
  else {
    current_volume = 5;
  }
}

function volDown() {
  if (current_volume >= 0) {
    volLevels[current_volume].style.backgroundColor = "#ffffff";
    current_volume--;
  }
  else {
    current_volume = 0;
  }
}

function switchPlay() {
  if (playing == 0) {
   document.getElementById("play-switch").innerHTML = "pause";
    playing = 1;
    //move display bar right and increment display time every second, until the song ends
    timer = setInterval(function() {
      if(document.getElementById("play-range").value < 180) {
        document.getElementById("play-range").value++;
        document.getElementById("time-elapsed").innerHTML = secondsToMs(document.getElementById("play-range").value);
      }
      else {
        nextSong();
      }
    },1000);
    timer;
  }
  else {
    document.getElementById("play-switch").innerHTML = "play_arrow";
    playing = 0;
    clearInterval(timer);
  }
}


function nextSong() {
  if (song_name<9) {
    document.getElementById("current_song").innerHTML = tracklist[song_name+1];
    song_name++;
  }
  else {
    document.getElementById("current_song").innerHTML = tracklist[0];
    song_name = 0;
  }
  document.getElementById("play-range").value = 0;
  document.getElementById("time-elapsed").innerHTML = "0:00";
}

function prevSong() {
  if (song_name>0) {
    document.getElementById("current_song").innerHTML = tracklist[song_name-1];
    song_name--;
  }
  else {
    document.getElementById("current_song").innerHTML = tracklist[9];
    song_name = 9;
  }
  document.getElementById("play-range").value = 0;
  document.getElementById("time-elapsed").innerHTML = "0:00";
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();
