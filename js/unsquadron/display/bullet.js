goog.provide('unsquadron.display.Bullet');

goog.require('goog.events');
goog.require('goog.Timer');
goog.require('goog.math.Coordinate');
goog.require('qcurve.display');
goog.require('qcurve.display.Sprite');
goog.require('qcurve.display.Missile');

//goog.require('greensock.TweenLite');
//goog.require('greensock.Linear');

goog.scope(function(){
	var Timer = goog.Timer;
	var Event = qcurve.events.Event;
	var Missile = qcurve.display.Missile;
	var Coordinate = goog.math.Coordinate;

	var listen = goog.events.listen;
	var unlisten = goog.events.unlisten;

	/**
	* @constructor
	* @param {string} name
	* @param {number=} numXFrames
	* @param {number=} numYFrames
	* @param {number=} numZFrames
	* @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
	* @extends {qcurve.display.Missile}
	*/
	unsquadron.display.Bullet = function(name, numXFrames, numYFrames, numZFrames, opt_domHelper){
		goog.base(this, name, numXFrames, numYFrames, numZFrames, opt_domHelper);
	};
	goog.inherits(unsquadron.display.Bullet, qcurve.display.Missile);

	/** @override */
	unsquadron.display.Bullet.prototype.enterDocument = function(){
		goog.base(this, 'enterDocument');


		if(this.getNumXFrames()){
			listen(qcurve.display.getEnterFrameTimer(), Timer.TICK, unsquadron.display.Bullet.prototype.onEnterFrameTime_, false, this);
		}
	};

	/** @override */
	unsquadron.display.Bullet.prototype.exitDocument = function(){
		goog.base(this, 'exitDocument');

		if(this.getNumXFrames()){
			unlisten(qcurve.display.getEnterFrameTimer(), Timer.TICK, unsquadron.display.Bullet.prototype.onEnterFrameTime_);
		}
	};

	/** @override */
	unsquadron.display.Bullet.prototype.stopInternal = function(){
		this.getParent().removeChild(this, true);
	};


	/** @override */
	unsquadron.display.Bullet.prototype.disposeInternal = function(){
		goog.base(this, 'disposeInternal');

		if(this.getNumXFrames()){
			unlisten(qcurve.display.getEnterFrameTimer(), Timer.TICK, unsquadron.display.Bullet.prototype.onEnterFrameTime_);
		}
	};

	unsquadron.display.Bullet.prototype.enterFrameInteral = function(){
	};

	/**
	* @private
	* @param {goog.events.Event} event
	*/
	unsquadron.display.Bullet.prototype.onEnterFrameTime_ = function(event){
		this.enterFrameInteral();
	};
});
