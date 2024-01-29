let group_1 = 0;
let group_number = 0;
let suit_type = 126976;
let tile_int = 0;
let group_type = "Pong";
let counter = 0;
let output_tile = "";
let no_flower = true;

let temp_tile = "";
let temp_string = "";

document.addEventListener('DOMContentLoaded', function() 
{
	// initialize the tile modal
	document.querySelectorAll('button[button-type="tile-big-button"]').forEach(button =>
	{
		button.onclick = function()
		{
			group_number = button.dataset.group;

			// reset three radios
			if (document.querySelector('input[name="suitRadio"]:checked'))
			{
				document.querySelector('input[name="suitRadio"]:checked').checked = false;
			}
			if (document.querySelector('input[name="meldTypeRadio"]:checked'))
			{
				document.querySelector('input[name="meldTypeRadio"]:checked').checked = false;
			}
			if (document.querySelector('input[name="tileSelectRadio"]:checked'))
			{
				document.querySelector('input[name="tileSelectRadio"]:checked').checked = false;
			}

			// disable eye button for group 1-5
			document.querySelector('#eye').disabled = !(group_number === '5');
			if (group_number === '5')
			{
				document.querySelector('#eye').checked = true;
			}

			// disable other buttons for group 6
			document.querySelector('#pong').disabled = (group_number === '5');
			document.querySelector('#kong').disabled = (group_number === '5');
			document.querySelector('#sheung').disabled = (group_number === '5');

			// tile initialised as dot orderly
			document.querySelectorAll('input[data-tilenumber]').forEach(input2 =>
			{
				temp_string = 'label[data-tilenumber="' + input2.dataset.tilenumber + '"]';
				document.querySelector(temp_string).children[0].innerHTML = String.fromCodePoint(127001 + parseInt(input2.dataset.tilenumber)) + "&#xFE0E;";
			})	
		};
	})

	// action when clicking suit type 
	document.querySelectorAll('input[radio-type="suit"]').forEach(input =>
	{
		input.onclick = function()
		{
			// change tile face after suit type changed
			document.querySelectorAll('input[data-tilenumber]').forEach(input2 =>
			{
				temp_string = 'label[data-tilenumber="' + input2.dataset.tilenumber + '"]';
				document.querySelector(temp_string).children[0].innerHTML = String.fromCodePoint(parseInt(input.dataset.suitnumber) + parseInt(input2.dataset.tilenumber)) + "&#xFE0E;";
			})	

			// disable sheung type and tile 8&9 for fang type 
			if (input.id === "fang")
			{
				document.querySelector('#sheung').checked = false;
				document.querySelector('#sheung').disabled = true;
				document.querySelector('#tile7').checked = false;
				document.querySelector('#tile7').disabled = true;
				document.querySelector('label[data-tilenumber="7"]').children[0].innerHTML = "　";
				document.querySelector('#tile8').checked = false;
				document.querySelector('#tile8').disabled = true;
				document.querySelector('label[data-tilenumber="8"]').children[0].innerHTML = "　";
			}
			else
			{
				document.querySelector('#tile7').disabled = false;
				document.querySelector('#tile8').disabled = false;
				if (group_number != '5')
				{
				document.querySelector('#sheung').disabled = false;
				}
			}
		}
	})

	// action when clicking meld type 
	document.querySelectorAll('input[radio-type="meld"]').forEach(input =>
	{
		input.onclick = function()
		{
			// disable tile 8&9 for sheung type
			if (input.id === "sheung")
			{
				document.querySelector('#tile7').checked = false;
				document.querySelector('#tile7').disabled = true;
				document.querySelector('#tile8').checked = false;
				document.querySelector('#tile8').disabled = true;
			}
			else
			{
				document.querySelector('#tile7').disabled = false;
				document.querySelector('#tile8').disabled = false;
			}
		}
	})

	// change outer meld display after finish tile modal
	document.querySelector('#tileSelectDone').onclick = function() 
	{
		// change outer meld display only when all radio are checked
		if ((document.querySelector('input[name="suitRadio"]:checked')) && (document.querySelector('input[name="meldTypeRadio"]:checked')) && (document.querySelector('input[name="tileSelectRadio"]:checked'))) 
		{
			suit_type = parseInt(document.querySelector('input[name="suitRadio"]:checked').dataset.suitnumber); 
			group_type = document.querySelector('input[name="meldTypeRadio"]:checked').id;
			tile_int = parseInt(document.querySelector('input[name="tileSelectRadio"]:checked').dataset.tilenumber);
			temp_tile = String.fromCodePoint(suit_type + tile_int) + "&#xFE0E;";
			if (group_type === 'eye')
			{
				output_tile = temp_tile + temp_tile;
			}
			if (group_type === 'pong')
			{
				output_tile = temp_tile + temp_tile + temp_tile;
			}
			if (group_type === 'kong')
			{
				output_tile = temp_tile + temp_tile + temp_tile + temp_tile;
			}
			if (group_type === 'sheung')
			{
				output_tile = temp_tile + String.fromCodePoint(suit_type + tile_int + 1) + "&#xFE0E;";
				output_tile = output_tile + String.fromCodePoint(suit_type + tile_int + 2) + "&#xFE0E;";
			}
			document.querySelectorAll('button[button-type="tile-big-button"]')[group_number].getElementsByTagName('span')[0].innerHTML = output_tile;
		}
	}

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

	//calculate button
	document.querySelector('#calculate').onclick = function()
	{
		alert("伺服器正維護中。不便之處，敬請原諒。");
	};

});