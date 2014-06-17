goog.provide('unsquadron.display.Plane');

goog.require('goog.dom');
goog.require('qcurve.display.Sprite');
goog.require('qcurve.display.MissileLauncher');
goog.require('qcurve.display');
goog.require('goog.Timer');


goog.scope(function(){
	var MissileLauncher = qcurve.display.MissileLauncher;

	/**
	* @constructor
	* @param {string} name
	* @param {number} numXFrames
	* @param {number} numYFrames
	* @param {number} numZFrames
	* @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
	* @extends {qcurve.display.Sprite}
	*/
	unsquadron.display.Plane = function(name, numXFrames, numYFrames, numZFrames, opt_domHelper){
		goog.base(this, name, numXFrames, numYFrames, numZFrames, opt_domHelper);

		this.missileLauncher_ = new MissileLauncher(this);
		this.missileLauncher_.setNumAngles(1);
		this.missileLauncher_.setAngleFloor(0);
		this.missileLauncher_.setAngleCeil(180);
	};
	goog.inherits(unsquadron.display.Plane, qcurve.display.Sprite);

	/** @override */
	unsquadron.display.Plane.prototype.enterDocument = function(){
		goog.base(this, 'enterDocument');

		var fireTimer = this.missileLauncher_.getFireTimer();
		fireTimer.start();
	};

	/** @override */
	unsquadron.display.Plane.prototype.exitDocument = function(){
		goog.base(this, 'exitDocument');

		var fireTimer = this.missileLauncher_.getFireTimer();
		fireTimer.stop();
	};

	/** @override */
	unsquadron.display.Plane.prototype.disposeInternal = function(){
		goog.base(this, 'disposeInternal');

		this.missileLauncher_.dispose();
		delete this.missileLauncher_;
	};
	
	/**
	* @public
	* @return {qcurve.display.MissileLauncher}
	*/
	unsquadron.display.Plane.prototype.getMissleLauncher = function(){
		return this.missileLauncher_;
	};
});
