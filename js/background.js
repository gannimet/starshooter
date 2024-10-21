export class Background {
  constructor(game) {
    this.game = game;

    this.backgroundImage = document.getElementById("backgroundSky");
    this.x = 0;
  }

  update() {
    if (this.x <= -this.game.width) {
      this.x = 0;
    } else {
      this.x--;
    }
  }

  draw(ctx) {
    ctx.drawImage(this.backgroundImage, this.x, 0);
    ctx.drawImage(this.backgroundImage, this.x + this.game.width, 0);
  }
}
