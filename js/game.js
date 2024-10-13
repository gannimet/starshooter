import { InputHandler } from "./input.js";
import { Player } from "./player.js";

export class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.inputHandler = new InputHandler();
    this.player = new Player(this);
  }

  update() {}

  draw(ctx) {
    this.player.draw(ctx);
  }
}
