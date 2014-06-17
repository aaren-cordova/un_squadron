goog.provide('qcurve');

/** @param {Function} fn */
qcurve.closure = function(fn){
	return fn();
};

/**
* @param {*} value
* @param {Function} Class
* @return {boolean}
*/
qcurve.is = function(value, Class){
	return value instanceof Class;
};

/**
* @param {*} value
* @param {Function} Class
* @return {Object|string|boolean|number}
*/
qcurve.as = function(value, Class){
	if(qcurve.is(value, Class)){
		return /** @type{Object|string|boolean|number} */(value);
	}
	return null;
};

/**
* @param {*} value
* @return {!Array}
*/
qcurve.asArray = function(value){
	if(goog.isArray(value)){
		return /** @type {!Array} */ (value);
	}

	return [value];
};

/**
* @param {*} value
* @return {string}
*/
qcurve.asString = function(value) {
	if(value){
		return value.toString();
	}

	return '';
};

/**
* @param {*} value Variable to test.
* @return {boolean} Whether variable is boolean.
*/
qcurve.asBoolean = function(value) {
	return !!value;
};

/**
* @param {*} value Variable to test.
* @return {number} Whether variable is a number.
*/
qcurve.asNumber = function(value) {
	if(goog.isNumber(value)){
		return value;
	}

	return NaN;
};

/**
* @param {*} value Variable to test.
* @return {boolean} Whether variable is a valid number.
*/
qcurve.isValidNumber = function(value) {
	if(goog.isNumber(value) && !isNaN(value)){
		return true;
	}

	return false;
};

/**
* @param {*} value Variable to test.
* @return {number} Whether variable is a number.
*/
qcurve.asValidNumber = function(value) {
	if(qcurve.isValidNumber(value)){
		return /** @type {number} */ (value);
	}

	return 0;
};

/**
* @param {*} value Variable to test.
* @return {number} Whether variable is a number.
*/
qcurve.asInt = function(value) {
	return /** @type {number} */ (value) | 0;
};