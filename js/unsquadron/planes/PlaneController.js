goog.scope(function(){
	goog.require('goog.Disposable');
	goog.provide('unsquadron.planes.PlaneController')
	
	/** 
	* @implements {unsquadron.planes.IPlaneController}
	* @extends {goog.Disposable}
	*/
	unsquadron.planes.PlaneController = function(){
		goog.Disposable.call(this);
	};
	goog.inherits(unsquadron.planes.PlaneController, goog.Disposable);

	/** @param {unsquadron.planes.IPlaneModel} planeModel */
	unsquadron.planes.PlaneController.prototype.setPlaneModel = function(planeModel){
		this.planeModel_ = planeModel;
	};

	// L
	unsquadron.planes.PlaneController.prototype.onPreviousSpecialWeaponButtonDown = function(event){};
	unsquadron.planes.PlaneController.prototype.onPreviousSpecialWeaponButtonUp = function(event){};

	// R
	unsquadron.planes.PlaneController.prototype.onNextSpecialWeaponButtonDown = function(event){};
	unsquadron.planes.PlaneController.prototype.onNextSpecialWeaponButtonUp = function(event){};

	// Y / X
	unsquadron.planes.PlaneController.prototype.onUseStandardWeaponButtonDown = function(event){};
	unsquadron.planes.PlaneController.prototype.onUseStandardWeaponButtonUp = function(event){};

	// B / A
	unsquadron.planes.PlaneController.prototype.onUseSpecialWeaponButtonDown = function(event){};
	unsquadron.planes.PlaneController.prototype.onUseSpecialWeaponButtonUp = function(event){};

	// <
	unsquadron.planes.PlaneController.prototype.onLeftButtonDown = function(event){
		this.planeModel_.setHorizonalDirection(-1);
	};
	unsquadron.planes.PlaneController.prototype.onLeftButtonUp = function(event){
		this.planeModel_.setHorizonalDirection(0);
	};

	// >
	unsquadron.planes.PlaneController.prototype.onRightButtonDown = function(event){
		this.planeModel_.setHorizonalDirection(1);
	};
	unsquadron.planes.PlaneController.prototype.onRightButtonUp = function(event){
		this.planeModel_.setHorizonalDirection(0);
	};

	// ^
	unsquadron.planes.PlaneController.prototype.onUpButtonDown = function(event){
		this.planeModel_.setVerticalDirection(1);
	};
	unsquadron.planes.PlaneController.prototype.onUpButtonUp = function(event){
		this.planeModel_.setVerticalDirection(0);
	};

	// v
	unsquadron.planes.PlaneController.prototype.onDownButtonDown = function(event){
		this.planeModel_.setVerticalDirection(-1);
	};
	unsquadron.planes.PlaneController.prototype.onDownButtonUp = function(event){
		this.planeModel_.setVerticalDirection(0);
	};

	// pause
	unsquadron.planes.PlaneController.prototype.onPauseButtonDown = function(event){
		// TODO
	};
	unsquadron.planes.PlaneController.prototype.onPauseButtonUp = function(event){};

	// select
	unsquadron.planes.PlaneController.prototype.onSelectButtonDown = function(event){
		// TODO
	};
	unsquadron.planes.PlaneController.prototype.onSelectButtonUp = function(event){
		// TODO
	};
});