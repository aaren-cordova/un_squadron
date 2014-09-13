// ==ClosureCompiler==
// @output_file_name default.js
// @compilation_level SIMPLE_OPTIMIZATIONS
// @formatting pretty_print
// ==/ClosureCompiler==

// Removal of dead code
console.log("Mario starts his quest.");

function throw_dead_code(){
	console.log("Mario beats the castle . . .");
	throw new Error("I'm sorry but the princess is in another castle");

	//Dead code
	console.log("Bowser defeats Mario.");
};

function break_dead_code(world){
	while(true){
		console.log("he takes warp pipe directly to world " + world + "...");
		break;

		//Dead code
		console.log("Bowser defeats Mario.");
	}
};

function return_dead_code(){
	console.log("There's a face off with Bowser . . .");
	return;

	//Dead code
	console.log("Bowser defeats Mario.");
};



function continue_dead_code(){
	console.log("He uses his jumping skills . . .");
	for(var i = 0; i < 100; ++i){
		console.log("Mario saves the princess . . .");
		continue;

		//Dead code
		console.log("Bowser defeats Mario.");
	}
};

break_dead_code(8);
return_dead_code();
continue_dead_code();

console.log("Want to play again?");
