const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ball;
var box;

function setup(){
  createCanvas(1000,700);

  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic:true
  }
  ground = Bodies.rectangle(500,650,1000,100,ground_options);
  World.add(world,ground);

  var ball_options={
   restitution:1.914
  }
  ball1 = Bodies.circle(600,450,40,ball_options)
  ball = Bodies.circle(700,550,60,ball_options)
  World.add(world,ball);
  World.add(world,ball1)
}

function draw(){
  background(0);
  
  Engine.update(engine);
  
  strokeWeight(5)
  stroke("brown");
  fill("green");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1000,100);
  
  strokeWeight(5);
  stroke("blue");
  fill("lime");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,60);

  strokeWeight(5);
  stroke("orange");
  fill("cyan");
  ellipse(ball1.position.x,ball1.position.y,40);
  drawSprites();
}