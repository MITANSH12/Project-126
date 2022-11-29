function preload() {
harryPotter = loadSound( music.mp3);
peterPan = loadSound( music2.mp3);
}
function setup () {
canvas = createCanvas(300 , 300);
canvas.center();
video = createCapture(VIDEO);
video.hide();

}
function draw() {
background("gainsboro");
image (video , 0 , 0 , 300 , 300);
}