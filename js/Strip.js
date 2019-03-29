class Strip {
  constructor(h) {
    this.h = h;
  }
  draw() {
    stroke(255);
    strokeWeight(3);
    line(0, this.h, width, this.h);
  }
}
