
song = "";
play1 = 1;



function preload() {
    song = loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {

if (play1 == 1) {
    song.play();
    document.getElementById("play_button").innerText = "Pause";
    play1 = 0;
}    
else {
    song.pause();
    document.getElementById("play_button").innerText = "Play";
    play1 = 1;
}
    
}