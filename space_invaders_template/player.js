class Player extends GameObejct {
    constructor(x, y, width, height){
    super(x, y, width, height);
        this.isDead = false;
        this.speed = 5;
    }

    move() {
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += this.speed;
        } else if (keyIsDown(LEFT_ARROW)) {
            this.x -= this.speed;
        }

        this.x = constrain(this.x, 0, width - this.width);

    }

    draw() {
        fill('lawngreen');
        triangle(this.x, this.y + this.height,
            this.x + this.width / 2, this.y,
            this.x + this.width, this.y + this.height
        );
    }
}
