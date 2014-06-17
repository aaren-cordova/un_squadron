goog.provide('unsquadron.mvc.PlayerModel');
goog.require('qcurve.mvc.Model');
goog.require('unsquadron.display.Weapon');
goog.require('unsquadron.display.Plane');

goog.scope(function(){
	/**
	* @constructor
	* @extends {qcurve.mvc.Model}
	*/
	unsquadron.mvc.PlayerModel = function(){
		goog.base(this);

		this.weaponList_ = [];
		this.planeList_ = [];
	};
	goog.inherits(unsquadron.mvc.PlayerModel, qcurve.mvc.Model);

	/** @return {number} */
	unsquadron.mvc.PlayerModel.prototype.getCurrentHealth = function(){
		return this.currentHealth_;
	};

	/** @param {number} value */
	unsquadron.mvc.PlayerModel.prototype.setCurrentHealth = function(value){
		this.invalidateProperty('currentHealth');
		this.currentHealth_ = value;
	};

	/** @return {number} */
	unsquadron.mvc.PlayerModel.prototype.getMaxHealth = function(){
		return this.maxHealth_;
	};

	/** @param {number} value */
	unsquadron.mvc.PlayerModel.prototype.setMaxHealth = function(value){
		this.invalidateProperty('maxHealth');
		this.maxHealth_ = value;
	};

	/** @return {unsquadron.display.Weapon} */
	unsquadron.mvc.PlayerModel.prototype.getCurrentWeapon = function(){
		return this.currentWeapon_;
	};

	/** @param {unsquadron.display.Weapon} value */
	unsquadron.mvc.PlayerModel.prototype.setCurrentWeapon = function(value){
		this.invalidateProperty('currentWeapon');
		this.currentWeapon_ = value;
	};

	/** @return {Array.<unsquadron.display.Weapon>} */
	unsquadron.mvc.PlayerModel.prototype.getWeaponList = function(){
		return this.weaponList_;
	};

	/** @param {Array.<unsquadron.display.Weapon>} value */
	unsquadron.mvc.PlayerModel.prototype.setWeaponList = function(value){
		this.invalidateProperty('weaponList');
		this.weaponList_ = value;
	};

	/** @return {unsquadron.display.Plane} */
	unsquadron.mvc.PlayerModel.prototype.getCurrentPlane = function(){
		return this.currentPlane_;
	};

	/** @param {unsquadron.display.Plane} value */
	unsquadron.mvc.PlayerModel.prototype.setCurrentPlane = function(value){
		this.invalidateProperty('currentPlane');
		this.currentPlane_ = value;
	};


	/** @return {Array.<unsquadron.display.Plane>} */
	unsquadron.mvc.PlayerModel.prototype.getPlaneList = function(){
		return this.planeList_;
	};

	/** @param {Array.<unsquadron.display.Plane>} value */
	unsquadron.mvc.PlayerModel.prototype.setPlaneList = function(value){
		this.invalidateProperty('planeList');
		this.planeList_ = value;
	};

	/** @return {number} */
	unsquadron.mvc.PlayerModel.prototype.getCurrentPowerLevel = function(){
		return this.currentPowerLevel_;
	};

	/** @param {number} value */
	unsquadron.mvc.PlayerModel.prototype.setCurrentPowerLevel = function(value){
		this.invalidateProperty('currentPowerLevel');
		this.currentPowerLevel_ = value;
	};

	/** @return {number} */
	unsquadron.mvc.PlayerModel.prototype.getMaxPowerLevel = function(){
		return this.maxPowerLevel_;
	};

	/** @param {number} value */
	unsquadron.mvc.PlayerModel.prototype.setMaxPowerLevel = function(value){
		this.invalidateProperty('maxPowerLevel');
		this.maxPowerLevel_ = value;
	};

	/** @return {number} */
	unsquadron.mvc.PlayerModel.prototype.getMoney = function(){
		return this.money_;
	};

	/** @param {number} value */
	unsquadron.mvc.PlayerModel.prototype.setMoney = function(value){
		this.invalidateProperty('money');
		this.money_ = value;
	};
	
	/** @return {number} */
	unsquadron.mvc.PlayerModel.prototype.getLevelScore = function(){
		return this.levelScore_;
	};

	/** @param {number} value */
	unsquadron.mvc.PlayerModel.prototype.setLevelScore = function(value){
		this.invalidateProperty('levelScore');
		this.levelScore_ = value;
	};
	
	/** @return {number} */
	unsquadron.mvc.PlayerModel.prototype.getGameScore = function(){
		return this.gameScore_;
	};

	/** @param {number} value */
	unsquadron.mvc.PlayerModel.prototype.setGameScore = function(value){
		this.invalidateProperty('gameScore');
		this.gameScore_ = value;
	};
	
	/** 
	* @private
	* @type {number}
	*/
	unsquadron.mvc.PlayerModel.prototype.gameScore_ = 0;

	/** 
	* @private
	* @type {number}
	*/
	unsquadron.mvc.PlayerModel.prototype.levelScore_ = 0;
	/** 
	* @private
	* @type {number}
	*/
	unsquadron.mvc.PlayerModel.prototype.money_ = 0;
	
	/** 
	* @private
	* @type {number}
	*/
	unsquadron.mvc.PlayerModel.prototype.maxPowerLevel_ = 0;

	/** 
	* @private
	* @type {number}
	*/
	unsquadron.mvc.PlayerModel.prototype.currentPowerLevel_ = 0;

	/** 
	* @private
	* @type {Array.<unsquadron.display.Plane>}
	*/
	unsquadron.mvc.PlayerModel.prototype.planeList_ = null;

	/** 
	* @private
	* @type {unsquadron.display.Plane}
	*/
	unsquadron.mvc.PlayerModel.prototype.currentPlane_ = null;

	/** 
	* @private
	* @type {Array.<unsquadron.display.Weapon>}
	*/
	unsquadron.mvc.PlayerModel.prototype.weaponList_ = null;

	/** 
	* @private
	* @type {unsquadron.display.Weapon}
	*/
	unsquadron.mvc.PlayerModel.prototype.currentWeapon_ = null;

	/** 
	* @private
	* @type {number}
	*/
	unsquadron.mvc.PlayerModel.prototype.maxHealth_ = 0;

	/** 
	* @private
	* @type {number}
	*/
	unsquadron.mvc.PlayerModel.prototype.currentHealth_ = 0;

	goog.addSingletonGetter(unsquadron.mvc.PlayerModel);
});
