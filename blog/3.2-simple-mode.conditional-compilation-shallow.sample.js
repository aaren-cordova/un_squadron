// Unreachable code - shallow

function unreachable_conditional(player_number){
	// Do something here . . .
	if(false){
		//Unreachable code
	}
};


function unreachable_conditional(player_number){
	if(true){
		// Do something here . . .
	}
	else{
		//Unreachable code
	}
};


function unreachable_conditional_constant_folding(player_number){
	if(false || false){
		//Unreachable code
	}
	else if(false || true){
		// Do something here . . .
	}
	else{
		//Unreachable code
	}
};
