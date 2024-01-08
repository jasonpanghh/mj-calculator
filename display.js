let group_1 = 0;
let group_number = 0;
let suit_type = 126976;
let group_type = "Pong";
let counter = 0;
let temp_tile = "";
let output_tile = "";

function mark() 
{
	group_1 = 126976;
	document.getElementById("tg1c").innerHTML = String.fromCodePoint(group_1);
}

document.addEventListener('DOMContentLoaded', function() 
{
	// record which group of tiles to be changed
	document.querySelectorAll('button[button-type="tg"]').forEach(button =>
	{
		button.onclick = function()
		{
			group_number = button.dataset.gp;
		};
	})

	// record type of suit and change the suit of last selection page
	document.querySelectorAll('button[button-type="st"]').forEach(button =>
	{
		button.onclick = function()
		{
			suit_type = parseInt(button.dataset.st);
			document.querySelectorAll('button[button-type="t"]').forEach(button =>
			{
				button.getElementsByTagName('span')[0].innerHTML = String.fromCodePoint(suit_type + parseInt(button.dataset.t)) + "&#xFE0E;";
			})	
			// not showing tiles after bakban
			if (suit_type === 126976)
			{
				document.querySelectorAll('button[button-type="t"]')[7].getElementsByTagName('span')[0].innerHTML = "　";
				document.querySelectorAll('button[button-type="t"]')[8].getElementsByTagName('span')[0].innerHTML = "　";
			}
		};
	})	

	// record type of the group 
	document.querySelectorAll('button[button-type="gt"]').forEach(button =>
	{
		button.onclick = function()
		{
			group_type = button.dataset.gt;
			// not showing 8 and 9 when selected straight
			if (group_type === 'Straight')
			{
				document.querySelectorAll('button[button-type="t"]')[7].getElementsByTagName('span')[0].innerHTML = "　";
				document.querySelectorAll('button[button-type="t"]')[8].getElementsByTagName('span')[0].innerHTML = "　";
			}
		};
	})

	// changing outside display for last step
	document.querySelectorAll('button[button-type="t"]').forEach(button =>
	{
		button.onclick = function()
		{
			temp_tile = String.fromCodePoint(suit_type + parseInt(button.dataset.t)) + "&#xFE0E;";
			if (group_type === 'Eye')
			{
				output_tile = temp_tile + temp_tile;
			}
			if (group_type === 'Pong')
			{
				output_tile = temp_tile + temp_tile + temp_tile;
			}
			if (group_type === 'Kong')
			{
				output_tile = temp_tile + temp_tile + temp_tile + temp_tile;
			}
			if (group_type === 'Straight')
			{
				output_tile = temp_tile + String.fromCodePoint(suit_type + parseInt(button.dataset.t) + 1) + "&#xFE0E;";
				output_tile = output_tile + String.fromCodePoint(suit_type + parseInt(button.dataset.t) + 2) + "&#xFE0E;";
			}
			document.querySelectorAll('button[button-type="tg"]')[group_number].getElementsByTagName('span')[0].innerHTML = output_tile;
		};
	})
});