function GameObject()
{
    //Set the object's position
    this.x = canvas.width/2;
	this.y = canvas.height/2;

    //Set the object's dimensions
    this.width = 100;
	this.height = 100;

    //Set the object's color
    this.color = "#222222";

    //Set the object's inital force
    this.force = 0;

    //Set the object's initial velocity
    this.vx = 0;
	this.vy = 0;

    //Set the object's bounding boxes
    this.top = function()
    {
        return this.y - this.height/2;
    }
    this.bottom = function()
    {
        return this.y + this.height/2;
    }
    this.left = function()
    {
        return this.x - this.width/2;
    }
    this.right = function()
    {
        return this.x + this.width/2;
    }

    this.hitTestObject = function(obj)
    {
     if(this.left() < obj.right() &&
        this.right() > obj.left() &&
        this.top() < obj.bottom() &&
        this.bottom() > obj.top() )
        {
          return true;
        }
     return false;
    }

    //Draw the paddle
    this.drawRect = function()
    {
        context.save();
			context.fillStyle = this.color;
			context.translate(this.x/8, this.y);
			context.fillRect((-this.width/2), (-this.height/2), this.width/4, this.height);
		context.restore();
    }

    //Draw the ball
    this.drawCircle = function()
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