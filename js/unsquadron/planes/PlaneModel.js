goog.require('goog.asserts');
goog.require('goog.events.Listenable');
goog.require('qcurve.mvc.Model');
goog.require('unsquadron.planes.IPlaneModel');

goog.provide('unsquadron.planes.PlaneModel');
goog.provide('unsquadron.planes.PlaneModel.EventType');



goog.scope(function(){
	/** 
	* @constructor
	* @extends {qcurve.mvc.Model}
	* @implements {unsquadron.planes.IPlaneModel}
	*/
	unsquadron.planes.PlaneModel = function(){
		goog.base(this);
	};
	goog.inherits(unsquadron.planes.PlaneModel, qcurve.mvc.Model);

	/** @enum {string} */
	unsquadron.planes.PlaneModel.EventType = {
		NAME: 'name',
		DESCRIPTION: 'description',
		HORIZONAL_DIRECTION: 'horizonalDirection',
		VERTICAL_DIRECTION: 'verticalDirection',
		HORIZONAL_SPEED: 'horizonalSpeed',
		VERTICAL_SPEED: 'verticalSpeed'
	};

	/** inheritDoc */
	unsquadron.planes.PlaneModel.prototype.getName = function(){
		return this.getStringProperty(unsquadron.planes.PlaneModel.EventType.NAME);
	};

	/** inheritDoc */
	unsquadron.planes.PlaneModel.prototype.setName = function(name){
		this.setStringProperty(unsquadron.planes.PlaneModel.EventType.NAME, name);
	};

	/** inheritDoc */
	unsquadron.planes.PlaneModel.prototype.getDescription = function(){
		return this.getStringProperty(unsquadron.planes.PlaneModel.EventType.DESCRIPTION);
	};

	/** inheritDoc */
	unsquadron.planes.PlaneModel.prototype.setDescription = function(name){
		this.setStringProperty(unsquadron.planes.PlaneModel.EventType.DESCRIPTION, name);
	};


	/** inheritDoc */
	unsquadron.planes.PlaneModel.prototype.getHorizonalDirection = function(){
		return this.getNumberProperty(unsquadron.planes.PlaneModel.EventType.HORIZONAL_DIRECTION);
	};

	/** inheritDoc */
	unsquadron.planes.PlaneModel.prototype.setHorizonalDirection = function(horizontalDirection){
		this.setNumberProperty(unsquadron.planes.PlaneModel.EventType.HORIZONAL_DIRECTION, horizontalDirection);
	};

	/** inheritDoc */
	unsquadron.planes.PlaneModel.prototype.getVerticalDirection = function(){
		return this.getNumberProperty(unsquadron.planes.PlaneModel.EventType.VERTICAL_DIRECTION);
	};

	/** inheritDoc */
	unsquadron.planes.PlaneModel.prototype.setVerticalDirection = function(verticalDirection){
		this.setNumberProperty(unsquadron.planes.PlaneModel.EventType.VERTICAL_DIRECTION, verticalDirection);
	};

	/** inheritDoc */
	unsquadron.planes.PlaneModel.prototype.getHorizonalSpeed = function(){
		return this.getNumberProperty(unsquadron.planes.PlaneModel.EventType.HORIZONAL_SPEED, 1);
	};

	/** inheritDoc */
	unsquadron.planes.PlaneModel.prototype.setHorizonalSpeed = function(horizontalSpeed){
		this.setNumberProperty(unsquadron.planes.PlaneModel.EventType.HORIZONAL_SPEED, horizontalSpeed);
	};

	/** inheritDoc */
	unsquadron.planes.PlaneModel.prototype.getVerticalSpeed = function(){
		return this.getNumberProperty(unsquadron.planes.PlaneModel.EventType.VERTICAL_SPEED, 1);
	};

	/** inheritDoc */
	unsquadron.planes.PlaneModel.prototype.setVerticalSpeed = function(verticalSpeed){
		this.setNumberProperty(unsquadron.planes.PlaneModel.EventType.VERTICAL_SPEED, verticalSpeed);
	};
});