// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS
// @output_file_name default.js
// @formatting pretty_print
// ==/ClosureCompiler==

// Removal of unreachable code (expanded)

(function(){
	var player_name;

	var player_number = 1;

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

	return;

	console.log("It would of taken you to world 3...");
}());