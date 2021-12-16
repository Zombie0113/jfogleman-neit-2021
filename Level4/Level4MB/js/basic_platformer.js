//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:canvas.height/2-100});

	platform0 = new GameObject();
		platform0.width = 200;
		platform0.x = platform0.width/2;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";
		
	platform1 = new GameObject();
		platform1.width = 200;
		platform1.height = 25;
		platform1.x = 450;
		platform1.y = canvas.height-100;
		platform1.color = "#66ff33";

	platform2 = new GameObject();
		platform2.width = 200;
		platform2.height = 25;
		platform2.x = 800;
		platform2.y = canvas.height-250;
		platform2.color = "#66ff33";
		
	platform3 = new GameObject();
		platform3.width = 200;
		platform3.height = 25;
		platform3.x = 500;
		platform3.y = canvas.height-400;
		platform3.color = "#66ff33";

	platform4 = new GameObject();
		platform4.width = 100;
		platform4.height = 25;
		platform4.x = 250;
		platform4.y = canvas.height-500;
		platform4.color = "#66ff33";

	platform5 = new GameObject();
		platform5.width = 100;
		platform5.height = 25;
		platform5.x = 100;
		platform5.y = canvas.height-600;
		platform5.color = "#66ff33";

	platform6 = new GameObject();
		platform6.width = 600;
		platform6.height = 25;
		platform6.x = 600;
		platform6.y = canvas.height-725;
		platform6.color = "#66ff33";


	goal = new GameObject({width:24, height:50, x:canvas.width-50, y:100, color:"#00ffff"});
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

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
		platform1.drawRect();
		platform2.drawRect();
	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	
	
	//---------Objective: Treasure!!!!!!!---------------------------------------------------------------------------------------------------- 
	//---------Run this program first.
	//---------Get Creative. Find a new way to get your player from the platform to the pearl. 
	//---------You can do anything you would like except break the following rules:
	//---------RULE1: You cannot spawn your player on the pearl!
	//---------RULE2: You cannot change the innitial locations of platform0 or the goal! 

	while(platform1.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;	
	}
	while(platform1.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}


	while(platform2.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
		platform2.drawRect();
		platform3.drawRect();
		platform4.drawRect();
		platform5.drawRect();
	}
	while(platform2.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform2.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform2.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}


	while(platform3.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform3.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform3.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}


	while(platform4.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform4.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform4.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform4.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}


	while(platform5.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
		platform5.drawRect();
		platform6.drawRect();
	}
	while(platform5.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform5.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform5.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}


	while(platform6.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform6.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform6.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform6.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}

	if(player.hitTestObject(goal))
	{
		goal.y = 10000;
		context.textAlign = "center";
		context.drawText("You Win!!!", canvas.width/2, canvas.height/2);
	}
	
	
	platform0.drawRect();


	//Show hit points
	player.drawRect();
	goal.drawCircle();
}

