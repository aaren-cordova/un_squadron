goog.require('qcurve');
goog.require('goog.asserts');
goog.require('goog.string');

goog.provide('qcurve.asserts');

qcurve.asserts.ENABLE_ASSERTS = goog.asserts.ENABLE_ASSERTS;

/**
* Throws an exception with the given message and "Assertion failed" prefixed
* onto it.
* @param {string} defaultMessage The message to use if givenMessage is empty.
* @param {Array.<*>} defaultArgs The substitution arguments for defaultMessage.
* @param {string|undefined} givenMessage Message supplied by the caller.
* @param {Array.<*>} givenArgs The substitution arguments for givenMessage.
* @throws {goog.asserts.AssertionError} When the value is not a number.
* @private
*/
qcurve.asserts.doAssertFailure_ = function(defaultMessage, defaultArgs, givenMessage, givenArgs) {
	var message = 'Assertion failed';
	var args;

	if (givenMessage) {
		message += ': ' + givenMessage;
		args = givenArgs;
	}
	else if (defaultMessage) {
		message += ': ' + defaultMessage;
		args = defaultArgs;
	}

	// The '' + works around an Opera 10 bug in the unit tests. Without it,
	// a stack trace is added to var message above. With this, a stack trace is
	// not added until this line (it causes the extra garbage to be added after
	// the assertion message instead of in the middle of it).
	throw new goog.asserts.AssertionError('' + message, args || []);
};

/**
* @export
* @param {*} value The value to check.
* @param {string=} opt_message Error message in case of failure.
* @param {...number} var_args The items to substitute into the failure message.
* @return {number} The value, guaranteed to be a number when asserts enabled.
* @throws {qcurve.asserts.AssertionError} When the value is not a number.
*/
qcurve.asserts.assertInt = function (value, opt_message, var_args) {
	if (qcurve.asserts.ENABLE_ASSERTS){
		var intValue = qcurve.asInt(value);

		if(intValue !== value) {
			qcurve.asserts.doAssertFailure_('Expected int but got %s: %s.', [goog.typeOf(value), value], opt_message,
			Array.prototype.slice.call(arguments, 2));
		}
	}
	return /** @type {number} */ (value);
};

/**
* Checks if the value is a number if goog.asserts.ENABLE_ASSERTS is true.
* @param {*} value The value to check.
* @param {string=} opt_message Error message in case of failure.
* @param {...*} var_args The items to substitute into the failure message.
* @return {number} The value, guaranteed to be a number when asserts enabled.
* @throws {goog.asserts.AssertionError} When the value is not a number.
*/
qcurve.asserts.assertValidNumber = function(value, opt_message, var_args) {
	if (qcurve.asserts.ENABLE_ASSERTS && !qcurve.isValidNumber(value)) {
		qcurve.asserts.doAssertFailure_('Expected valid number but got %s: %s.',
				[goog.typeOf(value), value], opt_message,
				Array.prototype.slice.call(arguments, 2));
	}
	return /** @type {number} */ (value);
};

/**
* @export
* @param {number} value The value to check.
* @param {number} low
* @param {number} high
* @param {string=} opt_message Error message in case of failure.
* @param {...number} var_args The items to substitute into the failure message.
* @return {number} The value, guaranteed to be a number when asserts enabled.
* @throws {qcurve.asserts.AssertionError} When the value is not a number.
*/
qcurve.asserts.assertBounds = function (value, low, high, opt_message, var_args) {
	if (qcurve.asserts.ENABLE_ASSERTS ){

		if(value < low || value >= high) {
			qcurve.asserts.doAssertFailure_('Expected value to be greater than or equal to %s and less than %s but got %s.', [low, high, value], opt_message,
			Array.prototype.slice.call(arguments, 4));
		}
	}
	return /** @type {number} */ (value);
};

/**
* @export
* @param {*} value The value to check.
* @param {string=} opt_message Error message in case of failure.
* @param {...number} var_args The items to substitute into the failure message.
* @return {string} The value, guaranteed to be a string when asserts enabled.
* @throws {qcurve.asserts.AssertionError} When the value is not a string.
*/
qcurve.asserts.assertNonEmptyString = function (value, opt_message, var_args) {
	if (qcurve.asserts.ENABLE_ASSERTS && (!goog.isString(value) || !value)) {
		qcurve.asserts.doAssertFailure_('Expected non empty string but got %s: %s -length=.', [goog.typeOf(value), value, 'length' in value ? value.length : 0], opt_message,
			Array.prototype.slice.call(arguments, 2));
	}
	return /** @type {string} */ (value);
};