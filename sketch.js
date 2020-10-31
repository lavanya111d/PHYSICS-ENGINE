const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,bodies,object,ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var object_options = {
    isStatic : true
  }
  object = Bodies.rectangle(200,380,400,20,object_options);
  World.add(world,object);
  
  var ball_options = {
    restitution : 0.9
  }
  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world, ball);

  
}

function draw() {
  background(0);  
  rectMode(CENTER);
  Engine.update(engine);
  rect(this.object.position.x,this.object.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(this.ball.position.x,this.ball.position.y,20,20);


  drawSprites();
}