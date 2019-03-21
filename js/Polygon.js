class Polygon {
  constructor(x, y, r, color = 255) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }

  draw(sides, rotate) {
    // Just for fun
    rotate ? this.rotationDeg = frameCount : 0;

    fill(this.color);
    angleMode(DEGREES);

    beginShape();
    for (let i = 0; i < sides; i++) {
      let x = this.x + (this.r * cos(360 / sides * i + this.rotationDeg));
      let y = this.y + (this.r * sin(360 / sides * i + this.rotationDeg));
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}
