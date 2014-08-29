goog.require('goog.asserts');
goog.require('goog.events.Listenable');

goog.provide('unsquadron.planes.IPlaneModel')
goog.scope(function(){
	/** 
	* @interface
	* @extends {goog.events.Listenable}
	*/
	unsquadron.planes.IPlaneModel = function(){};

	/** @return {string} */
	unsquadron.planes.IPlaneModel.prototype.getName = function(){};

	/** @param {string} name */
	unsquadron.planes.IPlaneModel.prototype.setName = function(name){};

	/** @return {number} */
	unsquadron.planes.IPlaneModel.prototype.getHorizonalDirection = function(){};

	/** @param {number} horizontalDirection */
	unsquadron.planes.IPlaneModel.prototype.setHorizonalDirection = function(horizontalDirection){};

	/** @return {number} */
	unsquadron.planes.IPlaneModel.prototype.getVerticalDirection = function(){};

	/** @param {number} verticalDirection */
	unsquadron.planes.IPlaneModel.prototype.setVerticalDirection = function(verticalDirection){};

	/** @return {number} */
	unsquadron.planes.IPlaneModel.prototype.getHorizonalSpeed = function(){};

	/** @param {number} horizontalSpeed */
	unsquadron.planes.IPlaneModel.prototype.setHorizonalSpeed = function(horizontalSpeed){};

	/** @return {number} */
	unsquadron.planes.IPlaneModel.prototype.getVerticalSpeed = function(){};

	/** @param {number} verticalSpeed */
	unsquadron.planes.IPlaneModel.prototype.setVerticalSpeed = function(verticalSpeed){};
});