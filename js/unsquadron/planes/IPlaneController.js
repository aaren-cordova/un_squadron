goog.scope(function(){
	goog.require('goog.disposable.IDisposable');
	goog.require('unsquadron.planes.IPlaneModel');
	goog.provide('unsquadron.planes.IPlaneController')
	
	/** 
	* @interface
	* @extends {goog.disposable.IDisposable}
	*/
	unsquadron.planes.IPlaneController = function(){};

	/** @param {unsquadron.planes.IPlaneModel} planeModel */
	unsquadron.planes.IPlaneController.prototype.setPlaneModel = function(planeModel){};

	// L
	unsquadron.planes.IPlaneController.prototype.onPreviousSpecialWeaponButtonDown = function(event){};
	unsquadron.planes.IPlaneController.prototype.onPreviousSpecialWeaponButtonUp = function(event){};

	// R
	unsquadron.planes.IPlaneController.prototype.onNextSpecialWeaponButtonDown = function(event){};
	unsquadron.planes.IPlaneController.prototype.onNextSpecialWeaponButtonUp = function(event){};

	// Y / X
	unsquadron.planes.IPlaneController.prototype.onUseStandardWeaponButtonDown = function(event){};
	unsquadron.planes.IPlaneController.prototype.onUseStandardWeaponButtonUp = function(event){};

	// B / A
	unsquadron.planes.IPlaneController.prototype.onUseSpecialWeaponButtonDown = function(event){};
	unsquadron.planes.IPlaneController.prototype.onUseSpecialWeaponButtonUp = function(event){};

	// <
	unsquadron.planes.IPlaneController.prototype.onLeftButtonDown = function(event){};
	unsquadron.planes.IPlaneController.prototype.onLeftButtonUp = function(event){};

	// >
	unsquadron.planes.IPlaneController.prototype.onRightButtonDown = function(event){};
	unsquadron.planes.IPlaneController.prototype.onRightButtonUp = function(event){};

	// ^
	unsquadron.planes.IPlaneController.prototype.onUpButtonDown = function(event){};
	unsquadron.planes.IPlaneController.prototype.onUpButtonUp = function(event){};

	// v
	unsquadron.planes.IPlaneController.prototype.onDownButtonDown = function(event){};
	unsquadron.planes.IPlaneController.prototype.onDownButtonUp = function(event){};

	// pause
	unsquadron.planes.IPlaneController.prototype.onPauseButtonDown = function(event){};
	unsquadron.planes.IPlaneController.prototype.onPauseButtonUp = function(event){};

	// select
	unsquadron.planes.IPlaneController.prototype.onSelectButtonDown = function(event){};
	unsquadron.planes.IPlaneController.prototype.onSelectButtonUp = function(event){};
});