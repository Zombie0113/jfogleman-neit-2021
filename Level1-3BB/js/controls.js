//Define Booleans for each key
var a = false;
var d = false;

//Add Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//On key press
function press(e)
{
	if(e.keyCode == 65)
	{
		a = true;
	}
	if(e.keyCode == 68)
	{
		d = true;
	}
}

//On key release
function release(e)
{
	if(e.keyCode == 65)
	{
		a = false;
	}
	if(e.keyCode == 68)
	{
		d = false;
	}
}