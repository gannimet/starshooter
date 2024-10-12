const playerWidth = 68;
const playerHeight = 100;

export class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  update() {}

  draw(ctx, playerSprites) {
    const spriteIndex = 0;
    ctx.drawImage(
      playerSprites,
      playerWidth * spriteIndex,
      0,
      playerWidth,
      playerHeight,
      300,
      200,
      playerWidth,
      playerHeight
    );
  }
}
