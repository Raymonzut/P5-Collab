let chars = [];

const bgColor = 40;

function setup() {
  createCanvas(500, 500);
  background(bgColor);
  let length = 30;
  for (let i = 0; i < height / length; i++) {
    for (let j = 0; j < width / length; j++) {
      chars.push(new Character(j * length, i * length))
    }
  }
}

function draw() {
  background(bgColor);
  chars.forEach((char) => {
    char.draw();
  });
}
