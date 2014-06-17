goog.scope(function(){
	goog.require('goog.userAgent');
	goog.require('goog.asserts');
	goog.require('qcurve.asserts');
	goog.require('goog.math.Coordinate');
	goog.provide('qcurve.style');

	var assert = goog.asserts.assert;
	var assertString = goog.asserts.assert;
	var assertValidNumber = qcurve.asserts.assertValidNumber;
	var Coordinate = goog.math.Coordinate;

	/**
	* Sets the left values of an element.  If no unit is specified in the
	* argument then it will add px. The second argument is required if the first
	* argument is a string or number and is ignored if the first argument
	* is a coordinate.
	* @param {!Element} el Element to move.
	* @param {number} x
	* @param {number} y
	*/
	qcurve.style.setXY = function(el, x, y) {
		assert(el);
		assertValidNumber(x);
		assertValidNumber(y);

		var elementStyle = el['style'];
		elementStyle['left'] = qcurve.style.getPixelStyleValue_(x);
		elementStyle['top'] = qcurve.style.getPixelStyleValue_(y);
	};

	/**
	* Sets the left values of an element.  If no unit is specified in the
	* argument then it will add px. The second argument is required if the first
	* argument is a string or number and is ignored if the first argument
	* is a coordinate.
	* @param {!Element} el Element to move.
	*/
	qcurve.style.setPosition = function(el, coord) {
		qcurve.style.setXY(el, coord.x, coord.y);
	};

	qcurve.style.getPosition = goog.style.getPosition;

	/**
	* @param {!Element} el Element to move.
	* @param {string} property
	* @return {string} property
	*/
	qcurve.style.getProperty = function(el, property) {
		assert(el);

		return el.style[property];
	};

	/**
	* @param {!Element} el Element to move.
	* @param {number} value
	*/
	qcurve.style.setPropertyByPixel = function(el, property, value) {
		assert(el);
		assertString(property);
		assertValidNumber(value);
		el.style[property] = qcurve.style.getPixelStyleValue_(value);
	};

	/** 
	* @param {!Element} el Element to move.
	* @return {!goog.math.Coordinate}*/
	qcurve.style.getCenterCoordinate = function(el){
		assert(el);

		return new Coordinate(
			(el.offsetWidth / 2), 
			(el.offsetHeight / 2)
		);
	};

	/**
	* @param {!Element} el Element to move.
	* @return {number}
	*/
	qcurve.style.getX = function(el) {
		assert(el);
		return el.offsetLeft;
	};

	/**
	* @param {!Element} el Element to move.
	* @param {number} value
	*/
	qcurve.style.setX = function(el, value) {
		qcurve.style.setPropertyByPixel(el, 'left', value);
	};

	/**
	* @param {!Element} el Element to move.
	* @return {number}
	*/
	qcurve.style.getY = function(el) {
		assert(el);
		return el.offsetTop;
	};

	/**
	* @param {!Element} el Element to move.
	* @param {number} value
	*/
	qcurve.style.setY = function(el, value) {
		qcurve.style.setPropertyByPixel(el, 'top', value);
	};

	/**
	* @param {!Element} el Element to move.
	*/
	qcurve.style.getWidth = function(el) {
		assert(el);
		return el.offsetWidth;
	};

	/**
	* @param {!Element} el Element to move.
	* @param {number} value
	*/
	qcurve.style.setWidth = function(el, value) {
		qcurve.style.setPropertyByPixel(el, 'width', value);
	};

	/**
	* @param {!Element} el Element to move.
	*/
	qcurve.style.getHeight = function(el) {
		assert(el);
		return el.offsetHeight;
	};

	/**
	* @param {!Element} el Element to move.
	* @param {number} value
	*/
	qcurve.style.setHeight = function(el, value) {
		qcurve.style.setPropertyByPixel(el, 'height', value);
	};
	
	
	/**
	* @private
	* @type {boolean}
	*/
	qcurve.style.isBuggyPixelPos_ = goog.userAgent.GECKO &&
		(goog.userAgent.MAC || goog.userAgent.X11) &&
		goog.userAgent.isVersion('1.9');

	/**
	* Helper function to create a string to be set into a pixel-value style
	* property of an element. Can round to the nearest integer value.
	*
	* @param {number} value The style value to be used. If a number,
	*     'px' will be appended, otherwise the value will be applied directly.
	* @return {string} The string value for the property.
	* @private
	*/
	qcurve.style.getPixelStyleValue_ = qcurve.style.isBuggyPixelPos_ ?
		(function(value) {
			return value + 'px';
		})
		:
		(function(value) {
			return Math.round(value) + 'px';
		});
});
