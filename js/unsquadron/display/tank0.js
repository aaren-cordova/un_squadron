goog.provide('unsquadron.display.Tank0');
goog.require('unsquadron.display.Tank');
goog.require('unsquadron.display.MissileFactory');
goog.require('unsquadron.display.Bullet0');
goog.require('goog.math.Coordinate');

goog.scope(function(){
	var Bullet0 = unsquadron.display.Bullet0;
	var Coordinate = goog.math.Coordinate;

	/**
	* @constructor
	* @param {goog.dom.DomHelper=} opt_dom_helper Optional DOM helper.
	* @extends {unsquadron.display.Tank}
	*/
	unsquadron.display.Tank0 = function(opt_dom_helper){
		goog.base(this, 'tank0', 9, 3, 1, opt_dom_helper);

		var missileLauncher = this.getMissleLauncher();
		missileLauncher.setOffsetCoordinate(new Coordinate(25, 22));
		missileLauncher.setBarrelLength(23);
		missileLauncher.setDefaultMissleType(unsquadron.display.MissileFactory.BULLET_0);
		missileLauncher.setFireRate(0.75);

		this.setHorizontalSpeed(3);
	};
	goog.inherits(unsquadron.display.Tank0, unsquadron.display.Tank);

	unsquadron.display.Tank0.prototype.getWidth = function(){
		return 51;
	};

	unsquadron.display.Tank0.prototype.getHeight = function(){
		return 33;
	};
});
