export class GoalAlert {
  constructor(game) {
    this.game = game;

    this.alertImage = document.getElementById("goalAlert");
    this.markedForDeletion = false;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  }

  update() {
    this.width += 8;
    this.height = this.width * (200 / 680);
    this.x = (this.game.width - this.width) / 2;
    this.y = (this.game.height - this.height) / 2;

    if (this.width >= 680) {
      this.markedForDeletion = true;
    }
  }

  draw(ctx) {
    ctx.drawImage(this.alertImage, this.x, this.y, this.width, this.height);
  }
}
