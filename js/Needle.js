class Needle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.angle = Math.random() * PI;

    this.lx = this.x - cos(this.angle) * 50;
    this.ly = this.y + sin(this.angle) * 50;
    this.hx = this.x + cos(this.angle) * 50;
    this.hy = this.y - sin(this.angle) * 50;

    this.isHitting = this.isOnStrip(this.ly, this.hy);
    hitCounter += this.isHitting;
    totalCounter++;
  }

  isOnStrip(ly, hy) {

    for (let i = 0; i < strips.length; i++) {
      let h = strips[i].h;

      if ((ly >= h) && (hy <= h)) {
        hitCounter++;
        return true;
      }
    }
    return false;
  }
  draw() {
    this.isHitting ? stroke(0, 255, 0) : stroke(255, 0, 0);

    strokeWeight(3);
    line(this.lx, this.ly, this.hx, this.hy);
  }
}
