
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var block1,block2,ball;


function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	//Crie os Corpos Aqui.

	var ground_options = {
		isStatic: true
	}

	var block1_Options = {
		restituction: 0.5,
		friction: 0.1,
		frictionAir: 0.1,
	}

	var block2_Options = {
		restituction: 0.7,
		friction: 0.1,
		frictionAir: 0.1
	}


	var ball_Options = {
		restituction: 0.01,
		friction: 1,
		frictionAir: 0.3
	}



	ground = Bodies.rectangle(300,550,600,20, ground_options);
	World.add(world, ground);

	block1 = Bodies.rectangle(100,100,50,50, block1_Options);
	World.add(world, block1);
	

	block2 = Bodies.rectangle(500,100,100,100,block2_Options);
	World.add(world, block2);


	ball = Bodies.circle(250,100,20,ball_Options);
	World.add(world, ball);


	fill(255,0,0);
	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() {

  background(255);
  
  ellipse(ball.position.x, ball.position.y,20);
  rect(block1.position.x, block1.position.y,50,50);
  rect(block2.position.x, block2.position.y,60,60);


  drawSprites();
 
  Engine.update(engine);
}



