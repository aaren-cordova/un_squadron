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

		//var player_number = 2;

		if(2 === 1){
			return "Mario";
		}
		else if(2 === 2){
			return "Luigi";
		}
		else if(2 === 3){
			return "Toad";
		}
		else if(2 === 4){
			return "Yoshi";
		}
		else if(2 === 5){
			return "Wario";
		}
		else if(2 === 6){
			return "Waluigi";
		}
		else if(2 === 7){
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