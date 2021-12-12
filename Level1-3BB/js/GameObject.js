function GameObject(x,y,w,h,color)
{
    //Set the object's position
    if (x == undefined)
    {
        this.x = canvas.width/2;
    } else {
        this.x = x;
    }
    if (y == undefined)
    {
	    this.y = canvas.height/2;
    } else {
        this.y = y;
    }

    //Set the object's dimensions
    if (w == undefined)
    {
        this.width = 80;
    } else {
        this.width = w;
    }
    if (h == undefined)
    {
        this.height = 80;
    } else {
        this.height = h;
    }

    //Set the object's color
    if (color == undefined)
    {
        this.color = "#222222";
    } else {
        this.color = color;
    }

    //Set the object's inital force
    this.force = 0;

    //Set the objects inital gravity
    this.gravity = 1;
    this.gravitySpeed = 0;

    //Set the object's initial velocity
    this.vx = 5;
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
			context.translate(this.x, this.y);
			context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
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
        this.gravitySpeed += this.gravity;
		this.x += this.vx;
        if (this.gravitySpeed >= 9.8)
        {
            this.gravitySpeed = 9.8;
        }
		this.y += this.vy + this.gravitySpeed;
	}
}