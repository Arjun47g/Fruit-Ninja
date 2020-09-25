var knife,sword;
var apple,pear,banana,orange,fruit;
var bomb,bombimage;
var score = 0;
var rand = 0;
var fruitninja,gameover;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var restart;


function preload(){
  
  orange = loadImage("fruit1.png");
  apple = loadImage("fruit2.png");
  pear = loadImage("fruit3.png");
  banana = loadImage("fruit4.png");
  
  sword = loadImage("sword.png")
  fruitninja = loadImage("fruitninja.jpg")
  
  bombimage = loadImage("bomb.jpg")
 
  gameover = loadImage("gameover.png");
  
  cut = loadSound("Sword-Slice-Quick-Transition-www.fesliyanstudios.com.mp3")
  
  gameo = loadSound("gameover.mp3")
  
  restartimg = loadImage("restart.png");
}


function setup(){
  
  createCanvas(400,400);
  
  
  
cover = createSprite(200,200,400,60);



  
knife = createSprite(200,200,10,40);
knife.addImage(sword);
knife.scale = 0.45;
  
  fruitGroup = new Group();
  bombGroup = new Group();

}

function draw(){
background(5,200,218);
  
  //to move the knife
  knife.x = World.mouseX;
  knife.y = World.mouseY;
  
    
    if (gameState === 1){
    
    bombs();
    fruits (); 
      
    cover.addImage(fruitninja);
    cover.scale = 1.5;
    
     
      
    fill(233,50,233)
    text("Score : " + score,330,25);
      
    if(fruitGroup.isTouching(knife)){
    fruitGroup.destroyEach(); 
    cut.play();
    score += 1;
    } 
      
      if(bombGroup.isTouching(knife)){
      gameState = 0;
      gameo.play();
    }
      
      
    }
    else if (gameState === 0){
      
    bombGroup.destroyEach();
    fruitGroup.destroyEach();
    fruitGroup.setVelocityXEach(0);
    
    cover.addImage(gameover); 
      
     knife.visible = false 
      
    fill(233,50,233)
    textSize(20);  
    text("Score : " + score,160,250);
      
     restart = createSprite(200,300,50,50); 
     restart.addImage(restartimg); 
      
      if(mousePressedOver(restart)) {
         gameState = 1;
         restart.visible = false;
         knife.visible = true;
         score = 0;
      }        
       
         
         
  }
               
           
  drawSprites();
}

//to spawn fruits
function fruits () {

if(frameCount % 20 === 0){
 fruit = createSprite(400,200,40,40);
 fruit.scale = 0.2;
 fruit.y = Math.round(random(50,300));
 fruit.lifetime = 60;

  rand = Math.round(random(1,4)) 
  rand1 = Math.round(random(0,1));
  console.log(rand1)
  
  if(rand1 === 0) {
   fruit.x = 0;
   fruit.velocityX = 7; 
  } 
  else if (rand1 === 1) {
   fruit.x = 400;
   fruit.velocityX = -7; 
  }
  
  if(rand === 1){
  fruit.addImage(apple); 
  }
  else if(rand === 2){
  fruit.addImage(orange);    
  }       
  else if(rand === 3){
  fruit.addImage(pear);    
  }
 else if(rand === 4){
  fruit.addImage(banana);    
  }
  
 fruitGroup.add(fruit);

 }
}

//to spawn bombs
function bombs () {
  
if(frameCount % 200 === 0){
  
bomb = createSprite(400,200,40,40);
bomb.addImage(bombimage);
bomb.velocityX = -8;  
bomb.y = Math.round(random(50,300))
bomb.lifetime = 60;
bombGroup.add(bomb);
  
bombGroup.add(bomb)  
  
}



}