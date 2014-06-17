goog.require('unsquadron.display.Bullet');
goog.require('goog.math');
goog.require('goog.math.Coordinate');


goog.provide('unsquadron.display.Bullet1');

goog.scope(function(){

	var angle = goog.math.angle;
	var angleDx = goog.math.angleDx;
	var angleDy = goog.math.angleDy;
	var Coordinate = goog.math.Coordinate;

	/**
	* @constructor
	* @param {goog.dom.DomHelper=} opt_dom_helper
	* @param {boolean=} opt_recycle
	* @extends {unsquadron.display.Bullet}
	*/
	unsquadron.display.Bullet1 = function(opt_dom_helper, opt_recycle){
		if(opt_recycle && unsquadron.display.Bullet1.recycle_.length){
			return unsquadron.display.Bullet1.recycle_.shift();
		}

		this.setRate(500);
		this.setMaxDistance(800);

		goog.base(this, 'bullet1', 9, 1, 2, opt_dom_helper);
	};
	goog.inherits(unsquadron.display.Bullet1, unsquadron.display.Bullet);

	/** @override */
	unsquadron.display.Bullet1.prototype.stopInternal = function(){
		goog.base(this, 'stopInternal');
		unsquadron.display.Bullet1.recycle_.push(this);
	};

	/** @override */
	unsquadron.display.Bullet1.prototype.getWidth = function(){
		return 12;
	};

	/** @override */
	unsquadron.display.Bullet1.prototype.getHeight = function(){
		return 14;
	};

	/** @override */
	unsquadron.display.Bullet1.prototype.enterFrameInteral = function(){
		if(this.getElement()){
			this.nextYFrame();
		}
	};

	unsquadron.display.Bullet1.recycle_ = [];
});
