export class InputHandler {
  constructor() {
    this.keys = new Set();

    this.init();
  }

  init() {
    window.addEventListener("keydown", (event) => {
      if (event.key === " " || event.key === "ArrowUp") {
        this.keys.add(event.key);
      }

      console.log("keys:", this.keys);
    });

    window.addEventListener("keyup", (event) => {
      if (event.key === " " || event.key === "ArrowUp") {
        this.keys.delete(event.key);
      }

      console.log("keys:", this.keys);
    });
  }
}
