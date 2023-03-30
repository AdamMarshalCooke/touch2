function setup() { 
  createCanvas(windowWidth, windowHeight);
  background(204);
} 

function draw() { 
  for (var i = 0  ;  i < touches.length  ;  i++) {
    fill (i * 50);
    ellipse(touches[i].x, touches[i].y, 20, 20);
    rect(touches[i].x, touches[i].y, width, 1000);
  }
}

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling
 * the page.
 */
function touchStarted(){
  return false;
}

function touchMoved(){
  return false;
}

function touchEnded(){
  return false;
}