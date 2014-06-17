goog.provide('unsquadron.display.Turrent0');
goog.require('unsquadron.display.Turrent');
goog.require('unsquadron.display.MissileFactory');
goog.require('goog.math.Coordinate');

goog.scope(function(){
	var MissileFactory = unsquadron.display.MissileFactory;
	var Coordinate = goog.math.Coordinate;

	/**
	* @constructor
	* @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
	* @extends {unsquadron.display.Turrent}
	*/
	unsquadron.display.Turrent0 = function(opt_domHelper){
		goog.base(this, 'turrent0', 9, 2, 1, opt_domHelper);

		var missileLauncher = this.getMissleLauncher();
		missileLauncher.setOffsetCoordinate(new Coordinate(12, 10));
		missileLauncher.setBarrelLength(16);
		missileLauncher.setDefaultMissleType(MissileFactory.BULLET_0);
		missileLauncher.setFireRate(0.3);
	};
	goog.inherits(unsquadron.display.Turrent0, unsquadron.display.Turrent);

	unsquadron.display.Turrent0.prototype.getWidth = function(){
		return 28;
	};

	unsquadron.display.Turrent0.prototype.getHeight = function(){
		return 29;
	};
});
