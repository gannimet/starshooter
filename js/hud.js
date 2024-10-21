export class HUD {
  constructor(game) {
    this.game = game;
  }

  update() {}

  draw(ctx) {
    ctx.font = "22px sans-serif";
    ctx.fillStyle = "black";
    ctx.fillText(`Score: ${this.game.score}`, (this.game.width * 3) / 4, 35);
  }
}
