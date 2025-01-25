export class Starball {
  constructor(game) {
    this.game = game;

    this.size = Math.random() * 10 + 10;
    this.x = (this.game.width * 2) / 3;
    this.y = -this.size / 2;
    this.color = `rgb(255, ${255 - this.size * 3}, 0)`;
    this.xSpeed = -1;
    this.ySpeed = 0;
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.xSpeed -= 0.05;
    this.ySpeed += this.size / 350;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size / 2, 0, 2 * Math.PI);
    ctx.fill();
  }
}
