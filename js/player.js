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
      this.playerY = Math.max(this.playerY - 3, 0);
    } else {
      this.playerY = Math.min(
        this.playerY + 1,
        this.game.height - this.playerHeight
      );
    }
  }

  draw(ctx) {
    const spriteIndex = 0;

    ctx.drawImage(
      this.playerSprites,
      spriteIndex * this.playerWidth,
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
