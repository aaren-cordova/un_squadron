goog.provide('qcurve.display.Missile');
goog.require('goog.asserts');
goog.require('goog.events');
goog.require('goog.Timer');
goog.require('qcurve.display.Sprite');

goog.scope(function(){
	var Event = qcurve.events.Event;
	var Coordinate = goog.math.Coordinate;
	var Timer = goog.Timer;
	var listen = goog.events.listen;
	var unlisten = goog.events.unlisten;
	var assert = goog.asserts.assert;

	/**
	* @constructor
	* @param {string} name
	* @param {number=} opt_numXFrames
	* @param {number=} opt_numYFrames
	* @param {number=} opt_numZFrames
	* @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
	* @extends {qcurve.display.Sprite}
	*/
	qcurve.display.Missile = function(name, opt_numXFrames, opt_numYFrames, opt_numZFrames, opt_domHelper){
		goog.base(
			this,
			name,
			opt_numXFrames,
			opt_numYFrames,
			opt_numZFrames,
			opt_domHelper
		);
	};
	goog.inherits(qcurve.display.Missile, qcurve.display.Sprite);

	/** @override */
	qcurve.display.Missile.prototype.enterDocument = function(){
		goog.base(this, 'enterDocument');
	};

	/** @override */
	qcurve.display.Missile.prototype.exitDocument = function(){
		goog.base(this, 'exitDocument');
		this.stop();
	};

	/** @override */
	qcurve.display.Missile.prototype.disposeInternal = function(){
		goog.base(this, 'disposeInternal');

		delete this.target_;
	};

	/** @public */
	qcurve.display.Missile.prototype.start = function(){
		//goog.global.console.log('start');
		if(!this.running_){
			this.running_ = true;
			this.startInternal();
		}
	};


	/** @public */
	qcurve.display.Missile.prototype.stop = function(){
		//goog.global.console.log('stop');

		if(this.running_){
			this.running_ = false;
			this.stopInternal();
		}
	};

	/** @protected */
	qcurve.display.Missile.prototype.startInternal = function(){
		// Do nothing
	};

	qcurve.display.Missile.prototype.endInternal = function(){
		// Do nothing
	};

	/** @protected */
	qcurve.display.Missile.prototype.stopInternal = function(){
		// Do nothing
	};

	/** @return {boolean} */
	qcurve.display.Missile.prototype.getRunning = function(){
		return this.running_;
	};

	/** @public */
	qcurve.display.Missile.prototype.setRate = function(value){
		this.rate_ = value;
	};

	/** @return {number} */
	qcurve.display.Missile.prototype.getRate = function(){
		return this.rate_;
	};

	/** @public */
	qcurve.display.Missile.prototype.setMaxDistance = function(value){
		this.maxDistance_ = value;
	};

	/** @return {number} */
	qcurve.display.Missile.prototype.getMaxDistance = function(){
		return this.maxDistance_;
	};



	/** @return {qcurve.display.Component|goog.math.Coordinate} */
	qcurve.display.Missile.prototype.getTarget = function(){
		return this.target_;
	};

	/**
	* @private
	* @type {qcurve.display.Component|goog.math.Coordinate}
	*/
	qcurve.display.Missile.prototype.target_ = null;

	/**
	* @private
	* @type {number}
	*/
	qcurve.display.Missile.prototype.targetAngle_ = 0;

	/**
	* @private
	* @type {number}
	*/
	qcurve.display.Missile.prototype.targetClampedAngle_ = 0;

	/**
	* @private
	* @type {number}
	*/
	qcurve.display.Missile.prototype.snappedTargetAngle_ = 0;

	/**
	* @private
	* @type {number}
	*/
	qcurve.display.Missile.prototype.rate_ = 0;

	/**
	* @private
	* @type {number}
	*/
	qcurve.display.Missile.prototype.maxDistance_ = 0;
	

	/**
	* @private
	* @type {boolean}
	*/
	qcurve.display.Missile.prototype.running_ = false;
});
