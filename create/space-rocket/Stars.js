/**
 * Created by jude on 13/12/16.
 */
function Stars() {
    this.x = random(0,width);
    this.y = random(-100,0);
    this.speed = random(10,20);

    this.update= function()
    {
        this.y = this.y+this.speed;
        if(this.y > height)
        {
            this.x = random(0,width);
            this.y= random(-100,0);
        }

    }
    this.show = function()
    {
        noStroke();
        fill(255);
        ellipse(this.x,this.y,2,2);
    }

}
