function Size(w, h){
	this.width = w;
	this.height = h;
}

function SlidingPuzzleTile(element, x, y, sliding_puzzle){
	jQuery(element).addClass('sliding_puzzle_tile');
	this.element = element;
	this.x = x;
	this.y = y;
	this.hidden = false;
	this.sliding_puzzle = sliding_puzzle;

	jQuery(this.element)
	.click(jQuery.proxy(this.on_click, this));
}

SlidingPuzzleTile.prototype.on_click = function(){
	if(this.sliding_puzzle.is_valid_move(this.x, this.y)){
		this.sliding_puzzle.move_piece_at(this.x, this.y);
	}
}

function SlidingPuzzle(image_url, image_size, puzzle_size){
	this.image_size = image_size;
	this.puzzle_size = puzzle_size;
	this.build_puzzle(image_url, image_size, puzzle_size);
}

SlidingPuzzle.ANIMATION_DURATION = 200;


SlidingPuzzle.prototype.build_puzzle = function (image_url, image_size, puzzle_size){
	var sliding_puzzle_element = jQuery('<div>')
	.addClass('sliding_puzzle')
	.css('position', 'relative')
	.width(image_size.width)
	.height(image_size.height);

	var puzzle_piece_size = new Size(image_size.width / puzzle_size.width, image_size.height / puzzle_size.height);
	var column_list = [];
	for(var x = 0; x < puzzle_size.width; ++x){
		var row_list = [];
		for(var y = 0; y < puzzle_size.height; ++y){
			var puzzle_tile_element = jQuery('<div>').css({
				'position': 'absolute', 
				'width': puzzle_piece_size.width,
				'height': puzzle_piece_size.height,
				'background-image': 'url(' + image_url + ')',
				'left': (puzzle_piece_size.width * x),
				'top': (puzzle_piece_size.height * y),
				'background-position': (-puzzle_piece_size.width * x) + 'px ' + (-puzzle_piece_size.height * y) + 'px'
			})

			var puzzle_piece = new SlidingPuzzleTile(puzzle_tile_element, x, y, this);
			row_list.push(puzzle_piece);

			jQuery(sliding_puzzle_element).append(puzzle_tile_element)
		}

		column_list.push(row_list);
	}

	this.column_list = column_list;
	this.sliding_puzzle_element = sliding_puzzle_element;

	this.set_hidden_coordinate(puzzle_size.width - 1, puzzle_size.height - 1);
}

SlidingPuzzle.prototype.set_piece_at = function (x, y, piece){
	piece.x = x;
	piece.y = y;

	this.column_list[x][y] = piece;
}

SlidingPuzzle.prototype.get_piece_at = function (x, y){
	return this.column_list[x][y];
}

SlidingPuzzle.prototype.set_hidden_coordinate = function (x, y){
	var hidden_puzzle_piece = this.get_piece_at(x, y);
	this.set_hidden_piece(hidden_puzzle_piece);
}

SlidingPuzzle.prototype.get_hidden_piece = function (){
	return this.hidden_puzzle_piece;
};

SlidingPuzzle.prototype.set_hidden_piece = function (piece){
	this.hidden_puzzle_piece = piece;
	piece.hidden = true;
	jQuery(piece.element).css('visibility', 'hidden');
};

SlidingPuzzle.prototype.move_piece_at = function (x, y){
	var piece = this.get_piece_at(x, y);

	var hidden_piece = this.get_hidden_piece();

	this.set_piece_at(hidden_piece.x, hidden_piece.y, piece);
	this.set_piece_at(x, y, hidden_piece);

	jQuery(piece.element)
	.stop(false, true)
	.animate({
			left: jQuery(hidden_piece.element).css('left'),
			top: jQuery(hidden_piece.element).css('top')
		},
		SlidingPuzzle.ANIMATION_DURATION
	);

	jQuery(hidden_piece.element)
	.css({
			left: jQuery(piece.element).css('left'),
			top: jQuery(piece.element).css('top')
		}
	);
};


SlidingPuzzle.prototype.is_valid_move = function (x, y){
	var hidden_piece = this.get_hidden_piece();
	var column_list = this.column_list;
	var row_list = column_list[0];
	// Bounds
	
	if(
		x < 0 || x >= row_list.length ||
		y < 0 || y >= column_list.length
	){
		return false;
	}

	if(x == hidden_piece.x){
		if(y == hidden_piece.y - 1 || y == hidden_piece.y + 1){
			return true;
		}
	}
	if(y == hidden_piece.y){
		if(x == hidden_piece.x - 1 || x == hidden_piece.x + 1){
			return true;
		}
	}
	
	return false;
}

SlidingPuzzle.prototype.random_horizontal_move = function (){
	var hidden_piece = this.get_hidden_piece();
	var column_list = this.column_list;
	var row_list = column_list[0];
	var offset;
	if(!hidden_piece.x){
		offset = 1;
	}
	else if(hidden_piece.x == row_list.length - 1){
		offset = -1;
	}
	else{
		offset = Math.random() < .5 ? 1 : -1;
	}

	this.move_piece_at(hidden_piece.x + offset, hidden_piece.y);
};

SlidingPuzzle.prototype.random_vertical_move = function (){
	var hidden_piece = this.get_hidden_piece();
	var column_list = this.column_list;
	var row_list = column_list[0];
	var offset;

	if(!hidden_piece.y){
		offset = 1;
	}
	else if(hidden_piece.y == column_list.length - 1){
		offset = -1;
	}
	else{
		offset = Math.random() < .5 ? 1 : -1;
	}

	this.move_piece_at(hidden_piece.x, hidden_piece.y + offset);
};


SlidingPuzzle.prototype.random_move = function (){
	if(Math.random() < .5){// move h
		this.random_horizontal_move();
	}
	else{// move v
		this.random_vertical_move();
	}
};
	
	var puzzle_timer = 0;
	var image_size = new Size(320, 320);
	var puzzle_size = new Size(4, 4);
	var hard_stop_timer = false;
	var sliding_puzzle = new SlidingPuzzle(
		'http://faqsmedia.ign.com/faqs/image/simalcrum_re4-ashleyslide.jpg',
		image_size,
		puzzle_size
	);

	jQuery('body')
	.append(sliding_puzzle.sliding_puzzle_element);

	jQuery(sliding_puzzle.sliding_puzzle_element)
	.mouseover(function(){
		if(!hard_stop_timer){
			start_puzzle_timer();
		}
	})
	.mouseout(function(){
		stop_puzzle_timer();
	})
	.click(function(){
		hard_stop_timer = true;
		stop_puzzle_timer();
	});

	function start_puzzle_timer(){
		if(!puzzle_timer){
			puzzle_timer = setInterval(onPuzzleTimer, SlidingPuzzle.ANIMATION_DURATION);
			onPuzzleTimer();
		}
	}
	function stop_puzzle_timer(){
		if(puzzle_timer){
			clearInterval(puzzle_timer);
			puzzle_timer = 0;
		}
	}

	function onPuzzleTimer(){
		sliding_puzzle.random_move();
	}

	/*
	var length = 100;
	for(var i = 0; i < length; ++i){
		if(i % 2){
			sliding_puzzle.random_horizontal_move();
		}
		else{
			sliding_puzzle.random_vertical_move();
		}
	}
	*/
