var bg, bgImg;
var spaceship, spaceshipImg;
var star, starImg;

function preload(){
  bgImg = loadImage("bg.jpg");
  spaceshipImg = loadImage("spaceship.png");
  starImg = loadImage("star.png");
}



function setup() {
  createCanvas(600,400);


  bg = createSprite(300, 380, 600, 20);
  bg.addImage(bgImg);
  bg.velocityX = -2;

  spaceship = createSprite(50, 350, 10, 10);
  spaceship.addImage(spaceshipImg);
  spaceship.scale = 0.1;

  
}

function draw() {
  background("black"); 

  spawnStars();

  if(bg.x < 0){
    bg.x = bg.width/2;
  }

  spaceship.y = mouseY;

  

  drawSprites();
}

function spawnStars(){
  if(frameCount % 60 == 0){
    star = createSprite(Math.round(random(150, 800)), Math.round(random(50, 400)), 5, 5);
    star.addImage(starImg);
    star.scale = 0.06;
    star.velocityX = -2;
  }
}




