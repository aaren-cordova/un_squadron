goog.provide('unsquadron.display.Turrent');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('qcurve.display.Sprite');
goog.require('qcurve.display.MissileLauncher');
goog.require('qcurve.display');
goog.require('goog.Timer');


goog.scope(function(){
	var Timer = goog.Timer;
	var MissileLauncher = qcurve.display.MissileLauncher;
	var getEnterFrameTimer = qcurve.display.getEnterFrameTimer;
	var listen = goog.events.listen;
	var unlisten = goog.events.unlisten;
	/**
	* @constructor
	* @param {string} name
	* @param {number} numXFrames
	* @param {number} numYFrames
	* @param {number} numZFrames
	* @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
	* @extends {qcurve.display.Sprite}
	*/
	unsquadron.display.Turrent = function(name, numXFrames, numYFrames, numZFrames, opt_domHelper){
		goog.base(this, name, numXFrames, numYFrames, numZFrames, opt_domHelper);

		this.missileLauncher_ = new MissileLauncher(this);
		this.missileLauncher_.setNumAngles(this.getNumXFrames() - 1);
		this.missileLauncher_.setAngleFloor(0);
		this.missileLauncher_.setAngleCeil(180);
	};
	goog.inherits(unsquadron.display.Turrent, qcurve.display.Sprite);

	/** @override */
	unsquadron.display.Turrent.prototype.enterDocument = function(){
		goog.base(this, 'enterDocument');
		listen(getEnterFrameTimer(), Timer.TICK, this.onEnterFrameTimer_, false, this);
		this.invalidateFireTimer_();
	};

	/** @override */
	unsquadron.display.Turrent.prototype.exitDocument = function(){
		goog.base(this, 'exitDocument');
		unlisten(getEnterFrameTimer(), Timer.TICK, this.onEnterFrameTimer_, false, this);
		this.invalidateFireTimer_();
	};

	unsquadron.display.Turrent.prototype.invalidateFireTimer_ = function(){
		var fireTimer = this.missileLauncher_.getFireTimer();
		if(this.isInDocument() && this.getMissleTarget()){
			fireTimer.start();
		}
		else{
			fireTimer.stop();
		}
	};

	/** @override */
	unsquadron.display.Turrent.prototype.disposeInternal = function(){
		goog.base(this, 'disposeInternal');

		this.missileLauncher_.dispose();
		delete this.missileLauncher_;
	};

	/**
	* @private
	* @param {goog.events.Event} event
	*/
	unsquadron.display.Turrent.prototype.onEnterFrameTimer_ = function(event){
		this.missileLauncher_.tryPointBarrelToMissleTarget();
	};

	/**
	* @public
	* @return {qcurve.display.MissileLauncher}
	*/
	unsquadron.display.Turrent.prototype.getMissleLauncher = function(){
		return this.missileLauncher_;
	};

	/**
	* @public
	* @param {qcurve.display.Component} value
	*/
	unsquadron.display.Turrent.prototype.setMissleTarget = function(value){
		this.missileLauncher_.setMissleTarget(value);
		this.invalidateFireTimer_();
	};

	/**
	* @public
	* @return {qcurve.display.Component}
	*/
	unsquadron.display.Turrent.prototype.getMissleTarget = function(){
		return this.missileLauncher_.getMissleTarget();
	};

	/**
	* @private
	* @type {qcurve.display.MissileLauncher}
	*/
	unsquadron.display.Turrent.prototype.missileLauncher_ = null;
});
