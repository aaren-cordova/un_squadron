goog.provide('unsquadron.display.Tank');
goog.require('unsquadron.display.MobileMissileLauncher');

goog.scope(function(){
	/**
	* @constructor
	* @param {string} name
	* @param {number} numXFrames
	* @param {number} numYFrames
	* @param {number} numZFrames
	* @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
	* @extends {unsquadron.display.MobileMissileLauncher}
	*/
	unsquadron.display.Tank = function(name, numXFrames, numYFrames, numZFrames, opt_domHelper){
		goog.base(this, name, numXFrames, numYFrames, numZFrames, opt_domHelper);

		var missileLauncher = this.getMissleLauncher();
		missileLauncher.setAngleFloor(0);
		missileLauncher.setAngleCeil(180);
	};
	goog.inherits(unsquadron.display.Tank, unsquadron.display.MobileMissileLauncher);

	/** @override */
	unsquadron.display.Tank.prototype.updateDirectionInternal = function(horizontalDir, verticalDir){
		goog.base(this, 'updateDirectionInternal', horizontalDir, verticalDir);

		if(horizontalDir < 0){
			this.prevYFrame();
		}
		else if(horizontalDir > 0){
			this.nextYFrame();
		}
	};
});
