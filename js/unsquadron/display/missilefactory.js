goog.provide('unsquadron.display.MissileFactory');

goog.require('unsquadron.display.Bullet0');
goog.require('unsquadron.display.Bullet1');
goog.require('qcurve.display.Missile');
goog.require('qcurve.display.Component');

goog.scope(function(){
	var Bullet0 = unsquadron.display.Bullet0;
	var Bullet1 = unsquadron.display.Bullet1;

	unsquadron.display.MissileFactory = function(){};

	/** @param {qcurve.display.Missile} missile */
	unsquadron.display.MissileFactory.recycle = function (missile, name){
		var recycleBin = unsquadron.display.MissileFactory.recycleBin_[name];
		recycleBin.push(missile);
	};


	/**
	* @param {string} name
	* @return {qcurve.display.Missile} 
	*/
	unsquadron.display.MissileFactory.getMissile = function (name){
		var recycleBin = unsquadron.display.MissileFactory.recycleBin_[name];
		
		if(recycleBin.length){
			return recycleBin.shift();
		}

		var MissileClass = unsquadron.display.MissileFactory.missileClass_[name];
		return new MissileClass();
	};

	/**
	* @param {string} name 
	* @param {qcurve.display.Component} target 
	*/
	unsquadron.display.MissileFactory.addMissileToTarget = function (name, target){
		var missile = unsquadron.display.MissileFactory.getMissile(name);
		target.getParent().addChild(missile, !missile.getElement());
	};

	/** @const */
	unsquadron.display.MissileFactory.BULLET_0 = 'bullet0';

	/** @const */
	unsquadron.display.MissileFactory.BULLET_1 = 'bullet1';

	/** 
	* @private
	* @enum {Function}
	*/
	unsquadron.display.MissileFactory.missileClass_ = {};
	unsquadron.display.MissileFactory.missileClass_['bullet0'] = Bullet0;
	unsquadron.display.MissileFactory.missileClass_['bullet1'] = Bullet1;

	/** 
	* @private
	* @enum {Array.<qcurve.display.Missile>}
	*/
	unsquadron.display.MissileFactory.recycleBin_ = {};
	unsquadron.display.MissileFactory.recycleBin_['bullet0'] = [];
	unsquadron.display.MissileFactory.recycleBin_['bullet1'] = [];

});
