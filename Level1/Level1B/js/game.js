//Set variables
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");	
var timer = setInterval(animate, interval);
var interval = 1000/60;
var ball = new Ball(); 
var randomNum;
const randomColors = new Array("#a20000", "#a15203", "#a1a101", "#ff0000", "#336601", "#088446", "#008282", "#004183", "#0121cc", "#450a80", "#6a016a", "#99014e");
const nameColors = new Array("Dark Red", "Umber Brown", "Mustard Yellow", "Bright Red", "Olive Green", "Green", "Teal", "Navy Blue", "Blue", "Purple", "Violet", "Fuchsia");

//Set the ball's velocity
ball.vx = 1;
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

    //Move the ball
    ball.move();

    //Check for the boundaries of x and reverse the velocity
    if (ball.x > canvas.width - ball.width/2 || ball.x < 0 + ball.width/2)
    {
        randomNum = Math.floor(Math.random() * 12)
        ball.vx = -ball.vx;
        ball.color = randomColors[randomNum];
        document.getElementById("color").innerHTML = "Current Color: " + nameColors[randomNum];
    }

    //Check for the boundaries of y and reverse the velocity
    if (ball.y > canvas.height - ball.height/2 || ball.y < 0 + ball.height/2)
    {
        randomNum = Math.floor(Math.random() * 12)
        ball.vy = -ball.vy;
        ball.color = randomColors[randomNum];
        document.getElementById("color").innerHTML = "Current Color: " + nameColors[randomNum];
    }

    //Draw the ball
    ball.draw();
}