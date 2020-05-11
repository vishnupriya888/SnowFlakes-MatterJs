const Engine = Matter.Engine;
const  World = Matter.World;
const  Bodies = Matter.Bodies;

var snow = [];

function preload() {
  bgimage = loadImage("snowbackground.jpg");

}
function setup() {
  createCanvas(800, 600);

   engine = Engine.create();
   world = engine.world;
   ground = new Ground(200, 590, 1200, 30);
}
function mousePressed() {
  
    

}
function draw() {
  background(bgimage);
   Engine.update(engine);
   snow.push(new SnowFlakes(random(0, 800), 0));
    for (var i = 0; i < snow.length; i++) {
      snow[i].display();
     
    }
  ground.display();
}
