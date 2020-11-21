const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;

var engine, world;
var ground, d1, d2, d3, d4;

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(480,800);
  
  ground = new Ground(250,795,500,25);

  LeftWall = new Division(10,700,20,220);
  d1 = new Division(70,700,10,200);
  d2 = new Division(140,700,10,200);
  d3 = new Division(210,700,10,200);
  d4 = new Division(280,700,10,200);
  d5 = new Division(350,700,10,200);
  d6 = new Division(420,700,10,200);
  RightWall = new Division(480,700,20,220);

  p1 = new Plinko(50,300, 10)
  p2 = new Plinko(100,400,10);
  p3 = new Plinko(150,300,10)
  p4 = new Plinko(200,400,10);
  p5 = new Plinko(250,300,10)
  p6 = new Plinko(300,400,10);
  p7 = new Plinko(350,300,10)
  p8 = new Plinko(400,400,10);
  p9 = new Plinko(450,300,10)
  p10 = new Plinko(30,400,10);

  b1 = new Particles(240,200,20);
  Engine.run(engine);
}

function draw() {
  background(0);
  Engine.update(engine);

  LeftWall.display();
  RightWall.display();
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
 
  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();
  p6.display();
  p7.display();
  p8.display();
  p9.display();
  p10.display();

  b1.display();
  
  ground.display();

  drawSprites();
}