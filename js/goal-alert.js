export class GoalAlert {
  constructor(game) {
    this.game = game;

    this.alertImage = document.getElementById("goalAlert");
  }

  update() {}

  draw(ctx) {
    ctx.drawImage(this.alertImage, 0, 0);
  }
}
