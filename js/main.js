import { Game } from "./game.js";

window.addEventListener('load', function() {
  const canvas = document.getElementById('gameCanvas');
  const playerSprites = document.getElementById('playerSprites');
  const ctx = canvas.getContext('2d');

  canvas.width = 800;
  canvas.height = 500;

  const game = new Game(canvas.width, canvas.height);

  function animate() {
    game.draw(ctx, playerSprites);

    requestAnimationFrame(animate);
  }

  animate();
})