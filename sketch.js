
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var wall1;
var wall2;

function preload()
{
	
}

function setup() {
	createCanvas(800,600);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		restitution :0.3,
	    frictionAir	:0
	}

	ground = new Ground(400,590,1000,10);
	wall1 = new Ground(650,550,10,50);
	wall2 = new Ground(750,550,10,50);

	

	//Create the Bodies Here.
	ball = Bodies.circle(200,200,25,ball_options);
	World.add(world,ball);

	World.add(world,wall1);
	
	World.add(world,wall2);

	World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
	Engine.update(engine);

  fill("aqua");
  ellipse(ball.position.x,ball.position.y,25);

  
  ground.show();
  wall1.show();
  wall2.show();
  

 
}

function keyPressed(){
	if(keyCode === 38){
	  Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05})
	}
}


