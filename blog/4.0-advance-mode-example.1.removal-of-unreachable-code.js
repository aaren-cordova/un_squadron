// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @output_file_name default.js
// @formatting pretty_print
// ==/ClosureCompiler==

/** @define { number } */
var player_number = 1;

(function(){
	var player_name;

	if(player_number === 1){
		player_name = "Mario";
	}
	else if(player_number === 2){
		player_name = "Luigi";
	}
	else if(player_number === 3){
		player_name = "Toad";
	}
	else if(player_number === 4){
		player_name = "Bowser";
	}
	else if(player_number === 5){
		player_name = "Wario";
	}
	else if(player_number === 6){
		player_name = "Waluigi";
	}
	else if(player_number === 7){
		player_name = "Toadette";
	}
	else {
		player_name = "Wart";
	}

	console.log(
		'Thank You ' + player_name + ', ' +
		'But Our Princess is in Another Castle!'
	);

	return false;

	console.log("Too bad you missed the secret tunnel to world 8 ...");
}());