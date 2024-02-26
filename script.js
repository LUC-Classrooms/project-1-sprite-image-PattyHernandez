/**
 * Project 1 - Interactive Image
 * Name: Patty Hernandez
 * Comments: geting started
 * Date: Feb 25, 2024
*/ 

// Global Variables go here 
var x= 200;
var y  =165;


function setup(){
  // this function will run once
  createCanvas(400, 400); // create a 600x400 pixel drawing canvas
  

}

function draw (){ 
  // this function runs again and again (60x per second)
  background(200); //medium gray background
  
  fill(255,190, 200); 
  if (mouseIsPressed)
    fill("red")
     text("ONK ONK!", 30,150);

     if (mouseIsPressed)
    text("ONK ONK!",40,180)
  else {

  }
  

  scale (mouseX/60.0); 
  translate(mouseX,mouseY);


var x= 200;
var y  =165;


  ellipse(20+ x,150,35, 40); //left ear
  ellipse(-20+ x,150,35,40);// right ear

  ellipse(0+x,200 ,125);// pig face


  fill(255); 
  ellipse(-25 + x,175, 25); // left eye
  fill(0); 
  ellipse(-25+ x,175,10); //inside of the left eye
  

  fill(255);
  ellipse(25 + x, 175,25);//right eye
  fill(0)
  ellipse(25+ x ,175,10);// inside of the right eye

  fill(255,190, 200);
  ellipse( 0+x, 200 ,50,25); // pig nose
  fill(0)
  ellipse(10+x ,200,10);// left side of inside nose
  ellipse(-10+ x,200,10); // right side of inside nose

  arc(0+x, 225,40,40,0, PI); 


} 
