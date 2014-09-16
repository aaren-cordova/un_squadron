// ==ClosureCompiler==
// @output_file_name default.js
// @compilation_level SIMPLE_OPTIMIZATIONS
// @formatting pretty_print
// ==/ClosureCompiler==

// Example 3.2: Conditional compilation (shallow)
// Mode: Simple Mode
// Overview: Removal of unreachable code

function unreachable_if(player_number){
	reach();

	if(false){
		//Unreachable code
		grasp();
	}
};


function unreachable_if_else_if(player_number){
	if(false){
		//Unreachable code
		grasp();
	}
	else if(false){
		//Unreachable code
		grasp();
	}
	else{
		reach();
	}
};


function unreachable_conditional_constant_folding(player_number){
	if(false || false){
		//Unreachable code
		grasp();
	}
	else if(false || false || true){
		reach();
	}
	else{
		//Unreachable code
		grasp();
	}
};

function reach(){
	console.log('As you wish.');
}

function grasp(){
	console.log('Inconceivable!');
}