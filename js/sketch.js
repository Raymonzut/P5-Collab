let innerR = 100;
let outerR = 60;

let precision = 0.5;
let t = 0;

const bgColor = 40;

function setup() {
  createCanvas(500, 500);
  background(bgColor);
  frameRate(60);
}

function drawInner() {
  noFill();
  stroke(255);
  circle(width / 2, height / 2, innerR);
}

function drawOuter() {
  let x = (width / 2) + (innerR + outerR) * cos(t);
  let y = (height / 2) + (innerR + outerR) * sin(t);

  noFill();
  stroke(255);
  circle(x, y, outerR);
}

function step() {
  let fps = frameRate();
  if (fps != 0) {
    t += precision / fps;
  }
}

function draw() {
  background(bgColor);

  drawInner();
  drawOuter();

  step();
}
