const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15;
var box16;
var polygon,slingShot;
var sling;
var ground1;
var score=0;

 function preload(){
    getTime();
 }
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20); 
   ground1 = new Ground (700,height - 150,400,20);
   box1 = new Box(700,100,50,50);
   box2 = new Box(800,100,50,50);
   box3 = new Box(600,100,50,50);
   box4 = new Box(650,100,50,50);
   box5 = new Box(750,100,50,50);
   box6 = new Box(550,100,50,50);
   box7 = new Box(850,100,50,50);
   box8 = new Box(600,50,50,50);
   box9 = new Box(650,50,50,50);
   box10 = new Box(700,50,50,50);
   box11 = new Box(750,50,50,50);
   box12 = new Box(800,50,50,50);
   box13 = new Box(750,25,50,50);
   box14 = new Box(700,25,50,50);
   box15 = new Box(650,25,50,50);
   box16 = new Box(700,14,50,50);
   polygon=new Polygon(100,100)
    sling=new SlingShot(polygon.body, {x:150,y:200});
}

function draw(){
    background("yellow");
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    ground1.display();
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
    box16.display();
    polygon.display();
    sling.display();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if(keyCode===32){
        sling.attach(polygon.body);
    }
}
    async function getTime(){
        var response=await fetch("http://worldtimeapi.org/api/timezone/Africa/Lagos");
        var responsejson= await response.json();
        console.log(responsejson);
        var datetime=responsejson.datetime;
        console.log(datetime);
        var hour=datetime.slice(11,13);
        console.log(hour);
        if(hour>=06 && hour<=16){
            background("yellow");
        }
        else{
            background("blue");
        }
       
    } 
