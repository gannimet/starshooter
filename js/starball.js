export class Starball {
  constructor(game) {
    this.game = game;

    this.size = 15;
    this.x = (this.game.width * 2) / 3;
    this.y = -this.size / 2;
    this.xSpeed = -1;
    this.ySpeed = 0;
    this.lastUpdateTime = 0;
    this.markedForDeletion = false;
    this.hasEntered = false;
  }

  update() {
    if (
      this.hasEntered &&
      (this.x < -this.size / 2 ||
        this.x > this.game.width + this.size / 2 ||
        this.y < -this.size / 2 ||
        this.y > this.game.height + this.size / 2)
    ) {
      this.markedForDeletion = true;
    }

    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.xSpeed -= 0.05;
    this.ySpeed += this.size / 350;
    this.lastUpdateTime = performance.now();

    if (this.y > this.size) {
      this.hasEntered = true;
    }
  }

  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size / 2, 0, 2 * Math.PI);
    ctx.fill();
  }
}
