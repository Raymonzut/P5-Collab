// Heavily inspired by https://www.youtube.com/watch?v=fwDkUxrFb0s
let len = 500;
let max = 10;
const bgColor = 40;

function setup() {
  createCanvas(500, 500);
  background(bgColor);

  noStroke();
  fill(250);
  frameRate(ceil(max / 2));
}

function divide(x, y, l, lvl, max) {
  if (lvl == max) {
    tri(x, y, l);
  } else {
    divide(x, y, l / 2, lvl + 1, max);
    divide(x + l / 2, y, l / 2, lvl + 1, max);
    divide(x + l / 4, y - sin(PI / 3) * l / 2, l / 2, lvl + 1, max);
  }
}

function tri(x, y, l) {
  triangle(x, y, x + l / 2, y - sin(PI / 3) * l, x + l, y);
}

function draw() {
  background(bgColor);
  divide(width / 2 - len / 2, height / 2 + sin(PI / 3) * len / 2, len, 1, (frameCount % max) + 1);
}
