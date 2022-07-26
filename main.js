song = ""
left_wrist_x= 0
right_wrist_x=0
left_wrist_y = 0
right_wrist_y= 0 
function preload(){
song = loadSound("music.mp3")
}
function setup(){
canvas = createCanvas(500,400)
canvas.center()
video = createCapture(VIDEO)
video.hide()
poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if(results.length  > 0){
        console.log(results) 
        right_wrist_x = results[0].pose.rightWrist.x
        left_wrist_x = results[0].pose.leftWrist.x
        right_wrist_y = results[0].pose.rightWrist.y
        left_wrist_y = results[0].pose.leftWrist.y
    }
}
function modelLoaded(){
    console.log("MODEL IS LOADED XDDDDDDDDDD")
}
function draw(){
image(video,0,0,500,400)
}
function yes(){
    song.play()
    song.rate(1);
    song.setVolume(1)
}