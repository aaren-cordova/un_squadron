goog.require('qcurve.display.Sprite');

goog.provide('unsquadron.display.Mountain0');

goog.scope(function(){
	var Sprite = qcurve.display.Sprite;

	/**
	* @constructor
	* @param {goog.dom.DomHelper=} opt_dom_helper
	* @param {boolean=} opt_recycle
	* @extends {qcurve.display.Sprite}
	*/
	unsquadron.display.Mountain0 = function(opt_dom_helper, opt_recycle){
		if(opt_recycle && unsquadron.display.Mountain0.recycle_.length){
			return unsquadron.display.Mountain0.recycle_.shift();
		}


		goog.base(this, 'mountain0', 1, 1, 1, opt_dom_helper);
	};
	goog.inherits(unsquadron.display.Mountain0, Sprite);

	unsquadron.display.Mountain0.prototype.endInternal = function(){
		goog.base(this, 'endInternal');

		unsquadron.display.Mountain0.recycle_.push(this);
	};

	unsquadron.display.Mountain0.prototype.getWidth = function(){
		return 224;
	};

	unsquadron.display.Mountain0.prototype.getHeight = function(){
		return 96;
	};

	unsquadron.display.Mountain0.recycle_ = [];
});
