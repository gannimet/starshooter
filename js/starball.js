export class Starball {
  constructor(game) {
    this.game = game;

    this.size = 20;
    this.x = this.game.width / 2;
    this.y = -this.size / 2;
  }

  update() {}

  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size / 2, 0, 2 * Math.PI);
    ctx.fill();
  }
}
