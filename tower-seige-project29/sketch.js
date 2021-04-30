const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var ground;
var ball;
var dustbin;
var stand;
var box1, box2, box3, box4, box5; 
var box6, box7, box8, box9;
var box10,box11,box12;
var box13,box14;
var slingshot;




function setup() {

  engine= Engine.create();
  world= engine.world;

  createCanvas(1300,800);

   ground= new Ground(650,750,width,20);
   paper=  new paper(350,500,25);
   stand= new Ground(650,400,300,20);

   box1= new Block(540,350,50,50);
   box2= new Block(600,350,50,50);
   box3= new Block(660,350,50,50);
   box4= new Block(720,350,50,50);
   box5= new Block(780,350,50,50);
   box6= new Block(570,320,50,50);
   box7= new Block(640,320,50,50);
   box8= new Block(670,320,50,50);
   box9= new Block(700,320,50,50);   
   box10= new Block(590,300,50,50);
   box11= new Block(660,300,50,50);
   box12= new Block(690,300,50,50);
   box13= new Block(610,280,50,50);
   box14= new Block(675,280,50,50);
   box15= new Block(630,250,50,50);

   slingshot= new Slingshot(paper.body,{
     x:200,y:200
   }); 

  
Engine.run(engine);
}

function draw() {
  background("purple");
  Engine.update(engine);

  
  ground.display();
  paper
.display();
  stand.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
    box8.display();
  box9.display();

  box10.display();
    box11.display();
  box12.display();

  box13.display();
  box14.display();
box15.display();
slingshot.display();


  

  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}