/** @externs */
var greensock = {};

/**
* @constructor
* @param {!*} target
* @param {number} duration
* @param {!Object} vars
*/
greensock.TweenMax = function(target, duration, vars) {};

/**
* @param {!*} target
* @param {number} duration
* @param {!Object} vars
* @return {!greensock.TweenMax}
*/
greensock.TweenMax.to = function(target, duration, vars) {};

/**
* @param {!*} target
* @param {number} duration
* @param {!Object} vars
* @return {!greensock.TweenMax}
*/
greensock.TweenMax.from = function(target, duration, vars) {};

/**
* @param {!*} target
* @param {number} duration
* @param {!Object} fromVars
* @param {!Object} toVars
* @return {!greensock.TweenMax}
*/
greensock.TweenMax.fromTo = function(target, duration, fromVars, toVars) {};

/**
* @return {!greensock.TweenMax} scope
*/
greensock.TweenMax.delayedCall = function(delay, callback, params, scope, useFrames) {};

/**
* @param {!*} target
* @param {!Object} vars
* @return {!greensock.TweenMax}
*/
greensock.TweenMax.set = function(target, vars) {};

/**
* @param {!*} target
* @param {!Object} vars
* @return {!greensock.TweenMax}
*/
greensock.TweenMax.killTweensOf = function(target, vars) {};

/**
* @param {!*} target
* @param {!Object} vars
* @return {!greensock.TweenMax}
*/
greensock.TweenMax.killDelayedCallsTo = function(target, vars) {};

/**
* @param {!*} target
* @return {!Array.<greensock.TweenMax>}
*/
greensock.TweenMax.getTweensOf = function(target) {};

/**
* @constructor
* @param {!*} target
* @param {number} duration
* @param {!Object} vars
*/
greensock.TweenLite = function(target, duration, vars) {};

/**
* @param {!*} target
* @param {number} duration
* @param {!Object} vars
* @return {!greensock.TweenLite}
*/
greensock.TweenLite.to = function(target, duration, vars) {};

/**
* @param {!*} target
* @param {number} duration
* @param {!Object} vars
* @return {!greensock.TweenLite}
*/
greensock.TweenLite.from = function(target, duration, vars) {};

/**
* @param {!*} target
* @param {number} duration
* @param {!Object} fromVars
* @param {!Object} toVars
* @return {!greensock.TweenLite}
*/
greensock.TweenLite.fromTo = function(target, duration, fromVars, toVars) {};

/**
* @return {!greensock.TweenLite} scope
*/
greensock.TweenLite.delayedCall = function(delay, callback, params, scope, useFrames) {};

/**
* @param {!*} target
* @param {!Object} vars
* @return {!greensock.TweenLite}
*/
greensock.TweenLite.set = function(target, vars) {};

/**
* @param {!*} target
* @param {!Object} vars
* @return {!greensock.TweenLite}
*/
greensock.TweenLite.killTweensOf = function(target, vars) {};

/**
* @param {!*} target
* @param {!Object} vars
* @return {!greensock.TweenLite}
*/
greensock.TweenLite.killDelayedCallsTo = function(target, vars) {};

/**
* @param {!*} target
* @return {!Array.<greensock.TweenLite>}
*/
greensock.TweenLite.getTweensOf = function(target) {};


greensock.Linear = {};
greensock.Linear.easeIn = function(){};
greensock.Linear.easeInOut = function(){};
greensock.Linear.easeOut = function(){};
greensock.Linear.easeNone = function(){};

