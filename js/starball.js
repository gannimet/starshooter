import { StarballParticle } from "./starball-particle.js";

export class Starball {
  constructor(game) {
    this.game = game;

    this.size = Math.random() * 10 + 10;
    this.x = (this.game.width * 2) / 3 + Math.random() * 100 - 50;
    this.y = -this.size / 2;
    this.color = `rgb(255, ${255 - this.size * 3}, 0)`;
    this.xSpeed = -1;
    this.ySpeed = 0;
    this.markedForDeletion = false;
    this.hasBeenShotByPlayer = false;
    this.markedAsScored = false;
    this.particlesPerSecond = 20;
    this.lastParticleCreatedAt = 0;
  }

  update() {
    if (
      this.x < -this.size / 2 ||
      this.x > this.game.width + this.size / 2 ||
      this.y > this.game.height + this.size / 2
    ) {
      this.markedForDeletion = true;
    }

    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.xSpeed -= 0.05;

    if (this.hasBeenShotByPlayer) {
      this.ySpeed += this.size / 70;
    } else {
      this.ySpeed += this.size / 350;
    }

    // Create some particles
    const secondsSinceLastParticleCreated =
      (performance.now() - this.lastParticleCreatedAt) / 1000;

    if (secondsSinceLastParticleCreated >= 1 / this.particlesPerSecond) {
      this.game.particles.push(new StarballParticle(this));
      this.lastParticleCreatedAt = performance.now();
    }
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size / 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  markAsShot() {
    this.hasBeenShotByPlayer = true;
    this.xSpeed = this.size;
    this.ySpeed = -this.size / 2;
  }
}
