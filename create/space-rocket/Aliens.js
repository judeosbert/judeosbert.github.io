/**
 * Created by jude on 13/12/16.
 */
function Aliens() {
    this.x = random(0, width);
    this.y = random(-200, -100);
    this.speed = 1;
    this.bounceLeft = false;
    this.bounceRight = false;
    this.n = 1;

    this.show = function () {
        image(alienImg, this.x, this.y, 30, 40);
        noFill();
        noStroke();
        ellipse(this.x, this.y, 20, 20);

    }
    this.update = function () {

        if (player.score >(this.n*50))
        {
            this.speed++;
            this.n++;
        }
        this.y = this.y + this.speed;
        if (this.y > height) {
            this.reinit();
        }
        if (this.x<width/2)
        {
            if (this.bounceLeft)
                this.x = this.x+1;
            else
                this.x = this.x-1;
            if(this.x<1)
            {
                this.bounceLeft = true;
            }

        }
        else
        {
            if (this.bounceRight)
                this.x = this.x-1;
            else
                this.x = this.x+1;
            if(this.x>width-40)
            {
                this.bounceRight = true;
            }
        }



    }
    this.reinit = function ()
    {
        this.x = random(0, width);
        this.y = random(-200, -100);
        this.speed = 1;
        this.bounceLeft = false;
        this.bounceRight = false;
    }
    this.getX = function()
    {
        return this.x;
    }
    this.getY = function()
    {
        return this.y;
    }
    this.hide = function ()
    {
        this.x = - 200;
        this.y = - 100;

    }


}
