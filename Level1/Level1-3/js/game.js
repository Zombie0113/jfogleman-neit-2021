//Set variables
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");	
var timer = setInterval(animate, interval);
var interval = 1000/60;
var ball = new Ball();

//Set the ball's velocity
ball.vx = 2;
ball.vy = 0;

function animate()
{
    //Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);

    //Move the ball
    ball.move();

    //Check for the boundaries and reverse the velocity
    if (ball.x > canvas.width - ball.width/2)
    {
        ball.vx = -ball.vx;
    }
    if (ball.x < 0 + ball.width/2)
    {
        ball.vx = -ball.vx;
    }

    //Draw the ball
    ball.draw();
}