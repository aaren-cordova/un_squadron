goog.require('goog.Disposable');
goog.provide('unsquadron.controls.ISnesGamePadController')
goog.scope(function(){
	/** 
	* @interface
	* @extends {goog.Disposable}
	*/
	unsquadron.controls.ISnesGamePadController = function(){};

	unsquadron.controls.ISnesGamePadController.prototype.onLeftButtonDown = function(event){};
	unsquadron.controls.ISnesGamePadController.prototype.onLeftButtonUp = function(event){};

	unsquadron.controls.ISnesGamePadController.prototype.onRightButtonDown = function(event){};
	unsquadron.controls.ISnesGamePadController.prototype.onRightButtonUp = function(event){};

	unsquadron.controls.ISnesGamePadController.prototype.onUpButtonDown = function(event){};
	unsquadron.controls.ISnesGamePadController.prototype.onUpButtonUp = function(event){};

	unsquadron.controls.ISnesGamePadController.prototype.onDownButtonDown = function(event){};
	unsquadron.controls.ISnesGamePadController.prototype.onDownButtonUp = function(event){};

	unsquadron.controls.ISnesGamePadController.prototype.onPauseButtonDown = function(event){};
	unsquadron.controls.ISnesGamePadController.prototype.onPauseButtonUp = function(event){};

	unsquadron.controls.ISnesGamePadController.prototype.onSelectButtonDown = function(event){};
	unsquadron.controls.ISnesGamePadController.prototype.onSelectButtonUp = function(event){};

	unsquadron.controls.ISnesGamePadController.prototype.onXButtonDown = function(event){};
	unsquadron.controls.ISnesGamePadController.prototype.onXButtonUp = function(event){};

	unsquadron.controls.ISnesGamePadController.prototype.onYButtonDown = function(event){};
	unsquadron.controls.ISnesGamePadController.prototype.onYButtonUp = function(event){};

	unsquadron.controls.ISnesGamePadController.prototype.onAButtonDown = function(event){};
	unsquadron.controls.ISnesGamePadController.prototype.onAButtonUp = function(event){};

	unsquadron.controls.ISnesGamePadController.prototype.onBButtonDown = function(event){};
	unsquadron.controls.ISnesGamePadController.prototype.onBButtonUp = function(event){};

	unsquadron.controls.ISnesGamePadController.prototype.onLButtonDown = function(event){};
	unsquadron.controls.ISnesGamePadController.prototype.onLButtonUp = function(event){};

	unsquadron.controls.ISnesGamePadController.prototype.onRButtonDown = function(event){};
	unsquadron.controls.ISnesGamePadController.prototype.onRButtonUp = function(event){};

});