let hitCounter = 0;
let totalCounter = 0;

let needles = [];
let strips = [];

const bgColor = 40;

function setup() {
  createCanvas(600, 600);
  background(bgColor);
  frameRate(60);

  strips.push(new Strip(100));
  strips.push(new Strip(300));
  strips.push(new Strip(500));

}



function draw() {
  background(bgColor);

  strips.forEach(strip => {
    strip.draw();
  });

  needles.push(new Needle());
  needles.forEach(needle => {
    needle.draw();
  });
  needles.splice(0, needles.length < 60 ? 0 : 1);

  document.getElementById('pi_estimation').innerHTML = "π ≈ ".concat((2 * totalCounter / hitCounter).toFixed(14).toString());
}
