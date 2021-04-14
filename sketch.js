
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper;
var world;


function setup() {
	createCanvas(1350, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ground=new Ground(width/2,670,width,20);
	dustbin=new Dustbin(1200,650);
	paper=new Paper(200,450,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
 

  ground.display();
  dustbin.display();
  paper.display();

}


function keyPressed(){
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:285,y:-285});
		}
	}
