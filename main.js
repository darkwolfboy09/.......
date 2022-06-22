nose_x  = 0;
nose_y = 0;

nose_image = " ";


function preload()
{
    nose_image = loadImage("m.png")
    
    
}
//preload, setup, draw 
function setup()
{
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('poseNet Is Initialized');
}

function draw ()
{
    image(video, 0, 0, 400, 400);

    fill("blue");
    //stroke("white");
    //circle(nose_x, nose_y, 20);

    image(nose_image, nose_x, nose_y, 30, 30);
}

function click()
{
    save("img.png")
}

function gotPoses(results)
{
    if(results.length > 0 ){

        console.log(results);
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        
    }
   
}