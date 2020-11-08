
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone,tree,ground,boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;

function preload()
{
	
}

function setup() {
	createCanvas(1500,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = new Boy(200,680,200,300)
	ground = new Ground(750,780,1500,20)
	tree = new Tree(1100,400,730,730)
	mango1 = new Mango(1100,150,60,60)
	mango2 = new Mango(1000,170,60,60)
	mango3 = new Mango(1225,200,60,60)
	mango4 = new Mango(1075,250,60,60)
	mango5 = new Mango(1325,275,60,60)
	mango6 = new Mango(1200,320,60,60)
	mango7 = new Mango(900,290,60,60)
	mango8 = new Mango(1000,330,60,60)
	stone = new Stone(138,610,50,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white')
  boy.display();
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
  
  drawSprites();
  keyPressed();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(stone.body,stone.body.position,{x:50,y:-50})
	}
}

