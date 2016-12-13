var n =1;
var c =4;
function setup()
{
createCanvas(800,800);
    angleMode(DEGREES);
    background(0);
    colorMode(HSB);


}

function draw()
{

    var angle = n*137.5;
    var r = c* sqrt(n);

    var x = r* cos(angle) + width/2;
    var y = r*sin(angle) + height/2;
    var h = random(0,255);
    var s = random(0,255);
    var b = random(0,255);
    fill(h,s,b);
    noStroke();
    ellipse(x,y,4,4);
    n++;
}
