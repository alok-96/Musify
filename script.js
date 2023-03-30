const songs = [
  {
    songName: "Believer",
    singer: "Imagine Dragons",
    filePath: "../music/1.mp3",
  },
  {
    songName: "Chann Sitare",
    singer: "Ammy Virk",
    filePath: "../music/2.mp3",
  },
  {
    songName: "Infinity",
    singer: "Jaymes Young",
    filePath: "../music/3.mp3",
  },
  {
    songName: "Let Me Down Slowly",
    singer: "Alec Benjamin",
    filePath: "../music/4.mp3",
  },
  {
    songName: "Love Your Voice",
    singer: "Jony",
    filePath: "../music/5.mp3",
  },
  {
    songName: "Muskurana Tera",
    singer: "Sajj Bhatt",
    filePath: "../music/6.mp3",
  },
  {
    songName: "Safari",
    singer: "Serena",
    filePath: "../music/7.mp3",
  },
];


let songIndex = 0;
let audioElement = new Audio("../music/1.mp3");
const playBtn = document.getElementById("play");
const progressBar = document.getElementById("progress-bar");
const previous = document.getElementById('backward')
const next = document.getElementById('forward')

//Handling Play and pause events
playBtn.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime === 0) {
    audioElement.play();
    playBtn.src = "assets/asset-7.svg";
  } else {
    audioElement.pause();
    playBtn.src = "assets/asset-4.svg";
  }
});


//Updating the progress Bar
audioElement.addEventListener('timeupdate', ()=>{
  var progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  console.log(progress);
  progressBar.value = progress;
})

progressBar.addEventListener('change', () =>{
  audioElement.currentTime  = (progressBar.value*audioElement.duration)/100;
})


//Handling previous and next Btn
console.log(audioElement);
backward.addEventListener('click', () =>{
  if(songIndex === 0)
      songIndex = 7;
  else
    songIndex -= 1;
})
