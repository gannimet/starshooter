export class Goal {
  constructor(game) {
    this.game = game;

    this.goalWidth = 20;
    this.goalHeight = 200;
    this.goalX = this.game.width - this.goalWidth;
    this.goalY = 0;
    this.angle = 0;
  }

  update() {
    this.angle += 0.03;
    this.goalY =
      ((Math.sin(this.angle) + 1) * (this.game.height - this.goalHeight)) / 2;
  }

  draw(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(this.goalX, this.goalY, this.goalWidth, this.goalHeight);
  }
}
