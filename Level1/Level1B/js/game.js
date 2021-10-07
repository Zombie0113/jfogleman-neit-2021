//Set variables
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");	
var timer = setInterval(animate, interval);
var interval = 1000/60;
var ball = new Ball();

//Set the ball's velocity
ball.vx = 1;
ball.vy = 1;

function animate()
{
    //Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);

    //Move the ball
    ball.move();

    //Check for the boundaries of x and reverse the velocity
    if (ball.x > canvas.width - ball.width/2 || ball.x < 0 + ball.width/2)
    {
        ball.vx = -ball.vx;
        ball.color = "#34abeb";
    }

    //Check for the boundaries of y and reverse the velocity
    if (ball.y > canvas.height - ball.height/2 || ball.y < 0 + ball.height/2)
    {
        ball.vy = -ball.vy;
        ball.color = "#18497d";
    }

    //Draw the ball
    ball.draw();
}