// let gameObject = new GameObject(320, 420, 20, 20)

let player = new Player(320, 420, 20, 20);

function setup(){
    createCanvas(640, 480);

}

function draw(){
    player.draw();
    // gameObject.draw();
}