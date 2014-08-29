goog.require('goog.asserts');
goog.require('goog.events.Listenable');

goog.provide('unsquadron.characters.ICharacterModel')
goog.scope(function(){
	/** 
	* @interface
	* @extends {goog.events.Listenable}
	*/
	unsquadron.characters.ICharacterModel = function(){};

	/** @return {number} */
	unsquadron.characters.ICharacterModel.prototype.getId = function(){};

	/** @param {number} name */
	unsquadron.characters.ICharacterModel.prototype.setId = function(name){};

	/** @return {string} */
	unsquadron.characters.ICharacterModel.prototype.getName = function(){};

	/** @param {string} name */
	unsquadron.characters.ICharacterModel.prototype.setName = function(name){};

	/** @return {string} */
	unsquadron.characters.ICharacterModel.prototype.getDescription = function(){};

	/** @param {string} description */
	unsquadron.characters.ICharacterModel.prototype.setDescription = function(description){};
});


