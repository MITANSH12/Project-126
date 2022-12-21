leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";
scoreLeft = "";
scoreRight = "";
function preload() {
harryPotter = loadSound( 'music.mp3');
peterPan = loadSound( 'music2.mp3');
}
function setup () {
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300 , 300);
video.hide();
poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);
}
function draw() {

image(video , 0 , 0 , 300 , 300);
if (scoreLeft > 0.2) {
    noFill();
stroke("red");
circle(leftWristX, leftWristY, 20);
peterPan.stop();
if (harryPotter.isPlaying() == false ) {
harryPotter.play();
    document.getElementById("song").innerHTML = "Song Name: Harry Potter Song";
}
}
if (scoreRight > 0.2) {
   noFill();
stroke("red");
circle(rightWristX, rightWristY, 20);
harryPotter.stop();
if (peterPan.isPlaying() == false ) {
peterPan.play();
    document.getElementById("song").innerHTML = "Song Name: Peter Pan Song";
}
}

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
scoreLeft = results[0].pose.keypoints[9].score;
scoreRight = results[0].pose.keypoints[10].score;
console.log("left Wrist X:"  + leftWristX , "left Wrist Y" + leftWristY);
console.log("right Wrist X:"  + rightWristX , "right Wrist Y" + rightWristY);
    }
}