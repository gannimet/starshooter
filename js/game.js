import { Player } from "./player.js";

export class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.player = new Player(this);
  }

  draw(ctx) {
    this.player.draw(ctx);
  }
}
