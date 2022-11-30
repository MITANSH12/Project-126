leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";
function preload() {
harryPotter = loadSound( 'music.mp3');
peterPan = loadSound( 'music2.mp3');
}
function setup () {
canvas = createCanvas(300 , 300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);
}
function draw() {
background("gainsboro");
image (video , 0 , 0 , 300 , 300);
}
function modelLoaded () {
    console.log('poseNet is initialized');
}
function gotPoses(results) {
    if (results.length > 0) {
console.log(results);
leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("left Wrist X:"  + leftWristX , "left Wrist Y" + leftWristY);
console.log("right Wrist X:"  + rightWristX , "right Wrist Y" + rightWristY);
    }
}