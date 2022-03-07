let earWiggle;
let earWiggle2;
let mic;
let micVar;
let fr = 0;
let circleX = 200
let circleX2 = 350
let pokeball1;
let pokeball2;
let pokeball3;
let pokeball4;
let pokeball5;
let pokeball6;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
  angleMode(DEGREES);
  //frameRate(fr);
  
  pokeball1 = new Pokeball(width * .2, height * .05, 10, .5);
  pokeball2 = new Pokeball(width * .6, height * .2, -10, 1.5);
  pokeball3 = new Pokeball(width * .05, height * .5, -60, 1.2);
  pokeball4 = new Pokeball(width * .4, height * .7, 15, 1);
  pokeball5 = new Pokeball(width * .3, height * .8, -30, 1.2);
  pokeball6 = new Pokeball(width * .8, height * .65, 25, 1);
  
  
}

function draw() {
  background(95, 255, 165);
  fill(174, 117, 60); // fur color
  
  //drawPokeball();
  
  pokeball1.display();
  pokeball2.display(); 
  pokeball3.display();
  pokeball4.display();
  pokeball5.display();
  pokeball6.display();
  
  pokeball1.move();
  pokeball2.move();  
  pokeball3.move();
  pokeball4.move();
  pokeball5.move();
  pokeball6.move();

  
  drawFur();
  drawEar();
  drawRightEar();
  drawBody();
  drawHead();
  drawArm();

  micVar = mic.getLevel();
  earWiggle = map(mic.getLevel(), 0, 0.1, 40, 30);
  earWiggle2 = map(mic.getLevel(), 0, 0.9, 1, 40);
}

//pokeball
function drawPokeball() {
  push();
  strokeWeight(2)
  fill(255)
 arc(50, 50, width * .2, height * .2, 0, 180);
  fill(255, 0, 0)
 arc(50, 50, width * .2, height * .2, 180, 0);
  fill(0);
  circle(width * .125, width * .125, width *.06);
  fill(255);
  circle(width * .125, width * .125, width *.04);
  pop(0);
  }

function drawEar() {
  //ears
  //left ear
  push();
  rotate(earWiggle / 2);
  ellipse(width * 0.3, width * 0.25, width * 0.25, height * 0.3);
  pop();
  push();
  fill(249, 202, 155);
  rotate(earWiggle / 2);
  ellipse(width * 0.3, width * 0.25, width * 0.15, height * 0.2);
  pop();
}
function drawRightEar() {
  //right ear
  push();
  rotate(earWiggle2 / 2);
  ellipse(width * 0.77, width * 0.33, width * 0.25, height * 0.3);
  pop();
  push();
  rotate(earWiggle2 / 2);
  fill(249, 202, 155);
  ellipse(width * 0.77, width * 0.33, width * 0.15, height * 0.2);
  pop();
}

function drawBody() {
  //body
  ellipse(width * 0.5, width * 1, width * 0.9, height * 0.6);
  push();
  fill(239, 186, 133);
  ellipse(width * 0.5, width * 1, width * 0.5, height * 0.2);
  pop();
}

function drawHead() {
  //head
  ellipse(width * 0.5, width * 0.55, width * 0.75, height * 0.6);

  //mouth
  push();
  fill(239, 186, 133);
  ellipse(width * 0.5, width * 0.65, width * 0.4, height * 0.3);
  pop(0);
  push();
  noFill(0);
  pop();

  //eyes
  //left eye
  push();
  fill(0);
  circleX = circleX + 1 * (deltaTime / 200)
  if (circleX >= width * .4){
    if (fr === 30){
    fr = 60
    frameRate(fr);
  }
    circleX = width * .37;
  }
  circle(circleX, width * 0.44, width * 0.1);
  pop();

  //right eye
  push();
  fill(0);
  circleX2 = circleX2 + 1 * (deltaTime / 200)
  if (circleX2 >= width * .63){
    if (fr === 30){
    fr = 60
    frameRate(fr);
  }
    circleX2 = width * .6;
  }
  circle(circleX2, width * 0.44, width * 0.1);
  pop();

  //nose
  push();
  fill(0);
  triangle(
    width * 0.4,
    width * 0.55,
    width * 0.6,
    width * 0.55,
    width * 0.5,
    width * 0.65
  );
  pop();
}

function drawFur() {
  //fur
  //right
  beginShape();
  vertex(width * 0.87, height * 0.55);
  bezierVertex(
    width * 0.88,
    height * 0.6,
    width * 0.85,
    height * 0.65,
    width * 0.95,
    height * 0.6
  );
  bezierVertex(
    width * 0.8,
    height * 0.8,
    width * 0.8,
    height * 0.68,
    width * 0.855,
    height * 0.65
  );
  endShape();

  //left
  beginShape();
  vertex(width * 0.13, height * 0.5);
  bezierVertex(
    width * 0.12,
    height * 0.6,
    width * 0.15,
    height * 0.65,
    width * 0.05,
    height * 0.6
  );
  bezierVertex(
    width * 0.2,
    height * 0.8,
    width * 0.2,
    height * 0.68,
    width * 0.155,
    height * 0.65
  );
  endShape();
}

function drawArm() {
  //arms
  fill(174, 117, 60);
  if (mouseX > width * 0.5) 
    rotate(5);
  if (mouseY > height * 0.5) 
    rotate(-3);
  ellipse(width * 0.3, width * 1, width * 0.3, height * 0.7);
  push();
  fill(0);
  circle(width * 0.23, width * 0.75, width * 0.05);
  circle(width * 0.265, width * 0.7, width * 0.05);
  circle(width * 0.33, width * 0.7, width * 0.05);
  circle(width * 0.37, width * 0.75, width * 0.05);
  circle(width * 0.3, width * 0.8, width * 0.1);
  pop();


}