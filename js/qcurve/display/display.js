goog.provide('qcurve.display');
goog.require('goog.asserts');
goog.require('goog.Timer');


goog.scope(function(){
	var Timer = goog.Timer;
	var assert = goog.asserts.assert;
	var assertNumber = goog.asserts.assertNumber;

	

	/** @return {!goog.Timer} */
	qcurve.display.getEnterFrameTimer = function(){
		return qcurve.display.enterFrameTimer_;
	};

	/** @return {number} */
	qcurve.display.getFrameRate = function(){
		return qcurve.display.frameRate_;
	};

	/** @param {number} value */
	qcurve.display.setFrameRate = function(value){
		assertNumber(value);
		assert(value > 0);

		qcurve.display.frameRate_ = value;
		qcurve.display.enterFrameTimer_.setInterval(1000 / value);
	};

	/**
	* @private
	* @type {!goog.Timer}
	*/
	qcurve.display.enterFrameTimer_ = new Timer();

	/**
	* @private
	* @type {number}
	*/
	qcurve.display.frameRate_ = 0;

	/** @define {number} */
	qcurve.display.DEFAULT_FRAME_RATE = 8;

	qcurve.display.setFrameRate(qcurve.display.DEFAULT_FRAME_RATE);
	qcurve.display.enterFrameTimer_.start();
});
