var bg, bg2;
var tom, tomIMG;
var jerry,jerryIMG;
var cat, cat2,cat3, mouse, mouse2,mous3;;


function preload() {
    //load the images here
    bg2=loadImage("images/garden.png");

    cat2=loadImage("images/cat1.png") ;
    cat3=loadAnimation("images/cat2.png","images/cat3.png");
    cat4=loadImage("images/cat4.png");
    
    mouse2=loadImage("images/mouse1.png");
    mouse3=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse4=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here;
    bg=createSprite(500,400,500,400);
    bg.addImage("garden",bg2);
    bg.scale=1.5;

   cat=createSprite(700,400,50,50);
   cat.addImage("catStill",cat2);
   cat.addAnimation("catRunning",cat3);
   cat.addImage("catEnd",cat4);
   cat.setCollider("rectangle",0,0,75,100);
   cat.scale=0.2;


   mouse=createSprite(300,400,30,30);
   mouse.addImage("mouseStill",mouse2);
   mouse.addAnimation("mouseRunning",mouse3);
   mouse.addImage("mouseEnd",mouse4);
   mouse.setCollider("rectangle",0,0,75,100);

   mouse.scale=0.2;

}

function draw() {

    background(255);
    keyPressed();
    //Write condition here to evalute if tom and jerry collide
    collisionSprites();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("left")){
      cat.changeAnimation("catRunning",cat3);
      cat.velocityX=-4;
      mouse.changeAnimation("mouseRunning",mouse3);
      mouse.velocityX=-4;
        
  }
}
function collisionSprites(){
      if(cat.x+mouse.x<=(cat.width+mouse.width)/2){
        cat.changeAnimation("catEnd",cat4);
        cat.velocityX=0;
        mouse.changeAnimation("mouseEnd",mouse4);
      }
    }






