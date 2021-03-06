var car,wall;
var speed,height;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = ("blue");
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();

   if(wall.x-car.x < wall.width/2 + car.width/2 &&
    (0.5*weight*speed*speed)/22500 < 100){
     car.shapeColor = ("green") ;
   }

   if(wall.x-car.x < wall.width/2 + car.width/2 &&
    (0.5*weight*speed*speed)/22500 > 100 < 180) {
      car.shapeColor = ("yellow");
   }

   if(wall.x-car.x < wall.width/2 + car.width/2 &&
    (0.5*weight*speed*speed)/22500 > 180){
       car.shapeColor =("red");
    }
}