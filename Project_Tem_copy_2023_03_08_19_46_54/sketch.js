var path, pathIMG
var jake, jakeIMG
function preload(){
  pathIMG = loadImage("path.png");

  jakeIMG = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png");
}

function setup(){
  createCanvas(400,400);

  path = createSprite(200, 200);
  path.addImage(pathIMG);
  path.velocityY = 5;

  jake = createSprite(200, 300, 50, 50);
  jake.addAnimation("jake", jakeIMG);
  
}

function draw() {
  background(0);
  if(path.y < 0 ){
    path.y = path.width / 8;
  }

  drawSprites();

}
