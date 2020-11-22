const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world

function setup() {
createCanvas(400,400);
engine=Engine.create();  
world=engine.world;

box1=Bodies.rectangle(200,380,400,20);
World.add(world,box1)

}

function draw() {
  background("black");
 Engine.update(engine);  
rectMode(CENTER);  
rect(200,380,400,40);
  drawSprites();
}