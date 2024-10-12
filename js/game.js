export class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  update() {}

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.rect(10, 20, 150, 300);
    ctx.fill();
  }
}