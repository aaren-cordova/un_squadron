goog.provide('unsquadron.display.Turrent1');
goog.require('unsquadron.display.Turrent');
goog.require('unsquadron.display.Bullet1');
goog.require('goog.math.Coordinate');
goog.require('goog.Timer');

goog.scope(function(){
	var Bullet1 = unsquadron.display.Bullet1;
	var Coordinate = goog.math.Coordinate;
	var Timer = goog.Timer;
	/**
	* @constructor
	* @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
	* @extends {unsquadron.display.Turrent}
	*/
	unsquadron.display.Turrent1 = function(opt_domHelper){
		goog.base(this, 'turrent1', 9, 2, 1, opt_domHelper);

		var missileLauncher = this.getMissleLauncher();
		missileLauncher.setOffsetCoordinate(new Coordinate(21, 20));
		missileLauncher.setBarrelLength(18);
		missileLauncher.setFireRate(12);
		missileLauncher.addMissile(new Bullet1());
		missileLauncher.getFireTimer().addEventListener(Timer.TICK, this.onFireTimerTick_, false, this);
	};

	goog.inherits(unsquadron.display.Turrent1, unsquadron.display.Turrent);

	/** @private */
	unsquadron.display.Turrent1.prototype.onFireTimerTick_ = function(event){
		this.nextYFrame();
		var missile = new Bullet1();
		missile.render();

		if(this.toggleBullet_){
			missile.nextZFrame();
		}
		this.toggleBullet_ = !this.toggleBullet_;

		this.getMissleLauncher().addMissile(missile);
	};

	unsquadron.display.Turrent1.prototype.toggleBullet_ = false;

	unsquadron.display.Turrent1.prototype.getWidth = function(){
		return 40;
	};

	unsquadron.display.Turrent1.prototype.getHeight = function(){
		return 42;
	};
});
