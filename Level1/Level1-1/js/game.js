//Set variables
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");	
var timer = setInterval(animate, interval);
var interval = 1000/60;
var ball = new Ball();

function animate()
{
    //Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

    //Draw the ball
    ball.draw();
}