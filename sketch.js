var bananaImage,obstacleImage,backImage,obstacleGroup,background,score=0,player_running,ground;
var backg;
var fruitGroup,obstacleGroup;
var ground;
var banana,player;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  obstacleImage=loadImage("stone.png");
  bananaImage=loadImage("banana.png");
}

function setup() {
  createCanvas(400, 400);
  backg =createSprite(200,200,400,400);
  backg.velocityX=5;
  
  ground=createSprite(200,380,400,20);
  ground.visibility= false;
  
  obstacleGroup = new Group();
  fruitGroup = new Group();
  
  
  
  player=createSprite(100,370,20,20)
  player.addAnimation("running",player_running);
  player.scale=0.1;
  player.collide(ground);
  
 backg.addImage("jungle",backImage);
 
}

function draw() {
  background(220);
  backg.x=backg.width/2;
  
  
  if(keyDown("space")){
      player.velocityY = -15 ;
     }
 player.velocityY = player.velocityY +0.8;
 player.collide(ground);
  
  SpawnObstacles();
  bananaz();
  
 if(obstacleGroup.isTouching(player)){
   player.scale=0.08;
 }
  if(fruitGroup.isTouching(player)){
   score = score +2;
    fruitGroup.destroyEach();
  }
  switch(score){
    case 10:player.scale=0.12
      break;
    case 20:player.scale=0.14
      break;
    case 30:player.scale=0.16
      break;
    case 40:player.scale=0.18
      break;
      default:break;
  }
    
    
    
    
    
  drawSprites();
  stroke('white');
  textSize(20);
  fill('white');
  text('score:'+score,200,100);
}
function bananaz(){
if (frameCount % 60===0){
    var banana=createSprite(400,200,20,20);
    banana.velocityX= -5; 
    banana.addImage("banana",bananaImage);
    banana.scale=0.05;
    banana.lifetime=100;
    fruitGroup.add(banana);
  }
  
}
function SpawnObstacles(){
  if (frameCount % 60===0){
    var obstacle=createSprite(400,340,20,20);
    obstacle.velocityX= -5; 
    obstacle.addImage("stone.png",obstacleImage);
    obstacle.scale=0.2;
    obstacle.lifetime=100;
    obstacleGroup.add(obstacle);
  }
  
}
