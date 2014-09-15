// ==ClosureCompiler==
// @output_file_name default.js
// @compilation_level SIMPLE_OPTIMIZATIONS
// @formatting pretty_print
// ==/ClosureCompiler==

// Example 3.0 - Simple Mode - Removal of dead code

console.log("Mario starts his quest.");

function throw_example(){
	console.log("Mario beats the castle . . .");
	throw new Error("I'm sorry but the princess is in another castle");

	//Dead code
	zombie_apocalypse();
};

function break_example(world){
	while(true){
		console.log("he takes warp pipe directly to world " + world + "...");
		break;

		//Dead code
		zombie_apocalypse();
	}
};

function return_example(){
	console.log("There's a face off with Bowser . . .");
	return;

	//Dead code
	zombie_apocalypse();
};

function continue_example(){
	console.log("He uses his jumping skills . . .");
	for(var i = 0; i < 100; ++i){
		console.log("Mario saves the princess . . .");
		continue;

		//Dead code
		zombie_apocalypse();
	}
};

function zombie_apocalypse(){
	console.log(
		"Zombie Bowser eat's Mario's brains." + 
		"In the land of the dead, Big Boo is king."
	);
}

break_example(8);
return_example();
continue_example();

console.log("Want to play again?");
