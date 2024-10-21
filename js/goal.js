export class Goal {
  constructor(game) {
    this.game = game;

    this.goalWidth = 20;
    this.goalHeight = 200;
    this.goalX = this.game.width - this.goalWidth;
    this.goalY = (this.game.height - this.goalHeight) / 2;
  }

  update() {}

  draw(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(this.goalX, this.goalY, this.goalWidth, this.goalHeight);
  }
}
