goog.provide('qcurve.events.ChangeEvent');

goog.require('goog.events');
goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.scope(function(){

	/**
	* @constructor
	* @param {string} type
	* @param {goog.events.EventTarget=} opt_target
	* @extends {goog.events.Event}
	*/
	qcurve.events.ChangeEvent = function(type, opt_target){
		goog.base(this, type, opt_target);
	};
	goog.inherits(qcurve.events.ChangeEvent, goog.events.Event);

	/** 
	* @param{string} str
	* @return {string} 
	*/
	qcurve.events.ChangeEvent.getType = function(str){
		return qcurve.events.ChangeEvent.CHANGE + '{' + goog.events.getUniqueId(str) + '}';
	};

	/** @const */
	qcurve.events.ChangeEvent.CHANGE = goog.events.getUniqueId('change');
});
