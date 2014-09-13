// ==ClosureCompiler==
// @output_file_name default.js
// @compilation_level SIMPLE_OPTIMIZATIONS
// ==/ClosureCompiler==


























// Local vars are renamed

/**
* @preserve Property of Demand Media, all rights reserved
*/

/**
 * @param  {number} player_number
 * @return {!Object}
 */
function get_player_by_id(player_number){
	var player = {};

	if(player_number === 1){
		player.name = "Mario";
		player.weight = 230;
	}
	else if(player_number === 2){
		player.name = "Luigi";
		player.weight = 184;
	}
	else if(player_number === 3){
		player.name = "Toad";
		player.weight = 50;
	}
	else if(player_number === 4){
		player.name = "Bowser";
		player.weight = 500;
	}
	else if(player_number === 5){
		player.name = "Wario";
		player.weight = 400;
	}
	else if(player_number === 6){
		player.name = "Waluigi";
		player.weight = 200;
	}
	else if(player_number === 7){
		player.name = "Toadette";
		player.weight = 40;
	}
	else {
		player.name = "Wart";
		player.weight = 600;
	}

	console.log(
		"Hello " + player.name + "! \n" +
		"Welcome to the mushroom kingdom?"
	);

	return player;
};

var player = get_player_by_id(1);