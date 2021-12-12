//Set variables
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var timer = setInterval(animate, interval);
var interval = 1000/60;

//Set score variables
var p1Wins = 0;
var p2Wins = 0;

//Set text variables
var c = document.getElementById("canvas")
var ctx = c.getContext("2d");
ctx.font = "20px Courier New";

//Player1 variables
var player1 = new GameObject;
player1.x = canvas.width/32;
player1.y = canvas.height/2;
player1.width = 25;
player1.height = 150;
player1.color = "#222222";

//Player2 variables
var player2 = new GameObject;
player2.x = canvas.width-32;
player2.y = canvas.height/2;
player2.width = 25;
player2.height = 150;
player2.color = "#888888";

//Ball variables
var ball = new GameObject;
ball.x = canvas.width/2;
ball.y = canvas.height/2;
ball.width = 50;
ball.height = 50;
ball.color = "#000000";
ball.force = 1;

var randomNum;
const randomColors = new Array("#a20000", "#a15203", "#a1a101", "#ff0000", "#336601", "#088446", "#008282", "#004183", "#0121cc", "#450a80", "#6a016a", "#99014e");
const nameColors = new Array("Dark Red", "Umber Brown", "Mustard Yellow", "Bright Red", "Olive Green", "Green", "Teal", "Navy Blue", "Blue", "Purple", "Violet", "Fuchsia");

//Set the ball's velocity
ball.vx = 2;
ball.vy = 1;

function resetBall() 
{
    ball.x = canvas.width/2;
	ball.y = canvas.height/2;
}

function animate()
{
    //Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);

    //Move the player up
	if(w && player1.y > 0 + player1.height/2)
	{
		console.log("Moving P1 Up");
		player1.y += -2;
	}
	//Move the player down
	if(s && player1.y <= canvas.height - player1.height/2)
	{
		console.log("Moving P1 Down");
		player1.y += 2;
	}

        //Move the player up
	if(up && player2.y > 0 + player2.height/2)
	{
		console.log("Moving P2 Up");
		player2.y += -2;
	}
	//Move the player down
	if(down && player2.y <= canvas.height - player2.height/2)
	{
		console.log("Moving P2 Down");
		player2.y += 2;
	}

	ball.move();

    //Check if the ball passes player1's paddle
    if (ball.x < 0 + ball.width/2)
    {
        ball.x = canvas.width/2;
        ball.y = canvas.height/2;
        ball.color = "#000000";
        document.getElementById("color").innerHTML = "Current Color: Black";
        p2Wins += 1;
    }
    //Check if the ball passes player2's paddle
    else if (ball.x > canvas.width - ball.width/2)
    {
        ball.x = canvas.width/2;
        ball.y = canvas.height/2;
        ball.color = "#000000";
        document.getElementById("color").innerHTML = "Current Color: Black";
        p1Wins += 1;
    }

	//Check for the boundaries of x and reverse the velocity (in case of error)
    if (ball.x > canvas.width - ball.width/2 || ball.x < 0 + ball.width/2)
    {
        randomNum = Math.floor(Math.random() * 12);
        ball.vx = -ball.vx;
        ball.color = randomColors[randomNum];
        document.getElementById("color").innerHTML = "Current Color: ERROR";
    }
	//Check for the boundaries of y and reverse the velocity
    if (ball.y > canvas.height - ball.height/2 || ball.y < 0 + ball.height/2)
    {
        randomNum = Math.floor(Math.random() * 12);
        ball.vy = -ball.vy;
    }
    //Check for the bounding box for player1 and reverse the velocity
    if(ball.hitTestObject(player1))
    {
        //Check for top section
        if (ball.y < player1.y - player1.height/6)
        {
            ball.vx = -2;
            ball.vy = -ball.force;
            randomNum = Math.floor(Math.random() * 12);
            ball.color = randomColors[randomNum];
            document.getElementById("color").innerHTML = "Current Color: " + nameColors[randomNum];
        }
        //Check for bottom section
        if(ball.y > player1.y + player1.height/6)
        {
            ball.vx = -ball.vx;
            ball.vy = ball.force;
            randomNum = Math.floor(Math.random() * 12);
            ball.color = randomColors[randomNum];
            document.getElementById("color").innerHTML = "Current Color: " + nameColors[randomNum];
        }
        else
        {
            ball.vx = -ball.vx;
            randomNum = Math.floor(Math.random() * 12);
            ball.color = randomColors[randomNum];
            document.getElementById("color").innerHTML = "Current Color: " + nameColors[randomNum];
        }
    }

        //Check for the bounding box for player2 and reverse the velocity
        if(ball.hitTestObject(player2))
        {
            //Check for top section
            if (ball.y < player2.y - player2.height/6)
            {
                ball.vx = 2;
                ball.vy = -ball.force;
                randomNum = Math.floor(Math.random() * 12);
                ball.color = randomColors[randomNum];
                document.getElementById("color").innerHTML = "Current Color: " + nameColors[randomNum];
            }
            //Check for bottom section
            if(ball.y > player2.y + player2.height/6)
            {
                ball.vx = -ball.vx;
                ball.vy = ball.force;
                randomNum = Math.floor(Math.random() * 12);
                ball.color = randomColors[randomNum];
                document.getElementById("color").innerHTML = "Current Color: " + nameColors[randomNum];
            }
            else
            {
                ball.vx = -ball.vx;
                randomNum = Math.floor(Math.random() * 12);
                ball.color = randomColors[randomNum];
                document.getElementById("color").innerHTML = "Current Color: " + nameColors[randomNum];
            }
        }

    p1Total = p1Wins.toString();
    p2Total = p2Wins.toString();
    console.log("Print Score");
    ctx.fillText("Scores", canvas.width/2-10, 25);
    ctx.fillText("P1: " + p1Total + " | P2: " + p2Total, canvas.width/2-50, 50);

    //Draw the objects
    player1.drawRect();
    player2.drawRect();
	ball.drawCircle();
}