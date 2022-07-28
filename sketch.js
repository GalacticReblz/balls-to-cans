
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var rightSide
var leftSide
var groundObj

function preload() {

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution: 0.35,
		friction: 0,
		density: 1.2
	}

	rightSide = new Ground(1000, 600, 20, 120)
	leftSide = new Ground(1100, 600, 20, 120)
	groundObj = new Ground(width / 2, 670, width, 20)

	ball = Bodies.circle(100, 300, 12, ball_options)
	World.add(world, ball)

	Engine.run(engine);

}


function draw() {
	Engine.update(engine)
	rectMode(CENTER);
	background(0);
	leftSide.show()
	rightSide.show()
	groundObj.show()
	ellipse(ball.position.x, ball.position.y, 12, 12)
	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.01, y: -0.01 })
	}
}



