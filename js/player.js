export class Player {
  constructor(game) {
    this.game = game;

    this.playerSprites = document.getElementById("playerSprites");
    this.playerWidth = 68;
    this.playerHeight = 100;
  }

  draw(ctx) {
    const spriteIndex = 0;

    ctx.drawImage(
      this.playerSprites,
      spriteIndex * this.playerWidth,
      0,
      this.playerWidth,
      this.playerHeight,
      300,
      200,
      this.playerWidth,
      this.playerHeight
    );
  }
}
