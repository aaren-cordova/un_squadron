goog.provide('qcurve.display.MissileLauncher');
goog.require('goog.asserts');
goog.require('goog.events.EventTarget');
goog.require('goog.math');
goog.require('goog.math.Coordinate');
goog.require('goog.Disposable');
goog.require('goog.Timer');
goog.require('qcurve.display.Component');
goog.require('qcurve.math');
goog.require('qcurve.asserts');
goog.require('qcurve.math');
goog.require('greensock.TweenMax');
goog.require('unsquadron.display.MissileFactory');

goog.scope(function(){
	var Timer = goog.Timer;
	var EventTarget = goog.events.EventTarget;
	var Coordinate = goog.math.Coordinate;
	var assert = goog.asserts.assert;
	var assertValidNumber = qcurve.asserts.assertValidNumber;
	var angleDifference = goog.math.angleDifference;
	var standardAngle = goog.math.standardAngle;
	var snapAngle = qcurve.math.snapAngle;
	var angleDx = goog.math.angleDx;
	var angleDy = goog.math.angleDy;
	var angle = goog.math.angle;
	var TweenMax = greensock.TweenMax;
	var MissileFactory = unsquadron.display.MissileFactory;

	/**
	* @constructor
	* @param {qcurve.display.Sprite} sprite
	* @extends {goog.Disposable}
	*/
	qcurve.display.MissileLauncher = function(sprite){
		goog.base(this);

		this.sprite_ = sprite;
		this.missiles_ = [];
		this.defaultMissleClassParams_ = [];
		this.fireTimer_ = new Timer(1000);
		this.cooldownTimer_ = new Timer(0);

		this.fireTimer_.addEventListener(Timer.TICK, this.onFireTimerTick_, false, this);
	};
	goog.inherits(qcurve.display.MissileLauncher, goog.Disposable);

	/**
	* @public
	* @return {goog.Timer}
	*/
	qcurve.display.MissileLauncher.prototype.getFireTimer = function(){
		return this.fireTimer_;
	};

	/**
	* @public
	* @return {goog.Timer}
	*/
	qcurve.display.MissileLauncher.prototype.getCooldownTimer = function(){
		return this.cooldownTimer_;
	};

	/** @public */
	qcurve.display.MissileLauncher.prototype.launchMissile = function(){
		var missile = this.getNextMissileForLaunch_();

		if(!missile){
			throw new Error("No missiles available");
		}

		this.getMissleTarget().getParent().addChild(missile, !missile.getElement());

		this.invalidateTargetAngle();
		this.positionMissile_(missile);

		var currentXFrame = this.getSnappedToFrame(missile.getNumXFrames());
		missile.setCurrentXFrame(currentXFrame);
		missile.start();

		var position = missile.getPosition();
		var x = qcurve.asInt(position.x);
		var y = qcurve.asInt(position.y);

		var targetCoordinate = this.missileTarget_.getPosition();
		var targetAngle = angle(x, y, targetCoordinate.x, targetCoordinate.y);

		var rate = missile.getRate();
		var distance = missile.getMaxDistance();
		var time = distance / rate;

		TweenMax.to(missile.getElement(), time, {
			'left': (x + angleDx(targetAngle, distance)) + 'px',
			'top': (y + angleDy(targetAngle, distance)) + 'px',
			'ease': greensock.Linear.easeNone,
			'onComplete': this.onMissileTweenComplete_,
			'onCompleteParams': [{target: missile}],
			'onCompleteScope': missile
		});
	};

	/** @public */
	qcurve.display.MissileLauncher.prototype.invalidateTargetAngle = function(){
		var target = this.missileTarget_;
		var localToGlobal = this.sprite_.getLocalToGlobal();
		var targetGlobalToLocal = target.getGlobalToLocal(localToGlobal);

		var targetAngle = goog.math.angle(target.getX(), target.getY(), localToGlobal.x, localToGlobal.y);
		var clampedTargetAngle = qcurve.math.clampAngle(targetAngle, this.angleFloor_, this.angleCeil_);
		this.angle_ = targetAngle;
		this.clampedAngle_ = clampedTargetAngle;

		if(this.angleVarience_){
			this.snappedAngle_ = snapAngle(clampedTargetAngle, this.angleVarience_);
		}
	};


	/** @private */
	qcurve.display.MissileLauncher.prototype.positionMissile_ = function (missle){
		var localToGlobal = this.sprite_.getPosition();
		var centerCoordinate = missle.getCenterCoordinate();

		var missileOrigin = localToGlobal.translate(this.offsetCoordinate_).translate(-centerCoordinate.x, -centerCoordinate.y);
		var snappedAngle = this.getSnappedAngle();
		var barrelLength = this.getBarrelLength();

		missle.setXY(
			localToGlobal.x - angleDx(snappedAngle, barrelLength),
			localToGlobal.y - angleDy(snappedAngle, barrelLength)
		);
	};

	/** @override */
	qcurve.display.MissileLauncher.prototype.disposeInternal = function(){
		goog.base(this, 'disposeInternal');

		this.fireTimer_.removeEventListener(Timer.TICK, this.onFireTimerTick_, false, this);
		this.fireTimer_.dispose();

		this.cooldownTimer_.removeEventListener(Timer.TICK, this.onCooldownTimerTick_, false, this);
		this.cooldownTimer_.dispose();

		delete this.missiles_;
		delete this.missileTarget_;
		delete this.fireTimer_;
		delete this.cooldownTimer_;
	};

	/** @param {!qcurve.display.Missile} value */
	qcurve.display.MissileLauncher.prototype.addMissile = function(value){
		assert(value);
		this.missiles_.push(value);
	};

	/** @public */
	qcurve.display.MissileLauncher.prototype.tryPointBarrelToMissleTarget = function(){
		if(this.missileTarget_ && this.sprite_.getElement()){
			this.pointBarrelToMissleTarget();
		}
	};

	/** @public */
	qcurve.display.MissileLauncher.prototype.pointBarrelToMissleTarget = function(){
		var target = this.missileTarget_;

		this.invalidateTargetAngle();

		var offsetCoordinate = this.sprite_.getPosition().translate(this.offsetCoordinate_);
		var currentXFrame = this.getSnappedToFrame(this.sprite_.getNumXFrames());
		this.sprite_.setCurrentXFrame(currentXFrame);
	};

	qcurve.display.MissileLauncher.prototype.getSnappedToFrame = function(numFrames){
		return (this.getSnappedAngle() / this.getAngleCeil()) * (numFrames - 1);
	};

	/** @private */
	qcurve.display.MissileLauncher.prototype.onFireTimerTick_ = function(event){
		this.launchMissile();
	};

	/** @private */
	qcurve.display.MissileLauncher.prototype.onCooldownTimerTick_ = function(event){
	};

	/** @return {qcurve.display.Component} */
	qcurve.display.MissileLauncher.prototype.getMissleTarget = function(){
		return this.missileTarget_;
	};

	/**
	* @public
	* @param {goog.math.Coordinate} value
	*/
	qcurve.display.MissileLauncher.prototype.setOffsetCoordinate = function(value){
		this.offsetCoordinate_ = value;
	};

	/**
	* @public
	* @param {qcurve.display.Component} value
	*/
	qcurve.display.MissileLauncher.prototype.setMissleTarget = function(value){
		this.missileTarget_ = value;
		this.tryPointBarrelToMissleTarget.call(this);
	};

	/** @return {number} */
	qcurve.display.MissileLauncher.prototype.getFireRate = function(){
		return this.fireTimer_.getInterval();
	};


	/** @param {number} value */
	qcurve.display.MissileLauncher.prototype.setFireRate = function(value){
		assert(value > 0, 'fireRate must be greater than 0, got %s', value);

		this.fireTimer_.setInterval(1000 / value);
	};

	/** @return {string} */
	qcurve.display.MissileLauncher.prototype.getDefaultMissleType = function(){
		return this.defaultMissleType_;
	};

	/** @param {string} value */
	qcurve.display.MissileLauncher.prototype.setDefaultMissleType = function(value){
		this.defaultMissleType_ = value;
	};

	/** @return {number} */
	qcurve.display.MissileLauncher.prototype.getBarrelLength = function(){
		return this.barrelLength_;
	};

	/** @param {number} value */
	qcurve.display.MissileLauncher.prototype.setBarrelLength = function(value){
		this.barrelLength_ = value;
	};

	/**
	* @private
	* @return {qcurve.display.Missile}
	*/
	qcurve.display.MissileLauncher.prototype.getNextMissileForLaunch_ = function(){
		var missile;

		if(this.missiles_.length){
			return this.missiles_.shift();
		}
		else if(this.defaultMissleType_){		
			return MissileFactory.getMissile(this.defaultMissleType_);
		}

		return null;
	};

	/** @return {number} */
	qcurve.display.MissileLauncher.prototype.getAngleCeil = function(){
		return this.angleCeil_;
	};

	/** @param {number} value */
	qcurve.display.MissileLauncher.prototype.setAngleCeil = function(value){
		if(this.angleCeil_ !== value){
			this.angleCeil_ = value;
			this.detectAngleVarience_();
		}
	};

	/** @return {number} */
	qcurve.display.MissileLauncher.prototype.getAngleFloor = function(){
		return this.angleFloor_;
	};

	/** @param {number} value */
	qcurve.display.MissileLauncher.prototype.setAngleFloor = function(value){
		if(this.angleFloor_ !== value){
			this.angleFloor_ = value;
			this.detectAngleVarience_();
		}
	};

	/** @return {number} */
	qcurve.display.MissileLauncher.prototype.getNumAngles = function(){
		return this.numAngles_;
	};

	/** @private */
	qcurve.display.MissileLauncher.prototype.detectAngleVarience_ = function(){
		if(this.numAngles_ && (this.angleFloor_ || this.angleCeil_)){
			var angleDiff = angleDifference(this.angleFloor_, this.angleCeil_);
			var standardAngleDiff = standardAngle(angleDiff);
			this.angleVarience_ = standardAngleDiff / this.numAngles_;
		}
	};

	/** @param {number} value */
	qcurve.display.MissileLauncher.prototype.setNumAngles = function(value){
		assertValidNumber(value);
		if(this.numAngles_ !== value){
			this.numAngles_ = value;
			this.detectAngleVarience_();
		}
	};

	qcurve.display.MissileLauncher.prototype.getSnappedAngle = function(){
		return this.snappedAngle_;
	};

	qcurve.display.MissileLauncher.prototype.onMissileTweenComplete_ = function (event){
		var missile = event.target;
		missile.stop();
	};

	/**
	* @private
	* @type {qcurve.display.Sprite}
	*/
	qcurve.display.MissileLauncher.prototype.sprite_ = null;

	/**
	* @private
	* @type {qcurve.display.Missile}
	*/
	qcurve.display.MissileLauncher.prototype.missileToLaunch_ = null;

	/**
	* @private
	* @type {number}
	*/
	qcurve.display.MissileLauncher.prototype.barrelLength_ = 0;

	/**
	* @private
	* @type {number}
	*/
	qcurve.display.MissileLauncher.prototype.snappedAngle_ = 0;

	/**
	* @private
	* @type {number}
	*/
	qcurve.display.MissileLauncher.prototype.angleVarience_ = 0;

	/**
	* @private
	* @type {number}
	*/
	qcurve.display.MissileLauncher.prototype.angleFloor_ = 0;

	/**
	* @private
	* @type {number}
	*/
	qcurve.display.MissileLauncher.prototype.angleCeil_ = 0;

	/**
	* @private
	* @type {string}
	*/
	qcurve.display.MissileLauncher.prototype.defaultMissleType_ = '';

	/**
	* @private
	* @type {goog.Timer}
	*/
	qcurve.display.MissileLauncher.prototype.fireTimer_ = null;

	/**
	* @private
	* @type {Array.<qcurve.display.Missile>}
	*/
	qcurve.display.MissileLauncher.prototype.missiles_ = null;



	/**
	* @private
	* @type {qcurve.display.Component}
	*/
	qcurve.display.MissileLauncher.prototype.missileTarget_ = null;
});
