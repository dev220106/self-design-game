const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1;
var ball2,ball3,ball4;
var ball5,ball6,ball7;
//var ball9,ball10,ball11,ball12;
var launcher1;
var ground;



function preload() {
}

function setup(){
    var canvas = createCanvas(800,680);
    engine = Engine.create();
    world = engine.world;
     ball1= new  Ball(400,200,20,"blue");
     ball2= new Ball(435,220,20,"yellow");
     ball3= new Ball(365,180,20,"green");
     ball4=new  Ball(400,160,20,"black");
     ball5=new  Ball(435,180,20,"white");
     ball6=new  Ball(365,220,20,"white");
     ball7=new  Ball(400,240,20,"white");
     launcher1=new Launcher(400,500,20,"yellow");
     ground=new Ground(400,660,800,20);
    


}

function draw(){
  
        background("lightblue");

  //  ball1.display();
  if(ball2.color===ball3.color){
      console.log("color matched")
  }
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();
    ball7.display();
    launcher1.display();
    console.log(launcher1);
    ground.display();

   
    Engine.update(engine);
       
}

function keyPressed(){
    if(keyCode===UP_ARROW){
        console.log("UP_ARROW");
        console.log(launcher1.body.position.x)
        Matter.Body.applyForce(launcher1.body,launcher1.body.position,{
            x:0,y:-200
        })
    }
}