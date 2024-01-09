let group_1 = 0;
let group_number = 0;
let suit_type = 126976;
let group_type = "Pong";
let counter = 0;
let temp_tile = "";
let output_tile = "";

document.addEventListener('DOMContentLoaded', function() 
{
	// record which group of tiles to be changed
	document.querySelectorAll('button[button-type="tg"]').forEach(button =>
	{
		button.onclick = function()
		{
			group_number = button.dataset.gp;
			// only open eye button for group 6
			document.querySelector('#eye-button').disabled = !(group_number === '5')
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
			// disabling and not showing button 8 and 9
			if (suit_type === 126976)
			{
				document.querySelector('#button8').getElementsByTagName('span')[0].innerHTML = "　";
				document.querySelector('#button9').getElementsByTagName('span')[0].innerHTML = "　";
			}
			document.querySelector('#straight-button').disabled = (suit_type === 126976);
		};
	})	

	// record type of the group 
	document.querySelectorAll('button[button-type="gt"]').forEach(button =>
	{
		button.onclick = function()
		{
			group_type = button.dataset.gt;
			// Disable 8 and 9 when selected straight or being as fan
			document.querySelector('#button8').disabled = ((group_type === 'Straight') || (suit_type === 126976));
			document.querySelector('#button9').disabled = ((group_type === 'Straight') || (suit_type === 126976));
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

	// increment and decrement for 3 counters
	document.querySelector('#minusbutton').onclick = function ()
	{
		let temp = parseInt(document.querySelector('#dealcounter').dataset.counter) - 1;
		if (temp > -1)
		{
			document.querySelector('#dealcounter').dataset.counter = temp.toString();
			document.querySelector('#dealcounter').innerHTML = temp.toString();
		}
	}
	document.querySelector('#plusbutton').onclick = function ()
	{
		let temp = parseInt(document.querySelector('#dealcounter').dataset.counter) + 1;
		document.querySelector('#dealcounter').dataset.counter = temp.toString();
		document.querySelector('#dealcounter').innerHTML = temp.toString();
	}

	document.querySelector('#minusbutton2').onclick = function ()
	{
		let temp = parseInt(document.querySelector('#flowerselfwin').dataset.counter) - 1;
		if (temp > -1)
		{
			document.querySelector('#flowerselfwin').dataset.counter = temp.toString();
			document.querySelector('#flowerselfwin').innerHTML = temp.toString();
		}
	}
	document.querySelector('#plusbutton2').onclick = function ()
	{
		let temp = parseInt(document.querySelector('#flowerselfwin').dataset.counter) + 1;
		document.querySelector('#flowerselfwin').dataset.counter = temp.toString();
		document.querySelector('#flowerselfwin').innerHTML = temp.toString();
	}

	document.querySelector('#minusbutton3').onclick = function ()
	{
		let temp = parseInt(document.querySelector('#kongselfwin').dataset.counter) - 1;
		if (temp > -1)
		{
			document.querySelector('#kongselfwin').dataset.counter = temp.toString();
			document.querySelector('#kongselfwin').innerHTML = temp.toString();
		}
	}
	document.querySelector('#plusbutton3').onclick = function ()
	{
		let temp = parseInt(document.querySelector('#kongselfwin').dataset.counter) + 1;
		document.querySelector('#kongselfwin').dataset.counter = temp.toString();
		document.querySelector('#kongselfwin').innerHTML = temp.toString();
	}

	// disable oneready when ready is not present
	document.querySelector('#ready').onclick = function ()
	{
		document.querySelector('#readyone').disabled = !(document.querySelector('#ready').checked);
		if (document.querySelector('#ready').checked === false)
		{
			document.querySelector('#readyone').checked = false;
		}
	}
});