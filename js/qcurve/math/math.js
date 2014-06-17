goog.provide('qcurve.math');
goog.require('goog.asserts');
goog.require('goog.math');

goog.scope(function(){
	var standardAngle = goog.math.standardAngle;

	/**
	* @param {number} a
	* @param {number} b
	* @return {number}
	*/
	qcurve.math.multiply = function(a, b){
		return a * b;
	};

	/**
	* @param {number} a
	* @param {number} b
	* @return {number}
	*/
	qcurve.math.divide = function(a, b){
		return a / b;
	};

	/**
	* @param {number} a
	* @param {number} b
	* @return {number}
	*/
	qcurve.math.add = function(a, b){
		return a + b;
	};

	/**
	* @param {number} a
	* @param {number} b
	* @return {number}
	*/
	qcurve.math.subtract = function(a, b){
		return a - b;
	};

	/**
	* @param {number} low
	* @param {number} high
	* @param {number} split
	* @return {number}
	*/
	qcurve.math.getVarience = function(low, high, split){
		return (high - low) / split;
	};

	/**
	* @param {number} angle
	* @param {number} snapTo
	* @return {number}
	*/
	qcurve.math.snapAngle = function(angle, snapTo){
		var snappedAngle = qcurve.math.snap(angle, snapTo);
		return standardAngle(snappedAngle);
	};

	/**
	* @param {number} value
	* @param {number} startAngle
	* @param {number} endAngle
	* @return {number}
	*/
	qcurve.math.clampAngle = function(value, startAngle, endAngle) {
		if(value >= startAngle && value <= endAngle){
			return value;
		}

		var diff = 360 - endAngle + startAngle;
		return standardAngle(qcurve.math.snap(value, diff));
	};

	/**
	* @param {number} value
	* @param {number} snap
	* @return {number}
	*/
	qcurve.math.snap = function(value, snap){
		return Math.round(value / snap) * snap;
	};

	/**
	* @param {number} value
	* @param {number} snap
	* @return {number}
	*/
	qcurve.math.snapToCeil = function(value, snap){
		return Math.ceil(value / snap) * snap;
	};

	/**
	* @param {number} value
	* @param {number} snap
	* @return {number}
	*/
	qcurve.math.snapToFloor = function(value, snap){
		return Math.floor(value / snap) * snap;
	};
});
