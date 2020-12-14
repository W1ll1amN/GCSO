var car, wall;
var speed, weight;




function setup() {
  createCanvas(1600,400);
  
  
  car = createSprite(50, 200, 60, 50);
  wall=createSprite(1500,200,60,height/2)



speed=random(55,90)
weight=random(400,1500)


car.velocityX = speed;



}

function draw() {
  background(255,255,255);  
  
  var deformation = 0.5 * weight * speed * speed / 22500;
  
  
  
  if (car.isTouching (wall)){
  
    car.velocityX = 0;
    if (deformation > 180){
    car.shapeColor = "red"
    }

    if (deformation > 80 && deformation < 180){
      car.shapeColor = "orange"
      }
      
      if (deformation < 80){
        car.shapeColor = "green"
        }
}
  
  
  drawSprites();
}