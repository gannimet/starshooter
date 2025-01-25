const gameKeys = ["ArrowUp", " "];

export class InputHandler {
  constructor() {
    this.keys = new Set();

    this.init();
  }

  init() {
    window.addEventListener("keydown", (event) => {
      if (gameKeys.includes(event.key)) {
        this.keys.add(event.key);
      }
    });

    window.addEventListener("keyup", (event) => {
      if (gameKeys.includes(event.key)) {
        this.keys.delete(event.key);
      }
    });
  }
}
