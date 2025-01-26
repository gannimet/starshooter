export class StarballParticle {
  constructor(starball) {
    this.starball = starball;

    this.size = (this.starball.size * 3) / 4;
    this.x = this.starball.x + Math.random() * this.size - this.size / 2;
    this.y = this.starball.y + Math.random() * this.size - this.size / 2;
    this.markedForDeletion = false;
  }

  update() {
    this.size -= 0.5;

    if (this.size <= 0) {
      this.markedForDeletion = true;
    }
  }

  draw(ctx) {
    if (this.size > 0) {
      ctx.fillStyle = this.starball.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size / 2, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
}
