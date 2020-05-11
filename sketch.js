const Engine = Matter.Engine;
const  World = Matter.World;
const  Bodies = Matter.Bodies;

var snow = [];
function setup() {
  createCanvas(800, 600);

   engine = Engine.create();
   world = engine.world;

   
   ground = new Ground(200, 590, 1200, 30);
}

function draw() {
  background("lavender");
   Engine.update(engine);
    for (var i = 0; i < snow.length; i++) {
      snow[i].display();
    }
 // ground.display();
}
function mouseDragged() {
  if(mouseY<550){
     snow.push(new SnowFlakes(mouseX, mouseY));
  }
   

}