export class Player {
  constructor(game) {
    this.game = game;

    this.playerSprites = document.getElementById("playerSprites");
    this.playerWidth = 68;
    this.playerHeight = 100;
  }

  update() {}

  draw(ctx) {
    const spriteIndex = 0;
    ctx.drawImage(
      this.playerSprites,
      this.playerWidth * spriteIndex,
      0,
      this.playerWidth,
      this.playerHeight,
      10,
      (this.game.height - this.playerHeight) / 2,
      this.playerWidth,
      this.playerHeight
    );
  }
}
