
var bi, beach, man1, mi;
var fishman, fi;
var man2, mi2, score=0;
var g1, g1i, g2, g2i, g3, g3i, g4, g4i;
var g12,g1i2


function preload()
{
	bi =loadImage("beach.jpg");
	mi = loadImage("man1.png");
	fi = loadImage("silver.png");
	mi2 = loadImage("man2.png");

	g1i = loadImage("g1.png");
	g1i2 = loadImage("g1.png");
	g2i = loadImage("g2.png");
	g3i = loadImage("g-3.png");
	g4i = loadImage("g4.png");
    

}

function setup() {
	createCanvas(windowWidth, windowHeight);



    beach = createSprite(620,350,10,10);
	beach.addImage(bi);
	beach.scale = 2;



	// Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  
  
  if(frameCount%300 === 0){
	   
	g1 = createSprite(random(0,1200),500,40,10);
	g1.addImage(g1i);
	
	g1.lifetime = 100;
	g1.scale = 0.2;

	
   }

   if(mousePressedOver(g1)){
	   g1.destroy();
	   score+= 1;
   }
 


   

   if(frameCount%400===0){
	   g2 = createSprite(random(0,1200),500,40,10);
       g2.addImage(g2i);

	   g2.lifetime = 100;
	   g2.scale = 0.3;
   }

    
   if(mousePressedOver(g2)){
	g2.destroy();
	score+= 0.5;
}
if(frameCount%400===0){
	g2 = createSprite(random(0,1200),500,40,10);
	g2.addImage(g2i);
	g2.lifetime = 100;
	g2.scale = 0.3;
}

 
if(mousePressedOver(g2)){
 g2.destroy();
 score+= 0.5;
}

if(frameCount%400===0){
	g3 = createSprite(random(0,1200),500,40,10);
	g3.addImage(g3i);
	g3.lifetime = 100;
	g3.scale = 0.3;
}



 
if(mousePressedOver(g3)){
 g3.destroy();
 score+= 2;
}
if(frameCount%50===0){
	g4 = createSprite(random(0,1200),500,40,10);
	g4.addImage(g4i);
	g4.lifetime = 100;
	g4.scale = 0.3;
}

 
if(mousePressedOver(g4)){
 g4.destroy();
 score+= 1;
}







 //452
  drawSprites();

   textSize(20);
  text("SCORE: "+score,100,20)
 
}





