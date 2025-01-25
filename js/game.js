import { InputHandler } from "./input.js";
import { Player } from "./player.js";
import { Starball } from "./starball.js";

export class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.inputHandler = new InputHandler();
    this.player = new Player(this);
    this.starball = new Starball(this);
  }

  update() {
    this.player.update(this.inputHandler.keys);
    this.starball.update();
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
    this.player.draw(ctx);
    this.starball.draw(ctx);
  }
}
