import { Game } from "./game.js";

window.addEventListener("load", () => {
  const canvas = document.getElementById("gameCanvas");
  const starballsSlider = document.getElementById("starballsSlider");
  const starballsPerSecondDisplay = document.getElementById(
    "starballsPerSecondDisplay"
  );
  const ctx = canvas.getContext("2d");

  canvas.width = 800;
  canvas.height = 500;

  const game = new Game(canvas.width, canvas.height);

  function animate() {
    game.update();
    game.draw(ctx);

    requestAnimationFrame(animate);
  }

  animate();

  starballsSlider.addEventListener("change", (event) => {
    const newFrequency = event.target.value;
    game.starballsPerSecond = newFrequency;
    starballsPerSecondDisplay.innerText = newFrequency;
  });
});
