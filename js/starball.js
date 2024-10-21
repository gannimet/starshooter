import { Particle } from "./particle.js";

export class Starball {
  constructor(game) {
    this.game = game;

    this.size = Math.random() * 10 + 10;
    this.x = (this.game.width * 2) / 3 + (Math.random() * 100 - 50);
    this.y = -this.size / 2;
    this.xSpeed = -4;
    this.ySpeed = 0;
    this.color = `rgb(255, ${255 - this.size * 3}, 0)`;
    this.markedForDeletion = false;
    this.markedAsScored = false;
    this.hasEntered = false;
    this.hasBeenShotByPlayer = false;
    this.particlesPerSecond = 20;
    this.lastParticleCreatedAt = 0;
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

    if (this.hasBeenShotByPlayer) {
      this.xSpeed = (this.size * 3) / 4;
      this.ySpeed += this.size / 100;
    } else {
      this.ySpeed += this.size / 400;
    }

    if (this.y > this.size) {
      this.hasEntered = true;
    }

    // Create some particles
    const timeSinceLastParticleCreated =
      (performance.now() - this.lastParticleCreatedAt) / 1000;

    if (timeSinceLastParticleCreated >= 1 / this.particlesPerSecond) {
      this.game.particles.push(new Particle(this));
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
    this.ySpeed -= this.size / 3;
  }
}
