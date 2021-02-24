
var canvas;
var music;
var ball;
var box1,box2,box3,box4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){

canvas = createCanvas(800,600);
music.loop()
ball= createSprite(random(20,750),20,20,20);
ball.shapeColor="black";
    //create 4 different surfaces
box1=createSprite(105,570,175,30);
box1.shapeColor="orange";
box2=createSprite(295,570,175,30);
box2.shapeColor="blue";
box3=createSprite(495,570,175,30);
box3.shapeColor="yellow";
box4=createSprite(695,570,175,30);
box4.shapeColor="green";

ball.velocityY=3;

}

function draw() {
    background("lightgray");
if(ball.isTouching(box1)){
ball.shapeColor="orange";
ball.velocityY=0;
music.play();
}
if(ball.isTouching(box2)){
    ball.shapeColor="blue";
    ball.velocityY=0;
    }
if(ball.isTouching(box3)){
    ball.shapeColor="yellow";
    ball.velocityY=0;
    }
if(ball.isTouching(box4)){
    ball.shapeColor="green";
    ball.velocityY=0;
    }


drawSprites();

    //add condition to check if box touching surface and make it box
}
