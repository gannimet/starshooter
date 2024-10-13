export class InputHandler {
  constructor() {
    this.keys = [];

    this.init();
  }

  init() {
    window.addEventListener("keydown", function (event) {
      console.log("key:", event.key);
    });
  }
}
