goog.provide('unsquadron.display.Helicopter');
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
	unsquadron.display.Helicopter = function(opt_name, opt_numXFrames, opt_numYFrames, opt_numZFrames, opt_domHelper){
		goog.base(this, opt_name || 'helicopter', opt_numXFrames || 5, opt_numYFrames || 2, opt_numZFrames || 2, opt_domHelper);
	};
	goog.inherits(unsquadron.display.Helicopter, Sprite);

	/** @override */
	unsquadron.display.Helicopter.prototype.enterDocument = function(){
		goog.base(this, 'enterDocument');

		goog.events.listen(this.getRoot(), Event.ENTER_FRAME, this.onEnterFrame$unsquadron_display_Helicopter_);
	};

	/** @override */
	unsquadron.display.Helicopter.prototype.exitDocument = function(){
		goog.base(this, 'exitDocument');

		goog.events.unlisten(this.getRoot(), Event.ENTER_FRAME, this.onEnterFrame$unsquadron_display_Helicopter_);
	};

	/** @override */
	unsquadron.display.Helicopter.prototype.disposeInternal = function(){
		goog.base(this, 'disposeInternal');
		goog.events.unlisten(this.getRoot(), Event.ENTER_FRAME, this.onEnterFrame$unsquadron_display_Helicopter_);
	};

	/**
	* @private
	* @param {goog.events.Event} event
	*/
	unsquadron.display.Helicopter.prototype.onEnterFrame$unsquadron_display_Helicopter_ = function(event){
		this.nextYFrame();
	};
});


