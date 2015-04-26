var gameWidth=5;
var gameHeight=6;
function enemyInitialX(){return Math.round((-2*Math.random()-1))};
function enemyInitialY(){return Math.round((2*Math.random()+1))};
function randomSpeed(){return Math.random()*4+1};

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x =enemyInitialX();
    this.y =enemyInitialY();
    this.speed = randomSpeed();
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x = this.x+this.speed*dt;
    if(this.x>gameWidth){
        this.x = enemyInitialX();
        this.y = enemyInitialY();
        this.speed = randomSpeed();
    }
        

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x*101, this.y*83-27);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(){
    Enemy.call(this);
    this.sprite = 'images/char-boy.png';
    this.x = 2;
    this.y = 5;
    console.log("player created");
};
Player.prototype=Object.create(Enemy.prototype);
Player.prototype.constructor=Player;
Player.prototype.handleInput = function (input){
    if (input == "up"){
        this.y=this.y-1;
    }
    if (input == "left"){
        this.x=this.x-1;
    }
    if (input == "right"){
        this.x=this.x+1;
    }
    if (input == "down"){
        this.y=this.y+1;
    }

};
Player.prototype.update = function() {}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//var enemy1 = new Enemy();
//var enemy2 = new Enemy();
var allEnemies=[];
for (i=0;i<Math.random()*5;i++){
    allEnemies.push(new Enemy())
}
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    console.log(allowedKeys[e.keyCode])
    player.handleInput(allowedKeys[e.keyCode]);
});
