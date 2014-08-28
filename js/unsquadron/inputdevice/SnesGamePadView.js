goog.provide('')
goog.scope(function(){

	var SNES_GAME_PAD_CONTROLLER_MISSING_ERROR = 'The SNES game pad controller must be set before calling %s.'
	
	/** 
	* @interface
	* @extends {goog.disposable.Disposable}
	*/
	unsquadron.controls.SnesGamePadView = function(){};
	unsquadron.controls.SnesGamePadView.prototype.setSnesGamePadController = function (snesGamePadController){
		this.snesGamePadController_ = snesGamePadController;
	}

	unsquadron.controls.SnesGamePadView.prototype.onLeftButtonDown = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onLeftButtonDown');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onLeftButtonDown(event);
		}
	};
	unsquadron.controls.SnesGamePadView.prototype.onLeftButtonUp = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onLeftButtonUp');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onLeftButtonUp(event);
		}
	};

	unsquadron.controls.SnesGamePadView.prototype.onRightButtonDown = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onRightButtonDown');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onRightButtonDown(event);
		}
	};
	unsquadron.controls.SnesGamePadView.prototype.onRightButtonUp = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onRightButtonUp');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onRightButtonUp(event);
		}
	};

	unsquadron.controls.SnesGamePadView.prototype.onUpButtonDown = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onUpButtonDown');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onUpButtonDown(event);
		}
	};
	unsquadron.controls.SnesGamePadView.prototype.onUpButtonUp = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onUpButtonUp');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onUpButtonUp(event);
		}
	};

	unsquadron.controls.SnesGamePadView.prototype.onDownButtonDown = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onDownButtonDown');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onDownButtonDown(event);
		}
	};
	unsquadron.controls.SnesGamePadView.prototype.onDownButtonUp = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onDownButtonUp');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onDownButtonUp(event);
		}
	};

	unsquadron.controls.SnesGamePadView.prototype.onPauseButtonDown = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onPauseButtonDown');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onPauseButtonDown(event);
		}
	};
	unsquadron.controls.SnesGamePadView.prototype.onPauseButtonUp = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onPauseButtonUp');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onPauseButtonUp(event);
		}
	};

	unsquadron.controls.SnesGamePadView.prototype.onSelectButtonDown = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onSelectButtonDown');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onSelectButtonDown(event);
		}
	};
	unsquadron.controls.SnesGamePadView.prototype.onSelectButtonUp = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onSelectButtonUp');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onSelectButtonUp(event);
		}
	};

	unsquadron.controls.SnesGamePadView.prototype.onXButtonDown = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onXButtonDown');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onXButtonDown(event);
		}
	};
	unsquadron.controls.SnesGamePadView.prototype.onXButtonUp = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onXButtonUp');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onXButtonUp(event);
		}
	};

	unsquadron.controls.SnesGamePadView.prototype.onYButtonDown = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onYButtonDown');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onYButtonDown(event);
		}
	};
	unsquadron.controls.SnesGamePadView.prototype.onYButtonUp = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onYButtonUp');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onYButtonUp(event);
		}
	};

	unsquadron.controls.SnesGamePadView.prototype.onAButtonDown = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onAButtonDown');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onAButtonDown(event);
		}
	};
	unsquadron.controls.SnesGamePadView.prototype.onAButtonUp = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onAButtonUp');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onAButtonUp(event);
		}
	};

	unsquadron.controls.SnesGamePadView.prototype.onBButtonDown = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onBButtonDown');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onBButtonDown(event);
		}
	};
	unsquadron.controls.SnesGamePadView.prototype.onBButtonUp = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onBButtonUp');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onBButtonUp(event);
		}
	};

	unsquadron.controls.SnesGamePadView.prototype.onLButtonDown = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onLButtonDown');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onLButtonDown(event);
		}
	};
	unsquadron.controls.SnesGamePadView.prototype.onLButtonUp = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onLButtonUp');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onLButtonUp(event);
		}
	};

	unsquadron.controls.SnesGamePadView.prototype.onRButtonDown = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onRButtonDown');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onRButtonDown(event);
		}
	};
	unsquadron.controls.SnesGamePadView.prototype.onRButtonUp = function(event){
		assert(this.snesGamePadController_, SNES_GAME_PAD_CONTROLLER_MISSING_ERROR, 'onRButtonUp');

		if(this.snesGamePadController_){
			this.snesGamePadController_.onRButtonUp(event);
		}
	};
});