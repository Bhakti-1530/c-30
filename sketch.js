const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
var polygon;

function setup() {
 var canvas = createCanvas(800,400);
 // createSprite(400, 200, 50, 50);

 engine = Engine.create();
 world = engine.world;

  ground = new Ground(200,300,100,20);
  block1 = new Box(330, 330, 30, 40);
  block2 = new Box(330, 330, 30, 40);
  block3 = new Box(330, 330, 30, 40);
  block4 = new Box(330, 330, 30, 40);
  block5 = new Box(330, 330, 30, 40);
  block6 = new Box(330, 330, 30, 40);
  block7 = new Box(330, 330, 30, 40);
  block8 = new Box(330, 330, 30, 40);
  block9 = new Box(330, 330, 30, 40);
  block10 = new Box(330, 330, 30, 40);
  block11 = new Box(330, 330, 30, 40);
  block12 = new Box(330, 330, 30, 40);
  block13 = new Box(330, 330, 30, 40);

  var polygon_options={
    isStatic: true
}
polygon= Bodies.circle(200,390,200,20,polygon_options);
World.add(world,polygon);

slingshot = new Slingshot(polygon.body,{x:200,y:100});

}

function draw() {
  background(0);
    Engine.update(engine);  
  
  ground.display();
  block1.display(); 
  block2.display(); 
  block3.display(); 
  block4.display(); 
  block5.display(); 
  block6.display(); 
  block7.display(); 
  block8.display(); 
  block9.display(); 
  block10.display(); 
  block11.display(); 
  block12.display(); 
  block13.display(); 
  block14.display(); 
  block15.display(); 
  slingshot.display();
  ellipseMode(RADIUS);
  ellipse(polygon.position.x,polygon.position.y,20,20);


  drawSprites();
}

function mouseDragged(){

  Matter.Body.setPosition(polygon.body, {x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.polygon);
  }

}