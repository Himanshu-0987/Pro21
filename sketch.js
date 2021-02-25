
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
ball.velocityY=5;
ball.velocityX=3;
}

function draw() { 
    background(rgb(169,169,169)); 
    edges=createEdgeSprites(); 
    ball.bounceOff(edges); 
if(box1.isTouching(ball) && ball.bounceOff(box1)){ 
        ball.shapeColor = rgb(255,128,0);
        music.play(); 
    } 
if(box2.isTouching(ball)){
        ball.shapeColor = rgb(0,0,255); 
        ball.velocityX = 0; ball.velocityY = 0; music.stop();
    }
if(box3.isTouching(ball) && ball.bounceOff(box3)){
        ball.shapeColor = rgb(255,255,0); 
    } 
if(box4.isTouching(ball) && ball.bounceOff(box4)){
        ball.shapeColor = rgb(0,100,0);
    }
    drawSprites(); 
        

}
