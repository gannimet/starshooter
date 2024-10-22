export class GoalParticle {
  constructor(goal) {
    this.goal = goal;

    this.size = Math.random() * 15;
    this.x = goal.goalX;
    this.y = Math.random() * goal.goalHeight + goal.goalY;
    this.hue = goal.hue;
    this.transparency = 1;
    this.markedForDeletion = false;
  }

  update() {
    this.size += 4;
    this.transparency -= 0.05;

    if (this.transparency <= 0) {
      this.markedForDeletion = true;
    }
  }

  draw(ctx) {
    if (this.transparency >= 0) {
      ctx.fillStyle = `hsl(${this.hue}, 50%, 65%, ${this.transparency})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size / 2, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
}
