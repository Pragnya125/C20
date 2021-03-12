var fixedRect, movingRect
function setup() {
  createCanvas(400,400);
  movingRect = createSprite(200, 200, 100, 50);
  fixedRect = createSprite(100,200,50,100);
  movingRect.shapeColor = "cyan";
  fixedRect.shapeColor = "pink";
}

function draw() {
  background("black");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2
     && fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2
     && movingRect.y-fixedRect.y  < movingRect.height/2 + fixedRect.height/2
     && fixedRect.y-movingRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "purple";
  }
  else{
    movingRect.shapeColor = "cyan";
  fixedRect.shapeColor = "pink";
  }
  drawSprites();
}