//Define Booleans for each key
var w = false;
var s = false;

var up = false;
var down = false;

//Add Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//On key press
function press(e)
{
	if(e.keyCode == 87)
	{
		w = true;
	}
	if(e.keyCode == 83)
	{
		s = true;
	}
	if(e.keyCode == 38)
	{
		up = true;
	}
	if(e.keyCode == 40)
	{
		down = true;
	}
}

//On key release
function release(e)
{
	if(e.keyCode == 87)
	{
		w = false;
	}
	if(e.keyCode == 83)
	{
		s = false;
	}
	if(e.keyCode == 38)
	{
		up = false;
	}
	if(e.keyCode == 40)
	{
		down = false;
	}
}