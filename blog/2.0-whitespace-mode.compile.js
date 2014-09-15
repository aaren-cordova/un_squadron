// ==ClosureCompiler==
// @output_file_name default.js
// @compilation_level WHITESPACE_ONLY
// ==/ClosureCompiler==

// Example 2.0 - Whitespace mode

/**
* @license
* Property of Demand Media, all rights reserved
* 
* All of Googles Closure Tools are under the Apache License, Version 2.0
* Subject to the terms and conditions of this License, each Contributor hereby grants to You 
* a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to 
* reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and 
* distribute the Work and such Derivative Works in Source or Object form
*/

// All work
// and no play

/**
* @preserve
* Don't be evil.
*/

// makes Jack
// a dull boy


/**
 * All work and no play makes Jack a dull boy.
 * ALL WORK AND NO PLAY MAKES JACK A DULL BOY.
 * All work and play makes Jck a dull boy.
 * All work and no ply makes Jack a dull boy.
 * Aol work and no play makes Jack a dull boy.
 *   All work and no play makes Jack a dull boy.
 * All work and no play makes Jack adull boy.
 * 
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
