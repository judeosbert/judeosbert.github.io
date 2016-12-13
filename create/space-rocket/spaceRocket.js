/**
 * Created by jude on 13/12/16.
 */
var score = 0;
var stars =[];
var player;
var rocketImg;
var bullet;
var bullets = [];
var shoot;
var alienImg;
var aliens=[];
var bulletHit;
var playerkill;
var gameEndBoolean = false;
function setup()
{
    createCanvas(500,500);

    for(var i = 0; i<500;i++)
    {
        stars[i] = new Stars();
    }
    for(var i = 0; i<20;i++)
    {
        aliens[i] = new Aliens();
    }
    player = new PlayerRocket();
    rocketImg = loadImage("rocket.png");
    alienImg = loadImage("alien.png");
    shoot = loadSound("shoot.wav");
    bulletHit = loadSound("invaderkilled.wav");
    playerkill = loadSound("explosion.wav");


}
function draw()
{

    background(0);
    noCursor();
    var c = color(255, 204, 0);
    stroke(c);
    fill(c);
    textSize(20);
    if (!gameEndBoolean) {


        score = player.getScore();
        text("Score " + score, 50, 50);
        detectCollision();
        for (var i = 0; i < stars.length; i++) {
            stars[i].show();
            stars[i].update();
        }
        player.update();
        player.show();
        for (var j = 0; j < bullets.length; j++) {
            bullets[j].update();
            bullets[j].show();
        }
        for (var i = 0; i < aliens.length; i++) {
            aliens[i].show();
            aliens[i].update();
        }
    }
    else
    {
        textSize(40);
        text("Game Over",(width/2)-130,height/2);

    }



}


function keyPressed()
{
    console.log("Pressed");
    bullet = new Bullets();
    bullets.push(bullet);
    if(!gameEndBoolean)
    shoot.play();

}
function detectCollision()
{
for (var i = 0; i < aliens.length;i++)
{
    for (var j = 0 ;j <bullets.length;j++) {
        if (bullets[j].getBulletValidity()) {

        var distX = aliens[i].getX() - bullets[j].getX();
        var distY = aliens[i].getY() - bullets[j].getY();

        var distance = sqrt((distX * distX) + (distY * distY));
        if (distance <= 25) {
            bulletHit.play();
            aliens[i].reinit();
            player.scoreInc();

        }
    }

    }
    var distX = aliens[i].getX() - player.getX();
    var distY = aliens[i].getY() - player.getY();
    var distance = sqrt((distX * distX) + (distY * distY));
    if (distance <= 24) {
        gameEndBoolean = true;
        playerkill.play();

        player.score = 0;
        player.hide();
        for (var i = 0; i < aliens.length;i++) {
            aliens[i].hide();
        }
        return;



    }

}
}
