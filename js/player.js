const ShootingStates = {
  IDLE: 0,
  INTERMEDIATE_1: 1,
  INTERMEDIATE_2: 2,
  INTERMEDIATE_3: 3,
  INTERMEDIATE_4: 4,
  FULLY_EXTENDED: 5,
};

const ShootingDirections = {
  UP: 1,
  DOWN: -1,
  NONE: 0,
};

export class Player {
  constructor(game) {
    this.game = game;

    this.playerSprites = document.getElementById("playerSprites");
    this.playerWidth = 68;
    this.playerHeight = 100;
    this.playerX = 10;
    this.playerY = (this.game.height - this.playerHeight) / 2;
    this.shootingState = ShootingStates.IDLE;
    this.shootingDirection = ShootingDirections.NONE;
    this.shootingFps = 20;
    this.lastUpdateTime = 0;
  }

  update(inputKeys) {
    // Moving up and down
    if (inputKeys.has("ArrowUp")) {
      this.playerY -= 2;
    } else {
      this.playerY++;
    }

    // Shooting
    const diffSinceLastUpdate =
      (performance.now() - this.lastUpdateTime) / 1000;

    if (diffSinceLastUpdate < 1 / this.shootingFps) {
      return;
    }

    if (inputKeys.has(" ") && this.shootingState === ShootingStates.IDLE) {
      this.shootingDirection = ShootingDirections.UP;
    }

    if (
      (this.shootingDirection === ShootingDirections.UP &&
        this.shootingState < ShootingStates.FULLY_EXTENDED) ||
      (this.shootingDirection === ShootingDirections.DOWN &&
        this.shootingState > ShootingStates.IDLE)
    ) {
      this.shootingState += this.shootingDirection;
    }

    if (this.shootingState === ShootingStates.FULLY_EXTENDED) {
      this.shootingDirection = ShootingDirections.DOWN;
    } else if (this.shootingState === ShootingStates.IDLE) {
      this.shootingDirection = ShootingDirections.NONE;
    }

    this.lastUpdateTime = performance.now();
  }

  draw(ctx) {
    ctx.drawImage(
      this.playerSprites,
      this.playerWidth * this.shootingState,
      0,
      this.playerWidth,
      this.playerHeight,
      this.playerX,
      this.playerY,
      this.playerWidth,
      this.playerHeight
    );
  }
}