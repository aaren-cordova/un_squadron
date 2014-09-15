goog.provide('unsquadron.display.Sky0');
goog.require('qcurve.events.Event');
goog.require('qcurve.display.Sprite');

goog.scope(function(){
	var Event = qcurve.events.Event;
	var Sprite = qcurve.display.Sprite;

	/**
	* @constructor
	* @param {string} opt_name
	* @param {number=} opt_numXFrames
	* @param {number=} opt_numYFrames
	* @param {number=} opt_numZFrames
	* @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
	* @extends {qcurve.display.Sprite}
	*/
	unsquadron.display.Sky0 = function(opt_name, opt_numXFrames, opt_numYFrames, opt_numZFrames, opt_domHelper){
		goog.base(this, opt_name || 'sky0', opt_numXFrames || 0, opt_numYFrames || 0, opt_numZFrames || 0, opt_domHelper);
	};
	goog.inherits(unsquadron.display.Sky0, Sprite);

	
});


