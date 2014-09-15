goog.require('qcurve.display.Sprite');

goog.provide('unsquadron.display.Mountain1');

goog.scope(function(){
	var Sprite = qcurve.display.Sprite;

	/**
	* @constructor
	* @param {goog.dom.DomHelper=} opt_dom_helper
	* @param {boolean=} opt_recycle
	* @extends {qcurve.display.Sprite}
	*/
	unsquadron.display.Mountain1 = function(opt_dom_helper, opt_recycle){
		if(opt_recycle && unsquadron.display.Mountain1.recycle_.length){
			return unsquadron.display.Mountain1.recycle_.shift();
		}


		goog.base(this, 'mountain1', 1, 1, 1, opt_dom_helper);
	};
	goog.inherits(unsquadron.display.Mountain1, Sprite);

	unsquadron.display.Mountain1.prototype.endInternal = function(){
		goog.base(this, 'endInternal');

		unsquadron.display.Mountain1.recycle_.push(this);
	};

	unsquadron.display.Mountain1.prototype.getWidth = function(){
		return 286;
	};

	unsquadron.display.Mountain1.prototype.getHeight = function(){
		return 96;
	};

	unsquadron.display.Mountain1.recycle_ = [];
});
