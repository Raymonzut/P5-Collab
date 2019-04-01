symbols = 'アイウエオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヲンヴヷヺ';
class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.char = symbols[floor(Math.random() * symbols.length)];
    console.log(this.char);
  }
  draw() {
    fill(255);
    textSize(18);
    text(this.char, this.x, this.y);
  }
}
