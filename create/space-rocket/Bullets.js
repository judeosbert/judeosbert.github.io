/**
 * Created by jude on 13/12/16.
 */
function Bullets()
{
    this.x = player.getX();
    this.y = player.getY();
    this.r = 5;
    this.validBullet = true;

    this.update = function ()
    {
        this.y -= 10;
        if(this.y <1)
        {
            this.y  = -200;
            this.validBullet = false
        }
    }
    this.show = function()
    {
        noStroke();
        fill(255,0,0);
        ellipse(this.x,this.y,this.r,this.r);
    }
    this.getBulletValidity = function()
    {
        return this.validBullet;
    }
    this.getX = function()
    {
        return this.x;
    }
    this.getY = function()
    {
        return this.y;
    }

}