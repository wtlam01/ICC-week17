class Enemy extends GameObject {
    constructor(x, y, width, height, movingSpeedX) {
        super(x, y, width, height);
        this.movingSpeedX = movingSpeedX;
    }

    move(){
        this.x += this.movingSpeedX;

        if(this.x <= 0 || this.x + this.width >= width){
            this.movingSpeedX *= -1;
        }
    }

    draw(){
        fill('blue');
        rect(this.x, this.y, this.width, this.height);
    }
}