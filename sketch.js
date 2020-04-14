const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,cons;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


     box1 = new Base(800,240,350,30);
     box2 = new Box(500,120,30,30);
     box3 = new Box(850,197,60,40);
     box4 = new Box(910,197,60,40);
     box5 = new Box(970,197,60,40);
     box6 = new Base(1030,205,60,40);
     box7 = new Box(880,155,60,40);
     box8 = new Box(940,155,60,40);
     box9 = new Box(1000,155,60,40);
     box10 = new Box(910,113,60,40);
     box11 = new Box(970,113,60,40);
     box12 = new Box(940,71,60,40);
     

cons=new SlingShot(box2.body,{x:500,y:120});


}


function draw(){
    Engine.update(engine);
    strokeWeight(4);
background("pink");
   fill("#f90261");
    box1.display();

     fill("#f74d09");
    box2.display();

     fill("green");
     box3.display();

    fill("white");
    box4.display();

     fill("yellow");
    box5.display();

    fill("#3cf902");
    box6.display();

    fill("#1d09f4");
    box7.display();

     fill("black");
    box8.display();

     fill("#e607f2");
    box9.display();

     fill("#07f9f9");
    box10.display();

    fill("#ce088c");
    box11.display();

    fill("#09f49a");
    box12.display();
   
    cons.display();
}
function mouseDragged(){
   Matter.Body.setPosition(box2.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
   cons.Release();
}