/**
 * Project 1 - Interactive Image
 * Name: Patty Hernandez
 * Comments: geting started
 * Date: Feb 12, 2024
 */

// Global Variables go here
var a = 0; 


function setup(){
  // this function will run once
  createCanvas(400, 400); // create a 600x400 pixel drawing canvas
  

}

function draw(){
  // this function runs again and again (60x per second)
  background(200); //medium gray background
  var x= 200;
 var y =165;

  fill(255,190, 200); 
 // x= mouseX;
 // y= mouseY; 

  //left ear
  ellipse(165,150,35, 40); //left ear
  ellipse(235,150,35,40);// right ear

  ellipse(0+x,35+ y ,125);// pig face


  fill(255); 
  ellipse(-25 + x,175, 25); // left eye
  fill(0); 
  ellipse(-25+ x,175,10); //inside of the left eye
  

  fill(255);
  ellipse(25 + x, 175,25);//right eye
  fill(0)
  ellipse(25+ x ,175,10);// inside of the right eye

  fill(255,190, 200);
  ellipse( 200,200,50,25); // pig nose
  fill(0)
  ellipse(190 ,200,10);// left side of inside nose
  ellipse(210,200,10); // right side of inside nose

  arc(0+x, 225,40,40,0, PI); 


} 


 
  
  
  
  
  
  

  



  
  // add your image drawing code here

/* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/
  if(mouseIsPressed){
    //check each frame to see if the mouse is pressed, then do something
    fill(255,190, 200);
  } 
  else {
    // do something here if the mouse is NOT pressed
    fill("blue");
  }

/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/
function mousePressed(){
  // add code here if you want something to execute once each time the mouse is pressed
}