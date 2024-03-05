class GameObject{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 5;
    }

    move(){

        }

        draw(){
            fill('red');
            rect(this.x, this.y, this.width, this.height);
        }
    
}