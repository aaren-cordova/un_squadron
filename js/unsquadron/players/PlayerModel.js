goog.require('qcurve.mvc.Model');
goog.require('unsquadron.players.IPlayerModel');

goog.provide('unsquadron.players.PlayerModel');
goog.provide('unsquadron.players.PlayerModel.EventType');
goog.scope(function(){
	/** 
	* @constructor
	* @implements {unsquadron.players.IPlayerModel}
	* @extends {qcurve.mvc.Model}
	*/
	unsquadron.players.PlayerModel = function(){
		goog.base(this);
	};
	goog.inherits(unsquadron.players.PlayerModel, qcurve.mvc.Model);

	/** @enum {string} */
	unsquadron.players.PlayerModel.EventType = {
		'CURRENT_HEALTH': 'currentHealth',
		'TOTAL_HEALTH': 'totalHealth',
		'CONTROL_MODEL': 'controlModel',
		'CHARACTER_MODEL': 'characterModel',
		'PLANE_MODEL': 'planeModel'
	};

	/** @inheritDoc */
	unsquadron.players.PlayerModel.prototype.getCurrentHealth = function(){
		return this.getNumberProperty(unsquadron.players.PlayerModel.EventType.CURRENT_HEALTH);
	};

	/** @inheritDoc */
	unsquadron.players.PlayerModel.prototype.setCurrentHealth = function(currentHealth){
		this.setNumberProperty(unsquadron.players.PlayerModel.EventType.CURRENT_HEALTH, currentHealth);
	};

	/** @inheritDoc */
	unsquadron.players.PlayerModel.prototype.getTotalHealth = function(){
		return this.getNumberProperty(unsquadron.players.PlayerModel.EventType.TOTAL_HEALTH);
	};

	/** @inheritDoc */
	unsquadron.players.PlayerModel.prototype.setTotalHealth = function(totalHealth){
		this.setNumberProperty(unsquadron.players.PlayerModel.EventType.TOTAL_HEALTH, totalHealth);
	};

	/** @inheritDoc */
	unsquadron.players.PlayerModel.prototype.getCharacterModel = function(){
		return this.getProperty(unsquadron.players.PlayerModel.EventType.CHARACTER_MODEL, null);
	};

	/** @inheritDoc */
	unsquadron.players.PlayerModel.prototype.setCharacterModel = function(characterModel){
		this.setProperty(unsquadron.players.PlayerModel.EventType.CHARACTER_MODEL, characterModel);
	};

	/** @inheritDoc */
	unsquadron.players.PlayerModel.prototype.getPlaneModel = function(){
		return this.getProperty(unsquadron.players.PlayerModel.EventType.PLANE_MODEL, null);
	};

	/** @inheritDoc */
	unsquadron.players.PlayerModel.prototype.setPlaneModel = function(planeModel){
		this.setProperty(unsquadron.players.PlayerModel.EventType.PLANE_MODEL, planeModel);
	};
});