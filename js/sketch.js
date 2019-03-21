const bgColor = 40;
const doRotation = true;

let sliderDOM;

let polygon;

function setup() {
  createCanvas(500, 500);
  background(bgColor);

  sliderDOM = document.getElementById('range_sides');

  polygon = new Polygon(width / 2, height / 2, 120);
}

function draw() {
  background(bgColor);

  let sides = sliderDOM.value;

  polygon.draw(sides, doRotation);
}
