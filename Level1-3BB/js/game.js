//Set variables
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var timer = setInterval(animate, interval);
var interval = 1000/60;

//Set score variables
var score = 0;

//Set text variables
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.font = "16px Arial black";
ctx.fillStyle = "#555555";


//Player variables
var player1 = new GameObject;
player1.x = canvas.width/2;
player1.y = canvas.height-50;
player1.width = 250;
player1.height = 40;
player1.color = "#00ffff";

//Ball variables
var ball = new GameObject;
ball.x = canvas.width/2;
ball.y = canvas.height/2;
ball.width = 80;
ball.height = 80;
ball.color = "#ff00ff";
ball.force = 5;

//Set the ball's velocity
ball.vx = 0;
ball.vy = 0;

//Set the player's acceleration
var ax = 0.1;
var force = 0.1;
var vx = 0;

function resetBall() 
{
    ball.x = canvas.width/2;
	ball.y = canvas.height/2;
}

function animate()
{
    //Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);

    //Move the player left
	if(a)
	{
		console.log("Moving player left");
        vx += -(ax * force);
	}
	//Move the player right
	if(d)
	{
		console.log("Moving player right");
        vx += ax * force;
	}

    //Accelerate the player
    if(player1.x <= canvas.width - player1.width/2 && player1.x >= 0 + player1.width/2)
    {
        player1.x += vx;
    }
    //Check for right boundary
    else if (player1.x >= canvas.width - player1.width/2)
    {
        vx = 0;
        player1.x = canvas.width - player1.width/2;
    }
    //Check for left boundary
    else if (player1.x <= 0 + player1.width/2)
    {
        vx = 0;
        player1.x = 0 + player1.width/2;
    }

    ball.vy += 1;
    ball.vx *= 0.98;
    ball.vx *= 0.98;

	ball.move();

	//Check for right boundary
    if (ball.x > canvas.width - ball.width/2)
    {
        ball.x = canvas.width - ball.width/2;
        ball.vx = -ball.vx;
    }
    //Check for left boundary
    else if (ball.x < 0 + ball.width/2)
    {
        ball.x = 0 + ball.width/2;
        ball.vx = -ball.vx;
    }
	//Check for bottom boundary
    if (ball.y > canvas.height - ball.height/2)
    {
        score = 0;
        ball.y = canvas.height - ball.height/2;
        ball.vy = -ball.vy;
    }
    //Check for top boundary
    if (ball.y < 0 + ball.height/2)
    {
        ball.y = 0 + ball.height/2;
        ball.vx = -2;
        ball.vy = -ball.vy * 0.67;
    }

    //Check for the bounding box for player1 and reverse the velocity
    if(ball.hitTestObject(player1))
    {
        ball.vy = -35;
        ball.y = player1.y - player1.height/2 - ball.height/2;
        score++;
        //000000
        //Check for far left section
        if (ball.x < player1.x - player1.width/6 && ball.x > player1.x - player1.width/3)
        {
            ball.vx = -ball.force;
        }
        //Check for middle left section
        else if (ball.x < player1.x - player1.width/3)
        {
            ball.vx = -ball.force * 5;
        }
        //Check for middle right section
        else if(ball.x > player1.x + player1.width/6 && ball.x < player1.x + player1.width/3)
        {
            ball.vx = ball.force;
        }
        //Check for far right section
        else if(ball.x > player1.x + player1.width/6)
        {
            ball.vx = ball.force * 5;
        }
    }

    //Display the score
    totalScore = score.toString();
    console.log("Print Score");
    ctx.fillText("Score: " + totalScore, 80, 25);

    //Draw a line connecting the paddle and ball
    context.save();
    context.strokeStyle = "#000000";
    context.beginPath();
    context.moveTo(ball.x, ball.y);
    context.lineTo(player1.x, player1.y);
    context.closePath();
    context.lineWidth = 4; 
    context.stroke();
    context.restore();

    //Draw the objects
    player1.drawRect();
	ball.drawCircle();
}