var car, wall;
var speed, weight;





function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(59, 90);
  weight=random(400, 1500);
  car=createSprite(50, 200, 50, 50)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}