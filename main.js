difference=0;
leftwristX=0;
rightwristX=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#969A97');
    textSize(difference);
    document.getElementById("square_side").innerHTML = "Width And Height of a Text will be = " + difference +"px"
    fill('#F90093');
    text('CeMoL :P', 50, 200);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        difference = floor(leftWristX - rightwristX);

        console.log("leftwristX = " + leftwristX + "rightwristX = " + rightwristX + " difference = " +difference);
        
    }
}