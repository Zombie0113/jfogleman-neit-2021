function Ball()
{
    //Set the ball's position
    this.x = canvas.width/2;
	this.y = canvas.height/2;

    //Set the ball's dimensions
    this.width = 100;
	this.height = 100;

    //Set the ball's color
    this.color = "#18497d";

    //Set the ball's inital force
    this.force = 0;

    //Set the ball's initial velocity
    this.vx = 0;
	this.vy = 0;

    //Draw the ball to the screen
    this.draw = function()
    {
        context.save();
            context.fillStyle = this.color;
            context.translate(this.x, this.y);
            context.beginPath();
            context.arc(0,0,this.width/2,0,360*Math.PI/180,true);
            context.closePath();
            context.fill();
        context.restore();
    }

    this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
}