var fixedRect, movingRect,fixedSquare;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedSquare = createSprite(200,100,70,70);
  fixedSquare.shapeColor = "green";
  fixedSquare.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(fixedSquare,movingRect)){
    movingRect.shapeColor = "blue";
    fixedSquare.shapeColor = "blue";
  }else if(isTouching(fixedRect,movingRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedSquare.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
 
  drawSprites();
}