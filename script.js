/**
 * Project 1 - Interactive Image
 * Name: Patty Hernandez
 * Comments: geting started
 * Date: Feb 12, 2024
 */

// Global Variables go here
var a = 0 ;// rotation angle
var x = 0, y = 0; //sprite position

function setup(){
  // this function will run once
  createCanvas(400, 400); // create a 600x400 pixel drawing canvas
  

}

function draw(){
  // this function runs again and again (60x per second)
  background(150); //medium gray background
  fill(255,182, 193)
  ellipse( width/2, height/2, 100)
  



  
  // add your image drawing code here

/* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/
  if(mouseIsPressed){
    //check each frame to see if the mouse is pressed, then do something
  } else {
    // do something here if the mouse is NOT pressed
  }
}

/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/
function mousePressed(){
  // add code here if you want something to execute once each time the mouse is pressed
}