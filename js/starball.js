export class Starball {
  constructor(game) {
    this.game = game;

    this.size = 15;
    this.x = (this.game.width * 2) / 3;
    this.y = 10;
    this.color = "orange";
  }

  update() {}

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size / 2, 0, 2 * Math.PI);
    ctx.fill();
  }
}
