goog.require('goog.asserts');

goog.provide('unsquadron.players.IPlayerModel')
goog.scope(function(){
	/** 
	* @interface
	* @extends {goog.disposable.Disposable}
	*/
	unsquadron.players.IPlayerModel = function(){};

	/** @return {number} */
	unsquadron.players.IPlayerModel.prototype.getCurrentHealth = function(){};

	/** @param {number} currentHealth */
	unsquadron.players.IPlayerModel.prototype.setCurrentHealth = function(currentHealth){};

	/** @return {number} */
	unsquadron.players.IPlayerModel.prototype.getTotalHealth = function(){};

	/** @param {number} totalHealth */
	unsquadron.players.IPlayerModel.prototype.setTotalHealth = function(totalHealth){};

	/** @return {unsquadron.controls.IControlModel} */
	unsquadron.players.IPlayerModel.prototype.getControlModel = function(){};

	/** @param {unsquadron.controls.IControlModel} */
	unsquadron.players.IPlayerModel.prototype.setControlModel = function(controlModel){};

	/** @return {unsquadron.characters.ICharacterModel} */
	unsquadron.players.IPlayerModel.prototype.getCharacterModel = function(){};

	/** @param {unsquadron.characters.ICharacterModel} */
	unsquadron.players.IPlayerModel.prototype.setCharacterModel = function(characterModel){};

	/** @return {unsquadron.planes.IPlaneModel} */
	unsquadron.players.IPlayerModel.prototype.getPlaneModel = function(){};

	/** @param {unsquadron.planes.IPlaneModel} planeModel */
	unsquadron.players.IPlayerModel.prototype.setPlaneModel = function(planeModel){};
});