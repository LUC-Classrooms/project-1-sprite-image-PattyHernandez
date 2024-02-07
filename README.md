# Project 1 - Interactive Sprite Image

_Create an independent image that responds to user actions_

In this project, you will create a "Sprite" image that is a self-contained drawing of a character or object that could move on the canvas or interact with other objects in its environment. This is not supposed to be a full scene (with backgrounds). Just the character sprite.

## Instructions:

1. **On paper** - draw an original picture or find a graphic image to adapt (something 2-dimensional and relatively simple)
2. **Map out** the P5 primitive shapes you will need to draw your image in P5
3. Determine pixel coordinates and shape dimensions **relative to a center origin point of (0, 0)**
4. Use the techniques from **chapters 3-8** in "Getting Started with P5.js" to create an original image that reacts in some way to **user actions** (such as moving the mouse or pressing keys on the keyboard) and also incorporates **basic motion.**
6. Your image should be a **composite of basic shapes** (ellipse, rect, line, arc, vertex shapes, etc).
7. Your project must use **```translate()```** with a pair of **variables** that determine the location of the (0,0) origin point
* DO:
  ``` javascript
  translate(x, y); // x and y are declared and initialized properly ```
* NOT:
  ``` javascript
  translate(50, 100); ```

8. After calling ```translate()```, your drawing functions should have arguments that place them **relative to (0,0).** The ```translate()``` function will take care of shifting your image to a new location on the canvas. This is important for later in the course.
9. Again, see my notes under Lessons->Part 2 - Programming Fundamentals: Variables and Interaction->Drawing Relative to a point. See **Example 2, Alien Mouse Relativity**, for a model on which to base your own work.
10. **User input** (`mouseX`, `mouseY`, `mouseIsPressed`, etc.) should affect the drawing in some way (change location, size, color, etc.)
11. Thoroughly **comment** your code. Use the ```//``` symbol to add a single-line comments. Use the ```/* … */ ``` symbols to write longer comment blocks. Comments should explain the variables, procedures, and output of the code. Also, be sure to add a multi-line comment at the top of your code with the following info:

  ```javascript
      /*
      Your Name;
      Completion date;
      Basic description of the image;
      Basic description of user interactions to expect;
      Citations of any code sources used for reference;
      */
  ```

12. Pay attention to proper code formatting. Be sure that code is **indented and spaced properly.**

    **Good formatting:**

    ``` javascript
    function draw() {
      background(200); // grey background
      if(mouseX > width/2) {
        // if the mouse is on the right half of the canvas
        fill(255, 0 0); //set fill color to red
      } else {
        fill(0); //set fill to black
      }

      //my shape
      ellipse(x, y, d, d * 2); // oval
      rectMode(CENTER);
      rect(x, y - d / 2, d / 2, d / 2); // square

    } // end of draw() function
    ```
    **Bad formatting** (no comments, bad spacing and indentation):

    ``` javascript
    function draw() {
      background(200);
    if(mouseX>width/2){
    fill(255, 0 0);
    } else {
     fill(0);}
    //my shape
    ellipse(x,y,d,d*2);
    rectMode(CENTER);
     rect(x,y-d/2,d/2,d/2);}
    ```
     
### When you are done:

* commit your work on GitHub as "Project 1 Submitted"
* on Sakai, submit 
  * a **link** to your repository, 
  * a brief **description** of your project -- what is it and what does it do? 
  * a **.zip file** downloaded from GitHub


## But before you submit: 
Ask yourself the following questions (guidelines for an exemplary (A) project):

* “Would I **show** this to someone I’m trying to impress?”
* “Does my project exhibit **creativity and thoughtfulness** (beyond simple shapes)?”
* “Did I use **variables** to store important numerical parameters (no ‘magic numbers’)?”
* If I change the **location** of the drawing on the canvas, does it still look right?
* “Does my drawing change in response to **user actions** (interactive!)?”
* “Does my project make use of **conditional statements** (```if(){}``` or ```for(){}```)?”
* “Is my code thoroughly **commented** and properly **formatted**?”
* “Is my project free of **syntax errors** and does it work as intended?”
* “Did I deliver it **on time?***”

See the detailed rubric (in Sakai, Assignments-> Project 1) for more specific grading criteria.

\* "on time" delivery means either submitted by the published assignment deadline or by an extended deadline agreed upon between the student and instructor (based on extenuating circumstances or specific student needs).