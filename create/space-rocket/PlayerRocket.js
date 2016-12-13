/**
 * Created by jude on 13/12/16.
 */
function PlayerRocket()
{
    this.x = random(0,width);
    this.y = random(0,height);
    this.score = 0;

    this.show = function()
    {
        noFill();
        noStroke();
        ellipse(this.x,this.y,4,4);
        image(rocketImg,this.x,this.y,50,60);

    }
    this.update = function () {

        this.x = mouseX;
        this.y = mouseY;

    }

    this.getX = function()
    {
        return this.x;
    }
    this.getY = function()
    {
        return this.y;
    }
    this.scoreInc = function()
    {
        this.score++;
    }
    this.scoreDec = function()
    {
        this.score--;
    }
    this.getScore = function()
    {
        return this.score;
    }
    this.hide = function () {
        this.x = - width;
        this.y = - height;

    }
}