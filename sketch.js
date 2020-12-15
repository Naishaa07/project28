const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot, boy1, boyImage;

function preload() {
   // backgroundImg = loadImage("sprites/bg.png");
   boyImage=loadImage("Plucking mangoes/boy.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;
    


    ground = new Ground(600,height,1200,20);
   // platform = new Ground(150, 305, 300, 170);

    tree1 = new Tree (900,250,300,300);
    //box2 = new Box(920,320,70,70);
    mango1 = new mango(900, 200,20);
    //log1 = new Log(810,260,300, PI/2);

    //box3 = new Box(700,240,70,70);
    //box4 = new Box(920,240,70,70);
    mango2 = new mango(850, 180,20);
    mango3 = new mango(810, 220,20);
    mango4 = new mango(930, 150,20);
    mango5 = new mango(970, 190,20);

    //log3 =  new Log(810,180,300, PI/2);

    //box5 = new Box(810,160,70,70);
    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    stone1 = new Stone(240,270,20);

    //log6 = new Log(230,180,80, PI/2);
    boy1 = new boy(stone1.body,{x:240,y:270});
}

function draw(){
    background("white");
    //boy1= createSprite(100,300,50,160)
    //boy1.addImage(boyImage)
    //drawSprites();

    Engine.update(engine);
    strokeWeight(4);
   // box1.display();
   // box2.display();
    ground.display();
    tree1.display();
    mango1.display();
    //log1.display();

    //box3.display();
    //box4.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    //log3.display();

    //box5.display();
    //log4.display();
    //log5.display();
      
    
    
    //platform.display();
    //log6.display();
    boy1.display();   
    image(boyImage,200,205,250,250) 
    stone1.display();
    DC(stone1, mango1);
    DC(stone1, mango2);
    DC(stone1, mango3);
    DC(stone1, mango4);
    DC(stone1, mango5);
}
function mouseDragged(){
   Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  boy1.fly();
}

function DC(Lstone,Lmango){
    mangoBodyPosition=Lmango.body.position
    stoneBodyPosition= Lstone.body.position
    var distance= dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if(distance <= Lstone.r+Lmango.r ){
        Matter.Body.setStatic(Lmango.body, false);
    }
}
function keyPressed(){
    if(keyCode===32){
        boy1.attach(stone1.body)
        Matter.Body.setPosition(stone1.body,{x:240,y:270})
    }
}