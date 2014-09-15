goog.provide('unsquadron.display.MobileMissileLauncher');

goog.require('goog.events');
goog.require('goog.Timer');
goog.require('goog.math');
goog.require('goog.dom');
goog.require('qcurve.display.Sprite');
goog.require('qcurve.display.MissileLauncher');
goog.require('goog.asserts');

goog.scope(function(){
	var Timer = goog.Timer;
	var MissileLauncher = qcurve.display.MissileLauncher;
	var getEnterFrameTimer = qcurve.display.getEnterFrameTimer;
	var listen = goog.events.listen;
	var unlisten = goog.events.unlisten;
	var assert = goog.asserts.assert;
	var angle = goog.math.angle;

	/**
	* @constructor
	* @param {string} name
	* @param {number} numXFrames
	* @param {number} numYFrames
	* @param {number} numZFrames
	* @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
	* @extends {qcurve.display.Sprite}
	*/
	unsquadron.display.MobileMissileLauncher = function(name, numXFrames, numYFrames, numZFrames, opt_domHelper){
		goog.base(this, name, numXFrames, numYFrames, numZFrames, opt_domHelper);

		this.missileLauncher_ = new MissileLauncher(this);
		this.missileLauncher_.setNumAngles(this.getNumXFrames() - 1);
	};
	goog.inherits(unsquadron.display.MobileMissileLauncher, qcurve.display.Sprite);

	/** @override */
	unsquadron.display.MobileMissileLauncher.prototype.enterDocument = function(){
		goog.base(this, 'enterDocument');

		var fireTimer = this.missileLauncher_.getFireTimer();
		fireTimer.start();

		listen(getEnterFrameTimer(), Timer.TICK, this.onEnterFrameTimer_, false, this);
	};

	/** @override */
	unsquadron.display.MobileMissileLauncher.prototype.exitDocument = function(){
		goog.base(this, 'exitDocument');

		var fireTimer = this.missileLauncher_.getFireTimer();
		fireTimer.stop();

		unlisten(getEnterFrameTimer(), Timer.TICK, this.onEnterFrameTimer_, false, this);
	};

	/** @override */
	unsquadron.display.MobileMissileLauncher.prototype.disposeInternal = function(){
		goog.base(this, 'disposeInternal');

		this.missileLauncher_.dispose();

		delete this.missileLauncher_;
	};

	/**
	* @protected
	* @param {number} horizontalDir
	* @param {number} verticalDir
	*/
	unsquadron.display.MobileMissileLauncher.prototype.updateDirectionInternal = function(horizontalDir, verticalDir){
		if(horizontalDir < 0){
			this.setX(this.getX() - this.horizontalSpeed_);
		}
		else if(horizontalDir > 0){
			this.setX(this.getX() + this.horizontalSpeed_);
		}

		if(verticalDir < 0){
			this.setY(this.getY() - this.verticalSpeed_);
		}
		else if(verticalDir > 0){
			this.setY(this.getY() + this.verticalSpeed_);
		}
	};

	/** @private */
	unsquadron.display.MobileMissileLauncher.prototype.travelToTarget_ = function (){
		var target = this.getMissleTarget();
		if(!target){
			return;
		}

		var targetX = qcurve.asInt(target.getX());
		var x = qcurve.asInt(this.getX());
		var minDistanceToMove = 75;
		var diff = targetX - x;

		if(diff < -minDistanceToMove){
			this.horizontalDirection_ = -1;
		}
		else if(diff > minDistanceToMove){
			this.horizontalDirection_ = 1;
		}
		else{
			this.horizontalDirection_ = 0;
		}
	};

	/**
	* @private
	* @param {goog.events.Event} event
	*/
	unsquadron.display.MobileMissileLauncher.prototype.onEnterFrameTimer_ = function(event){
		this.updateDirectionInternal(this.horizontalDirection_, this.verticalDirection_);
		this.missileLauncher_.tryPointBarrelToMissleTarget();
		this.travelToTarget_();
	};

	/**
	* @public
	* @return {number}
	*/
	unsquadron.display.MobileMissileLauncher.prototype.getHorizontalSpeed = function(){
		return this.horizontalSpeed_;
	};

	/**
	* @public
	* @param {number} value
	*/
	unsquadron.display.MobileMissileLauncher.prototype.setHorizontalSpeed = function(value){
		assert(goog.isNumber(value) && value >= 0, 'speed must be >= 0', value);
		this.horizontalSpeed_ = value;
	};

	/**
	* @public
	* @return {qcurve.display.MissileLauncher}
	*/
	unsquadron.display.MobileMissileLauncher.prototype.getMissleLauncher = function(){
		return this.missileLauncher_;
	};

	/** @public */
	unsquadron.display.MobileMissileLauncher.prototype.getMissleTarget = function(){
		return this.getMissleLauncher().getMissleTarget();
	};

	/** @public */
	unsquadron.display.MobileMissileLauncher.prototype.setMissleTarget = function(value){
		this.getMissleLauncher().setMissleTarget(value);
	};

	/**
	* @private
	* @type {number}
	*/
	unsquadron.display.MobileMissileLauncher.prototype.horizontalDirection_ = 0;

	/**
	* @private
	* @type {number}
	*/
	unsquadron.display.MobileMissileLauncher.prototype.verticalDirection_ = 0;

	/**
	* @private
	* @type {number}
	*/
	unsquadron.display.MobileMissileLauncher.prototype.horizontalSpeed_ = 0;

	/**
	* @private
	* @type {number}
	*/
	unsquadron.display.MobileMissileLauncher.prototype.verticalSpeed_ = 0;

	/**
	* @private
	* @type {qcurve.display.MissileLauncher}
	*/
	unsquadron.display.MobileMissileLauncher.prototype.missileLauncher_ = null;
});
