let songs = [
  {
    name: "Arjan Vailly Ne",
    url: "./songs/Arjan Vailly Ne.mp3",
    image: "./images/animal.jpg",
  },
  {
    name: "Jale 2",
    url: "./songs/jale 2.mp3",
    image: "./images/jale.jpg",
  },
  {
    name: "Pehle Bhi Main",
    url: "./songs/Pehle Bhi Main.mp3",
    image: "./images/animal.jpg",
  },
  {
    name: "Ram Siya Ram",
    url: "./songs/Ram Siya Ram.mp3",
    image: "./images/ram.jpg",
  },
  {
    name: "12 Bande",
    url: "./songs/12 Bande .mp3",
    image: "./images/12-bande.webp",
  },
  {
    name: "El Jatt",
    url: "./songs/El jatt.mp3",
    image: "./images/el-jatt.webp",
  },
  {
    name: "Gun",
    url: "./songs/Gun Shot.mp3",
    image: "./images/gun.webp",
  },
  {
    name: "Gunday",
    url: "./songs/Gunday.mp3",
    image: "./images/gundaywebp.webp",
  },
  {
    name: "Maa",
    url: "./songs/Maa Boldi.mp3",
    image: "./images/maa.webp",
  },
  {
    name: "Takket",
    url: "./songs/Takkar.mp3",
    image: "./images/takkar.webp",
  },
  {
    name: "Unity",
    url: "./songs/Unity.mp3",
    image: "./images/unity.webp",
  },
];
let backward = document.querySelector(".backward");
let playb = document.querySelector(".play");
let forward = document.querySelector(".forward");
let con = document.querySelector(".container");
let selectedSong = 0;
let audio = new Audio();
function main() {
  let clutter = "";
  songs.forEach(function (obj, idx) {
    clutter += `<div class="box ${idx}">
                        <h3>${idx + 1}</h3>
                        <h3>${obj.name}</h3>
                        <h3>3:15</h3>
                    </div>`;
  });
  con.innerHTML = clutter;
  audio.src = songs[selectedSong].url;
  document.body.style.backgroundImage = `radial-gradient(circle, rgba(0,0,0,0) 20%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,1) 100%),
    url(${songs[selectedSong].image})`;
  document.querySelector(".bg").src = songs[selectedSong].image;
  if(selectedSong == 0){
    backward.style.opacity = .4;
    forward.style.opacity = 1;
  }
  else if(selectedSong > 0){ 
    backward.style.opacity = 1;
    if(selectedSong === songs.length-1){
        forward.style.opacity = .4;
      }
      else if( selectedSong < songs.length-1){
        forward.style.opacity = 1;
      }
  }
 

  
}
con.addEventListener("click", function (dets) {
  selectedSong = dets.target.classList[1];
  playb.innerHTML = '<i class="ri-pause-line"></i>';
  flag = 1;
  main();
  audio.play();
});
let flag = 0;
playb.addEventListener("click", function () {
  if (flag == 0) {
    playb.innerHTML = '<i class="ri-pause-line"></i>';
    flag = 1;
    audio.play();
  } else {
    playb.innerHTML = '<i class="ri-play-fill"></i>';
    flag = 0;
    audio.pause();
  }
});
forward.addEventListener("click", function () {
  if (selectedSong < songs.length -1) {
    selectedSong++;
    playb.innerHTML = '<i class="ri-pause-line"></i>';
    flag = 1;
    main();
    audio.play();
  } 
});
backward.addEventListener("click", function () {
  if (selectedSong > 0) {
    selectedSong--;
    playb.innerHTML = '<i class="ri-pause-line"></i>';
    flag = 1;
    main();
    audio.play();
  } 
});
main();
