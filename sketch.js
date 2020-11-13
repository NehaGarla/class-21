var fixed_rect,moving_rect;

var gameobject1,gameobject2,gameobject3,gameobject4;
 function setup()
  { createCanvas(1200,800);
     fixed_rect= createSprite(600,400,50,80);
      fixed_rect.shapeColor="blue"; 
      moving_rect=createSprite(800,250,80,50);
       moving_rect.shapeColor="blue";
       
gameobject1=createSprite(100,100,50,50);
gameobject2=createSprite(200,100,50,50);
gameobject3=createSprite(300,100,50,50);
gameobject4=createSprite(400,100,50,50);
       }
        function draw()
        { background("lightgreen")
         moving_rect.x=World.mouseX; 
         moving_rect.y=World.mouseY;

if(Touching(moving_rect,gameobject2))
{
  moving_rect.shapeColor="red";
  gameobject2.shapeColor="red";
}
else{
  moving_rect.shapeColor="black";
  gameobject2.shapeColor="black";
}
                drawSprites();
                   }
    