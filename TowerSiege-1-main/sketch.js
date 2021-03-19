const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2,block3,block4,block5,block6,block7,block8,block9;
var platform;
var polygon;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    block1 = new Box(330,235,30,40)
    block2 = new Box(360,235,30,40)
    block3 = new Box(390,235,30,40)
    block4 = new Box(420,235,30,40)
    block5 = new Box(450,235,30,40)
    block6 = new Box(360,195,30,40)
    block7 = new Box(390,195,30,40)
    block8 = new Box(420,195,30,40)
    block9 = new Box(390,155,30,40)

    polygon = new Polygon(50,50,50,50)
   
    platform = new Ground(390, 260, 200, 20);
    rope = new Rope(polygon.body,{x:50,y:10})
   
}

function draw(){
   background("blue");
   Engine.update(engine);
   fill("purple")
   block1.display() 
    block2.display()
    block3.display()
    fill("green")
    block4.display ()
    block5.display() 
    block6.display ()
    block7.display()
    fill("yellow")
    block8.display()
    block9.display()
    
    rope.display()
    polygon.display()
    platform.display()
     
}

function mouseDragged(){
   
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
    
}

