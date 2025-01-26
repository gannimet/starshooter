import { Background } from "./background.js";
import { Goal } from "./goal.js";
import { HUD } from "./hud.js";
import { InputHandler } from "./input.js";
import { Player, ShootingStates } from "./player.js";
import { Starball } from "./starball.js";

export class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.inputHandler = new InputHandler();
    this.player = new Player(this);
    this.starballs = [];
    this.starballsPerSecond = 0.5;
    this.lastStarballCreatedAt = 0;
    this.goal = new Goal(this);
    this.score = 0;
    this.hud = new HUD(this);
    this.background = new Background(this);
    this.particles = [];
  }

  update() {
    // Clean up starballs that are out of bounds
    this.starballs = this.starballs.filter((starball) => {
      return !starball.markedForDeletion;
    });

    // Clean up particles that have become invisible
    this.particles = this.particles.filter((particle) => {
      return !particle.markedForDeletion;
    });

    const secondsSinceLastStarballCreated =
      (performance.now() - this.lastStarballCreatedAt) / 1000;

    if (secondsSinceLastStarballCreated >= 1 / this.starballsPerSecond) {
      this.starballs.push(new Starball(this));
      this.lastStarballCreatedAt = performance.now();
    }

    this.background.update();
    this.player.update(this.inputHandler.keys);
    this.starballs.forEach((starball) => {
      starball.update();

      if (this.player.shootingState >= ShootingStates.INTERMEDIATE_3) {
        this.player.checkCollision(starball);
      }

      if (starball.hasBeenShotByPlayer) {
        this.goal.checkCollision(starball);
      }
    });
    this.goal.update();
    this.hud.update();
    this.particles.forEach((particle) => {
      particle.update();
    });
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
    this.background.draw(ctx);
    this.player.draw(ctx);
    this.starballs.forEach((starball) => {
      starball.draw(ctx);
    });
    this.goal.draw(ctx);
    this.hud.draw(ctx);
    this.particles.forEach((particle) => {
      particle.draw(ctx);
    });
  }

  scoreGoal(starball) {
    if (!starball.markedAsScored) {
      this.score++;
      starball.markedAsScored = true;
    }
  }
}
