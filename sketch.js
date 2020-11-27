
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime;
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  monkey = createSprite(100,340,20,50);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale=0.1;
  
 ground = createSprite(400,350,800,10);
 ground.velocityX=-4;
 ground.x=ground.width/2;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  var survivalTime=0;
}


function draw() {
  background("white");

    monkey.collide(ground);

  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
   if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -13;
  }
  monkey.velocityY=monkey.velocityY+0.5;
  
  banana();
  obstacle();
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time : "+survivalTime, 100,50);
 
  drawSprites();
}

function banana (){
  
 if(World.frameCount%80===0){ 
var banana=createSprite(400,100,20,20);
 banana.addImage(bananaImage);
 banana.scale=0.1
 banana.y=Math.round(random(150,250)); 
 banana.velocityX=-4;
 banana.setlifetime=410;
   
FoodGroup.add(banana);  
}
}

function obstacle (){
  
 if(World.frameCount%300===0){ 
var obstacle=createSprite(400,80,20,20);
 obstacle.addImage(obstaceImage);
 obstacle.scale=0.2;
 obstacle.y=315;  
 obstacle.x=Math.round(random(300,400)); 
 obstacle.velocityX=-4;
 obstacle.setlifetime=1;
   
obstacleGroup.add(obstacle);  
}
}
