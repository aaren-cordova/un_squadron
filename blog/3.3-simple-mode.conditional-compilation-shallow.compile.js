// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS
// @output_file_name default.js
// @formatting pretty_print
// ==/ClosureCompiler==


// Example 3.3: Conditional compilation (shallow)
// Mode: Simple Mode
// Overview: Removal of unreachable code

(function(){
	function get_player_name(){

		var player_number = 2;

		if(player_number === 1){
			return "Mario";
		}
		else if(player_number === 2){
			return "Luigi";
		}
		else if(player_number === 3){
			return "Toad";
		}
		else if(player_number === 4){
			return "Yoshi";
		}
		else if(player_number === 5){
			return "Wario";
		}
		else if(player_number === 6){
			return "Waluigi";
		}
		else if(player_number === 7){
			return "Toadette";
		}
		else {
			return "Shyguy";
		}
	};

	var player_name = get_player_name();

	console.log(
		'Thank You ' + player_name + ', ' +
		'But Our Princess is in Another Castle!'
	);
}());