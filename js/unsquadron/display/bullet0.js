goog.require('unsquadron.display.Bullet');
goog.require('goog.math');
goog.require('goog.math.Coordinate');

goog.provide('unsquadron.display.Bullet0');

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
	unsquadron.display.Bullet0 = function(opt_dom_helper, opt_recycle){
		if(opt_recycle && unsquadron.display.Bullet0.recycle_.length){
			return unsquadron.display.Bullet0.recycle_.shift();
		}

		this.setRate(500);
		this.setMaxDistance(800);

		goog.base(this, 'bullet0', 4, 1, 1, opt_dom_helper);
	};
	goog.inherits(unsquadron.display.Bullet0, unsquadron.display.Bullet);

	unsquadron.display.Bullet0.prototype.endInternal = function(){
		goog.base(this, 'endInternal');

		unsquadron.display.Bullet0.recycle_.push(this);
	};

	unsquadron.display.Bullet0.prototype.getWidth = function(){
		return 6;
	};

	unsquadron.display.Bullet0.prototype.getHeight = function(){
		return 8;
	};

	unsquadron.display.Bullet0.prototype.enterFrameInteral = function(){
		if(this.getElement()){
			this.nextXFrame();
		}
	};

	unsquadron.display.Bullet0.recycle_ = [];
});
