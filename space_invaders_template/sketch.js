// let gameObject = new GameObject(320, 420, 20, 20)

let player = new Player(320, 420, 20, 20);
let enemies = [];

function setup(){
    createCanvas(640, 480);

    for(let i = 0; i < 3; i++){
        for (let j = 0; j < 4; j++){
            let enemyX = j * 80 + 40;
            let enemyY = j* 40 + 40;
            let movingSpeedX = i % 2 === 0 ? 1 : -1;
            let enemy = new Enemy(enemyX,enemyY, 20, 20, movingSpeedX);
            enemies.push(enemy);
        }
    }

}

function draw(){
    background(0);

    for (let enemy of enemies){
        enemy.move();
        enemy.draw();
    }
    player.move();
    player.draw();
    // gameObject.draw();
}