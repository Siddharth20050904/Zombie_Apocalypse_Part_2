var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;
var boxBody1,boxBody2,boxBody3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    box1 = createSprite(260,620,20,90);
	box1.shapeColor = "red";

	box2 = createSprite(350,630,180,20);
	box2.shapeColor = "red";
	
	box3 = createSprite(440,620,20,90);
	box3.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
    boxBody1 = Bodies.rectangle(260,620,20,90);
    World.add(world, boxBody1);

	boxBody2 = Bodies.rectangle(350,640,180,20);
    World.add(world, boxBody2);

	boxBody3 = Bodies.rectangle(440,620,20,90);
    World.add(world, boxBody3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  box1.x = boxBody1.position.x;
  box1.y = boxBody1.position.y;

  box2.x = boxBody2.position.x;
  box2.y = boxBody2.position.y;

  box3.x = boxBody3.position.x;
  box3.y = boxBody3.position.y;

  Matter.Body.setStatic(boxBody2,true);
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   Matter.Body.setStatic(packageBody,false); 
  }
}



