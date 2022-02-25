const HEIGHT = 400;
const WIDTH = 400;

var rh = 0;
var yh = 0;
var bh = HEIGHT;

var po = 0;
var pw = 10;

var to = 0;

const speed = 5;
let hue = 0;

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() 
{
  noStroke();
  background(0, 0, 0);
  animateBackground();
  if (hue >= 80) {
    po += speed;
    drawPeaceSymbol(200, 150, 250)
    if (po >= 255 && pw <= 20) {
      pw += 0.05;
    }
  }

  if (pw >= 20) {
    drawText();
    to++;
  }
}

function drawPeaceSymbol(x, y, r) {
  push();
  strokeWeight(pw);

  //Outer circle
  stroke(0, 0, 0, po);
  fill(255, 255, 255, 0);
  ellipse(x, y, r);

  //Vertical line
  line(x, y - r/2, x, y + r/2);

  //Slanted lines
  line(x, y, x+r/3, y+r/3);
  line(x, y, x - r/3, y + r/3);
  pop();
}

function animateBackground() {
  noStroke();
  
  push();
  rotate(-0.2);
  fill(255, hue, hue);
  rect(-80, 0, WIDTH/3, rh);
  pop();
  
  rh += speed;
  
  push();
  rotate(-0.2);
  fill(hue, hue, 255);
  rect(50, HEIGHT*2, WIDTH/2, bh);
  pop();
  
  if (rh >= 0) {
    bh-= speed;
  }
  push();
  rotate(-0.2);
  fill(255, 255, hue);
  rect(250, 0, WIDTH/2.5, yh);
  pop();
  
  if (bh <= -HEIGHT*3) {
    yh += speed;
  }

  if (yh >= HEIGHT*2 && hue <= 80) {
    hue += 2.5;
  }
}

function drawText() {
  push();
  textFont('Georgia');
  textAlign(CENTER);
  rectMode(CENTER);
  textSize(20);
  fill(255, 255, 255, to);
  rect(200, 345, 225, 30);
  fill(0, 0, 0, to)
  text("Standing With Ukraine", 200, 350)
  pop();
  
}

