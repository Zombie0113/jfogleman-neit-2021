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

    //Move the Player to the right
	if(w)
	{
		console.log("Moving Up");
		player1.y += -2;
	}
	if(s)
	{
		console.log("Moving Down");
		player1.y += 2;
	}

    //Draw the paddle
    player1.drawRect();
}