//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	platform0 = new GameObject();
		platform0.width = canvas.width;
		platform0.x = canvas.width/2;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";	

		player = new GameObject({x:100, y:canvas.height/2-100});
		guard = new GameObject({x:800, y:platform0.y - platform0.height - 1, color:"#c10f0f"});

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	var randomNum;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	if(a)
	{
		player.vx += -player.ax * player.force;
	}
	if(d)
	{
		player.vx += player.ax * player.force;
	}

	if(space)
	{
		player.color = "#1a5581"
		player.vx = 0;
		player.vy = 0;
	}
	if(!space)
	{
		player.color = "#189cff"
	}

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);
	

	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0 && !space)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.right()) && player.vx >=0 && !space)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.top()) && player.vy <=0 && !space)
	{
		player.y++;
		player.vy = 0;
	}
	
	if(guard.y == player.y)
	{
		if (guard.x >= player.x)
		{
			guard.x--;
			if (guard.x == player.x)
			{
				guard.x = player.x - 150;
			}
		}
		else if (guard.x <= player.x)
		{
			guard.x++;
			if (guard.x == player.x)
			{
				guard.x = player.x + 150;
			}
		}
	}

	if(guard.hitTestPoint(player.left()) && !space)
	{
		player.y = 10000;
		console.log("Game Over");
	}
	if(guard.hitTestPoint(player.right()) && !space)
	{
		player.y = 10000;
		console.log("Game Over");
	}
	if(guard.hitTestPoint(player.top()) && !space)
	{
		player.y = 10000;
		console.log("Game Over");
	}

	platform0.drawRect();

	//Show hit points
	player.drawRect();
	guard.drawRect();
}

