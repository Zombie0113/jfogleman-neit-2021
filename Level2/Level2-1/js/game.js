//Set variables
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");	
var timer = setInterval(animate, interval);
var interval = 1000/60;

var player1 = new GameObject;

function animate()
{
    //Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

    //Draw the paddle
    player1.drawRect();
}