var song_A = "Alxndar_Rybak.mp3";
var song_B = "Bad_Boy.mp3";
var song_C = "mi_Gente.mp3";
var song_D = "sigmaRule.mp3";
var song_E = "Spectre.mp3"
var name1 = "Alxandar_Rybak";
var name2 = "Bad_Boy";
var name3 = "mi_Gente";
var name4 = "sigmaRule";
var name5 = "Spectre";
var artist1 = "Alexander Rybak";
var artist2 = "Tungevaag and Raaban";
var artist3 = "J Balvin and Willy William";
var artist4 = "DIOR";
var artist5 = "Alan Walker";
var music = "";
var scoreLeftWrist = 0;
var scoreRightWrist = 0;
var leftWrist_x = 0;
var leftWrist_y = 0;
var rightWrist_x = 0;
var rightWrist_y = 0;

function preload(){
    music = loadSound("mi_Gente.mp3");
    song_A = loadSound("sigmaRule.mp3");
    song_B = loadSound("Spectre.mp3");
    song_C = loadSound("Alxandar_Rybak.mp3");
    song_D = loadSound("Bad_Boy.mp3");
    song_E = loadSound("mi_Gente.mp3");        
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    model = ml5.poseNet(video, modelLoaded);
    model.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);





    
    fill("117, 7, 235");
    circle(leftWrist_x, leftWrist_y, 20);

    if(leftWrist_y > 0   && leftWrist_y < 100){
        song_A.play();
        document.getElementById("artist").innerHTML = " Name of the artist is  " + artist1;
        document.getElementById("song").innerHTML = " Song is  " + name1;
    }

    else if(leftWrist_y > 100 && leftWrist_y < 200){
        song_A.stop();
        song_C.stop();
        song_D.stop();
        song_E.stop();
        song_B.play();
        document.getElementById("artist").innerHTML = " Name of the artist is  " + artist2;
        document.getElementById("song").innerHTML = " Song is  " + name2;
    }
    
    else if(leftWrist_y > 200 && leftWrist_y < 300){
        song_A.stop();
        song_B.stop();
        song_D.stop();
        song_E.stop();
       song_C.play();
       document.getElementById("artist").innerHTML = " Name of the artist is  " + artist3;
       document.getElementById("song").innerHTML = " Song is  " + name3;
    }

    else if(leftWrist_y > 300 && leftWrist_y < 400){
        song_A.stop();
        song_C.stop();
        song_D.stop();
        song_E.stop();
        song_D.play();
        document.getElementById("artist").innerHTML = " Name of the artist is  " + artist4;
        document.getElementById("song").innerHTML = " Song is " + name4
    }

    else if(leftWrist_y > 400 && leftWrist_y < 500){
        song_A.stop();
        song_C.stop();
        song_D.stop();
        song_B.stop();
        song_E.play();
        document.getElementById("artist").innerHTML = " Name of the artist is  " + artist5;
        document.getElementById("song").innerHTML = " Song is " + name5;
    } 
    
    
 
        fill("255, 0, 0");
        circle(rightWrist_x, rightWrist_y, 20)
        if(rightWrist_y > 0 && rightWrist_y < 100){
            song_A.stop();
            song_C.stop();
            song_D.stop();
            song_E.stop();
            song_A.play();
            document.getElementById("artist").innerHTML = " Name of the artist is  " + artist1;
            document.getElementById("song").innerHTML = " Song is  " + name1;
        }
    
        else if(rightWrist_y > 100 && rightWrist_y < 200){
            song_A.stop();
            song_C.stop();
            song_D.stop();
            song_E.stop();
            song_B.play();
            document.getElementById("artist").innerHTML = " Name of the artist is  " + artist2;
            document.getElementById("song").innerHTML = " Song is  " + name2;
        }
    
        else if(rightWrist_y > 200 && rightWrist_y < 300){
            song_A.stop();
            song_B.stop();
            song_D.stop();
            song_E.stop();
            song_C.play();
            document.getElementById("artist").innerHTML = " Name of the artist is  " + artist3;
            document.getElementById("song").innerHTML = " Song is  " + name3;
        }
    
        else if(rightWrist_y > 300 && rightWrist_y < 400){
            song_D.play();
            document.getElementById("artist").innerHTML = " Name of the artist is  " + artist4;
            document.getElementById("song").innerHTML = " Song is  " + name4;
    
        }
    
        if(rightWrist_y > 400 && rightWrist_y < 500){
            song_A.stop();
            song_C.stop();
            song_D.stop();
            song_B.stop();
            song_E.play();
            document.getElementById("artist").innerHTML = " Name of the artist is  " + artist5;
            document.getElementById("song").innerHTML = " Song is  " + name5;
        }
       
    }


function modelLoaded(){
    console.log("Model is successfully loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9];
        scoreRightWrist = results[0].pose.keypoints[10];
        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("rightWrsist_x = " + rightWrist_x);
        console.log("rightWrist_y = " + rightWrist_y);
        console.log("leftWrist_x = " + leftWrist_x);
        console.log("leftWrist_y = " + leftWrist_y);   
    }

}

function play(){
    music.play();
    music.rate(1);
    music.setVolume(0.1);
    console.log("music");
}
