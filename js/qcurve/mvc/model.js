goog.provide('qcurve.mvc.Model');
goog.require('qcurve.events.ChangeEvent');
goog.require('goog.events.EventTarget');

goog.scope(function(){
	var ChangeEvent = qcurve.events.ChangeEvent;

	/**
	* @constructor
	* @extends {goog.events.EventTarget}
	*/
	qcurve.mvc.Model = function(){
		goog.base(this);

		this.invalidatePropertyList_ = [];
		this.invalidatePropertyHash_ = {};
	};
	goog.inherits(qcurve.mvc.Model, goog.events.EventTarget);

	/** @param {string} property */
	qcurve.mvc.Model.prototype.invalidateProperty = function(property){
		if(!this.invalidatePropertyHash_[property]){
			this.invalidatePropertyHash_[property] = true;
			this.invalidatePropertyList_.push(property);
		}
	};

	qcurve.mvc.Model.prototype.validate = function(){
		var invalidatePropertyList = this.invalidatePropertyList_;
		var length = invalidatePropertyList.length;

		if(length){
			for(var i = 0; i < length; ++i){
				var property = invalidatePropertyList.shift();
				delete this.invalidatePropertyHash_[property];

				var type = ChangeEvent.getType(property);
				this.dispatchEvent(new ChangeEvent(type));
			}

			this.dispatchEvent(new ChangeEvent(ChangeEvent.CHANGE));
		}
	};

	/** 
	* @private
	* @type {Array.<string>}
	*/
	qcurve.mvc.Model.prototype.invalidatePropertyList_ = null;

	/** 
	* @private
	* @type {Object}
	*/
	qcurve.mvc.Model.prototype.invalidatePropertyHash_ = null;

	goog.addSingletonGetter(qcurve.mvc.Model);
});
