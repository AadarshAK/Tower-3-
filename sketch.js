const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var gameState="towerisstanding";
var gamestate="onSling";
var ti
//var chain1;
var China, playbutton,ps,pi;
var score=0, bg="Image";
var backgroundImages, shooter;

function preload(){
 ti=loadImage("t.jpg")
 China=loadSound("DonaldTrump.mp3");
 pi=loadImage("play0.png");
 backgroundImage();
}



function setup(){
   
   createCanvas(800,600);
    //back=createSprite(400,300,800,800);
   //back.addImage(backgroundImages);
   ps=createSprite(10,20,200,20);
   ps.visible=false;
   //ps.addImage(pi);


   //back.scale=0.5
   

   engine = Engine.create();
   world = engine.world;
gameState="towerisstanding";
   shooter=new Shooter(25,290,30,30);

   chain1=new SlingShot(shooter.body,{x:106,y:200});

  gamestate="onSling";
  ground2=new Ground(400,580,800,20);
   block8=new Box(330,235,30,40);
   block9=new Box(360,235,30,40);
   block10=new Box(390,235,30,40);
   block11=new Box(420,235,30,40);
   block12=new Box(450,235,30,40);

   block13=new Box(360,195,30,40);
   block14=new Box(390,195,30,40);
   block15=new Box(420,195,30,40);

   block16=new Box(390,155,30,40);
   

   ground=new Ground(380,273.15,180,30);
}

function draw(){
  gameState="play";
  if(backgroundImg){
    background(backgroundImg);
}
  if(mousePressedOver(ps)){
    China.loop();
    }

  background(backgroundImg);
  Engine.update(engine);
  //drawSprites();
 // back.display()
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  
  block8.Score();
  block9.Score();
  block10.Score();
  block11.Score();
  block12.Score();
  block13.Score();
  block14.Score();
  block15.Score();
  block16.Score();

  ground.display();

  shooter.display();
  chain1.display();
  fill("blue");
  textSize(20);
  stroke("green");
  text("Click here to listen",10,20);
  text("Score : "+score,600,40);


}

function mouseReleased(){
  chain1.fly();
  gameState="cut";
}

function mouseDragged(){
 if(gamestate==="onSling"){
  Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY});
 }
}




function keyPressed(){
  if(keyCode === 32){
    chain.attach(shooter.body);
    gameState="towerisstanding";
    block8=new Box(330,235,30,40);
    block9=new Box(360,235,30,40);
    block10=new Box(390,235,30,40);
    block11=new Box(420,235,30,40);
    block12=new Box(450,235,30,40);
 
    block13=new Box(360,195,30,40);
    block14=new Box(390,195,30,40);
    block15=new Box(420,195,30,40);
 
    block16=new Box(390,155,30,40);
    
}
}

async function backgroundImage(){
   var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var responseJson=await response.json();

   var datetime=responseJson.datetime;
   var hour = datetime.slice(11,13);

   console.log(hour);

   if(hour>=0600 && hour<=1900){
     bg="night.jpg";
   } else{
     bg="day.jpeg";
   }

   backgroundImg=loadImage(bg);
}