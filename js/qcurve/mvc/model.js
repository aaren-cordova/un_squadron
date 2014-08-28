goog.provide('qcurve.mvc.Model');
goog.require('qcurve.events.ChangeEvent');
goog.require('goog.events.EventTarget');
goog.require('goog.asserts');
goog.require('goog.object');

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

	qcurve.mvc.Model.prototype.getProperty = function(name, opt_default){
		return goog.object.get(this, name, opt_default)
	}

	qcurve.mvc.Model.prototype.setProperty = function(name, value){
		if(this[name] !== value){
			this[name] = value;
			this.invalidateProperty(name);
		}
	}

	qcurve.mvc.Model.prototype.getBooleanProperty = function(name, opt_default){
		return this.getProperty(name, opt_default || false);
	}

	qcurve.mvc.Model.prototype.setBooleanProperty = function(name, bool){
		assertBoolean(bool);

		this.setProperty(name, bool || false);
	};

	qcurve.mvc.Model.prototype.getStringProperty = function(name, opt_default){
		return this.getProperty(name, opt_default || '');
	}

	qcurve.mvc.Model.prototype.setStringProperty = function(name, str){
		assertString(str);

		this.setProperty(name, str || '');
	};

	qcurve.mvc.Model.prototype.getNumberProperty = function(name, opt_default){
		return this.getProperty(name, opt_default || 0);
	}

	qcurve.mvc.Model.prototype.setNumberProperty = function(name, number){
		assertNumber(number);

		this.setProperty(name, number || 0);
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
