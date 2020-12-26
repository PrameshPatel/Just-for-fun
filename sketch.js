
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,paper2,paper3,paper4;
var bin4,bin5,bin6,bin7;
var box1,box2,box3,box4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(150,250,20);
	paper2 = new Paper(250,250,20);
	paper3 = new Paper(350,250,15);
	paper4 = new Paper(450,250,25);
	bin4 = new Dustbin(400,680,800,20);
	bin5 = new Dustbin(20,350,20,700);
	bin6 = new Dustbin(780,350,20,700);
	bin7 = new Dustbin(400,20,800,20);
	box1 = new Box(200,300,40,40);
	box2 = new Box(400,300,60,40);
	box3 = new Box(600,300,40,20);
	box4 = new Box(500,300,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  paper2.display();
  paper3.display();
  paper4.display();
  bin4.display();
  bin5.display();
  bin6.display();
  bin7.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper,paper.body.position,{x:85,y:-85});
	}
}

