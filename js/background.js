export class Background {
  constructor(game) {
    this.game = game;

    this.backgroundImage = document.getElementById("backgroundSky");
  }

  update() {}

  draw(ctx) {
    ctx.drawImage(this.backgroundImage, 0, 0);
  }
}
