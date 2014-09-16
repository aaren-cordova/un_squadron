// ==ClosureCompiler==
// @output_file_name default.js
// @compilation_level SIMPLE_OPTIMIZATIONS
// @formatting pretty_print
// ==/ClosureCompiler==

// Example 3.1 : Removal of dead code
// Simple Mode

function princess_is_captured(){
	console.log("Mario starts his quest.");
}

function goto_castle(){
	console.log("Mario beats the castle . . .");
	throw new Error("I'm sorry but the princess is in another castle");
	zombie_apocalypse();
};

function skip_to_world(world){
	while(true){
		console.log("he takes warp pipe directly to world " + world);
		break;
		zombie_apocalypse();
	}
};

function enter_bowsers_castle(){
	console.log("There's a face off with Bowser . . .");
	return;
	zombie_apocalypse();
};

function win_game(){
	for(var i = 0; i < 100; ++i){
		console.log("He uses his jumping skills . . .");
		continue;
		zombie_apocalypse();
	}

	console.log("Mario saves the princess!");
};

function zombie_apocalypse(){
	console.log(
		"Zombie Peach eat's Marios brains." +
		"In the land of the dead, Big Boo is king."
	);
}

princess_is_captured();
skip_to_world(8);
enter_bowsers_castle();
win_game();