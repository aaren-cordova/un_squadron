goog.provide('qcurve.display.Sprite');
goog.require('qcurve.display.Component');
goog.require('goog.asserts');
goog.require('qcurve.asserts');
goog.require('goog.Timer');
goog.require('goog.math');

goog.scope(function(){
	var Component = qcurve.display.Component;
	var Timer = goog.Timer;
	var assert = goog.asserts.assert;
	var assertNumber = goog.asserts.assertNumber;
	var assertString = goog.asserts.assertString;
	var assertInt = qcurve.asserts.assertInt;
	var assertBounds = qcurve.asserts.assertBounds;
	var clamp = goog.math.clamp;

	/**
	* @constructor
	* @param {string} name
	* @param {number=} opt_numXFrames
	* @param {number=} opt_numYFrames
	* @param {number=} opt_numZFrames
	* @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
	* @extends {qcurve.display.Component}
	*/
	qcurve.display.Sprite = function(name, opt_numXFrames, opt_numYFrames, opt_numZFrames, opt_domHelper){
		goog.base(this, opt_domHelper);

		this.name_ = name;

		var numXFrames = clamp(qcurve.asInt(opt_numXFrames), 1, Number.MAX_VALUE);
		var numYFrames = clamp(qcurve.asInt(opt_numYFrames), 1, Number.MAX_VALUE);
		var numZFrames = clamp(qcurve.asInt(opt_numZFrames), 1, Number.MAX_VALUE);

		this.numXFrames_ = numXFrames;
		this.numYFrames_ = numYFrames;
		this.numZFrames_ = numZFrames;
	};
	goog.inherits(qcurve.display.Sprite, Component);

	/** @override */
	qcurve.display.Sprite.prototype.disposeInternal = function(){
		goog.base(this, 'disposeInternal');
	};

	/** @override */
	qcurve.display.Sprite.prototype.createDom = function(){
		goog.base(this, 'createDom');

		this.decorateInternal(this.getElement());
	};


	/** @override */
	qcurve.display.Sprite.prototype.decorateInternal = function(element){
		goog.base(this, 'decorateInternal', element);

		goog.dom.setProperties(element, {'class' : 'sprite_sheet'});
		this.setName(this.name_);
		this.setCurrentFrame(0, 0, 0);
	};

	/** @public */
	qcurve.display.Sprite.prototype.nextXFrame = function(){
		var nextXFrame = (this.getCurrentXFrame() + 1) % this.getNumXFrames();
		this.setCurrentXFrame(nextXFrame);
	};


	/** @public */
	qcurve.display.Sprite.prototype.nextYFrame = function(){
		var nextYFrame = (this.getCurrentYFrame() + 1) % this.getNumYFrames();
		this.setCurrentYFrame(nextYFrame);
	};


	/** @public */
	qcurve.display.Sprite.prototype.nextZFrame = function(){
		var nextZFrame = (this.getCurrentZFrame() + 1) % this.getNumZFrames();
		this.setCurrentZFrame(nextZFrame);
	};


	/** @public */
	qcurve.display.Sprite.prototype.prevXFrame = function(){
		var prevXFrame = (this.getCurrentXFrame() - 1 + this.getNumXFrames()) % this.getNumXFrames();
		this.setCurrentXFrame(prevXFrame);
	};


	/** @public */
	qcurve.display.Sprite.prototype.prevYFrame = function(){
		var prevYFrame = (this.getCurrentYFrame() - 1 + this.getNumYFrames()) % this.getNumYFrames();
		this.setCurrentYFrame(prevYFrame);
	};


	/** @public */
	qcurve.display.Sprite.prototype.prevZFrame = function(){
		var prevZFrame = (this.getCurrentZFrame() - 1 + this.getNumZFrames()) % this.getNumZFrames();
		this.setCurrentZFrame(prevZFrame);
	};


	/**
	* @param {number} frameX
	* @param {number} frameY
	* @param {number} frameZ
	*/
	qcurve.display.Sprite.prototype.setCurrentFrame = function(frameX, frameY, frameZ){
		if(goog.isNumber(frameX)){
			this.setCurrentXFrame(frameX);
		}

		if(goog.isNumber(frameY)){
			this.setCurrentYFrame(frameY);
		}

		if(goog.isNumber(frameZ)){
			this.setCurrentZFrame(frameZ);
		}
	};


	/** @return {number} */
	qcurve.display.Sprite.prototype.getCurrentXFrame = function(){
		return this.getElementAttibute('data-x-frame') | 0;
	};

	/** @param {number} value */
	qcurve.display.Sprite.prototype.setCurrentXFrame = function(value){
		value = qcurve.asInt(value);

		assertBounds(value, 0, this.getNumXFrames(), 'currentXFrame must be >= %s and less than %s, got %s', 0, this.getNumXFrames(), value);
		this.setElementAttibute('data-x-frame', value);
	};


	/** @return {number} */
	qcurve.display.Sprite.prototype.getCurrentYFrame = function(){
		return this.getElementAttibute('data-y-frame') | 0;
	};


	/** @param {number} value */
	qcurve.display.Sprite.prototype.setCurrentYFrame = function(value){
		value = qcurve.asInt(value);
		assertBounds(value, 0, this.getNumXFrames(),  'currentYFrame must be >= %s and less than %s, got %s', 0, this.getNumXFrames(), value);
		this.setElementAttibute('data-y-frame', value);
	};



	/** @return {number} */
	qcurve.display.Sprite.prototype.getCurrentZFrame = function(){
		return this.getElementAttibute('data-z-frame') | 0;
	};


	/** @param {number} value */
	qcurve.display.Sprite.prototype.setCurrentZFrame = function(value){
		value = qcurve.asInt(value);
		assertBounds(value, 0, this.getNumXFrames(),  'currentZFrame must be >= %s and less than %s, got %s', 0, this.getNumXFrames(), value);
		this.setElementAttibute('data-z-frame', value);
	};



	/**  @return {number} */
	qcurve.display.Sprite.prototype.getNumXFrames = function(){
		return this.numXFrames_;
	};


	/** @return {number} */
	qcurve.display.Sprite.prototype.getNumYFrames = function(){
		return this.numYFrames_;
	};


	/**  @return {number} */
	qcurve.display.Sprite.prototype.getNumZFrames = function(){
		return this.numZFrames_;
	};


	/**
	* @private
	* @type {number}
	*/
	qcurve.display.Sprite.prototype.numXFrames_ = 0;

	/**
	* @private
	* @type {number}
	*/
	qcurve.display.Sprite.prototype.numYFrames_ = 0;

	/**
	* @private
	* @type {number}
	*/
	qcurve.display.Sprite.prototype.numZFrames_ = 0;
});
