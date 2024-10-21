export class Particle {
  constructor(starball) {
    this.starball = starball;

    this.size = this.starball.size / 2;
    this.x = this.starball.x;
    this.y = this.starball.y + Math.random() * this.size - this.size / 2;
  }

  update() {}

  draw(ctx) {
    ctx.fillStyle = this.starball.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size / 2, 0, 2 * Math.PI);
    ctx.fill();
  }
}
