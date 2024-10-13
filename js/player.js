export class Player {
  constructor(game) {
    this.game = game;

    this.playerSprites = document.getElementById("playerSprites");
    this.playerWidth = 68;
    this.playerHeight = 100;
    this.playerX = 10;
    this.playerY = (this.game.height - this.playerHeight) / 2;
  }

  update(inputKeys) {
    if (inputKeys.has("ArrowUp")) {
      this.playerY -= 2;
    } else {
      this.playerY++;
    }
  }

  draw(ctx) {
    const spriteIndex = 0;
    ctx.drawImage(
      this.playerSprites,
      this.playerWidth * spriteIndex,
      0,
      this.playerWidth,
      this.playerHeight,
      this.playerX,
      this.playerY,
      this.playerWidth,
      this.playerHeight
    );
  }
}
