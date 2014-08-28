goog.require('goog.asserts');

goog.provide('unsquadron.players.PlayerModel')
goog.scope(function(){
	/** 
	* @interface
	* @extends {goog.disposable.Disposable}
	*/
	unsquadron.players.PlayerModel = function(){};

	/** @return {number} */
	unsquadron.players.PlayerModel.prototype.getCurrentHealth = function(){
		return this.getNumber('currentHealth');
	};

	/** @param {number} currentHealth */
	unsquadron.players.PlayerModel.prototype.setCurrentHealth = function(currentHealth){};

	/** @return {number} */
	unsquadron.players.PlayerModel.prototype.getTotalHealth = function(){
		return this.getNumber('totalHealth');
	};

	/** @param {number} totalHealth */
	unsquadron.players.PlayerModel.prototype.setTotalHealth = function(totalHealth){};

	/** @return {unsquadron.controls.IControlModel} */
	unsquadron.players.PlayerModel.prototype.getControlModel = function(){
		return this.getObject('controlModel');
	};

	/** @param {unsquadron.controls.IControlModel} */
	unsquadron.players.PlayerModel.prototype.setControlModel = function(controlModel){};

	/** @return {unsquadron.characters.ICharacterModel} */
	unsquadron.players.PlayerModel.prototype.getCharacterModel = function(){
		return this.getObject('characterModel');
	};

	/** @param {unsquadron.characters.ICharacterModel} */
	unsquadron.players.PlayerModel.prototype.setCharacterModel = function(characterModel){};

	/** @return {unsquadron.planes.IPlaneModel} */
	unsquadron.players.PlayerModel.prototype.getPlaneModel = function(){
		return this.getObject('planeModel');
	};

	/** @param {unsquadron.planes.IPlaneModel} planeModel */
	unsquadron.players.PlayerModel.prototype.setPlaneModel = function(planeModel){};
});