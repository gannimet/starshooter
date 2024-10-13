import { InputHandler } from "./input.js";
import { Player } from "./player.js";

export class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.inputHandler = new InputHandler();
    this.player = new Player(this);
  }

  update() {
    this.player.update(this.inputHandler.keys);
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
    this.player.draw(ctx);
  }
}
