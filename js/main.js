import { Game } from "./game.js";

window.addEventListener("load", () => {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = 800;
  canvas.height = 500;

  const game = new Game(canvas.width, canvas.height);

  game.draw(ctx);
});
