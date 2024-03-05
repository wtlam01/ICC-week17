class Player extends GameObejct{
    isDead = false;
}

move(){
    if (keyIsDown(RIGHT_ARROW)){
       this.x += this.speed;
    } else if (keyIsDown(LEFT_ARROW)){
        this.x -= this.speed;
    }

}

draw(){
    fill(200, 200, 255);
    triangle(this.x, this.y + this.height,
        this.x + this.width / 2, this.y,
        this.x + this.width, this.y + this.height
        );
}
