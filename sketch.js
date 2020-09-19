const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var body1 ;
var ball;
var body2;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var ground_options ={
        isStatic: true
    }
    

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    body1= Bodies.rectangle(200,200,50,50);
    World.add(world,body1);
  var ball_options={
      restitution:0.8
  }
    ball=Bodies.circle(100,100,50,ball_options);
    World.add(world,ball);
   
    console.log(ground);
    body2_options={
        isStatic:true
    }
    body2=Bodies.rectangle(200,200,100,50,body2_options);
    World.add(world,body2);
}


function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(body1.position.x,body1.position.y,50,50);
    rect(body2.position.x,body2.position.y,100,50);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,50,50);
}