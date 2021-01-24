function setup()
 {
    createCanvas(1200,800);
     fr = createSprite(200, 200, 50, 80);
      fr.shapeColor = "green";
       mr = createSprite(400, 200, 80, 30);
        mr.shapeColor = "green"; 
        mr.velocityY=-5;
        fr.velocityY=+5;
      }
         function draw() { 
           background(255,255,255);
           mr.x = World.mouseX;
            mr.y = World.mouseY;
             if(mr.x - fr.x < fr.width/2 + mr.width/2 && fr.x-mr.x < fr.width/2 + mr.width/2 )
              {
                 mr.velocityX=mr.velocityX * (-1);
                 fr.velocityX=fr.velocityX * (-1);
                 }
                  if(mr.y - fr.y < fr.height/2+mr.height/2 && fr.y - mr.y < mr.height/2+fr.height/2) 
                   {

                    mr.velocityY=mr.velocityY * (-1);
                    fr.velocityY=fr.velocityY * (-1);
                 }
                  drawSprites();
 }

