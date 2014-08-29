goog.require('qcurve.events.ChangeEvent');
goog.require('goog.events.EventTarget');
goog.require('goog.asserts');
goog.require('goog.object');

goog.provide('qcurve.mvc.Model');
goog.scope(function(){
	var ChangeEvent = qcurve.events.ChangeEvent;
	var assertNumber = goog.asserts.assertNumber;
	var assertString = goog.asserts.assertString;
	var assertBoolean = goog.asserts.assertBoolean;
	var assertObject = goog.asserts.assertObject;

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
	 * @param  {string} name
	 * @param  {*} opt_default
	 * @return {?}
	 */
	qcurve.mvc.Model.prototype.getProperty = function(name, opt_default){
		assertString(name);
		return goog.object.get(this, name, opt_default)
	};

	/**
	 * @param  {string} name
	 * @param  {*} value
	 */
	qcurve.mvc.Model.prototype.setProperty = function(name, value){
		assertString(name);

		if(this[name] !== value){
			this[name] = value;
			this.invalidateProperty(name);
		}
	};

	/** 
	 * @param  {string} name
	 * @param  {boolean=} opt_default
	 * @return {boolean}
	 */
	qcurve.mvc.Model.prototype.getBooleanProperty = function(name, opt_default){
		return this.getProperty(name, opt_default || false);
	};

	/** 
	 * @param  {string} name
	 * @param  {boolean} bool
	 */
	qcurve.mvc.Model.prototype.setBooleanProperty = function(name, bool){
		assertBoolean(bool);

		this.setProperty(name, bool || false);
	};

	/** 
	 * @param  {string} name
	 * @param  {string=} opt_default
	 * @return {string}
	 */
	qcurve.mvc.Model.prototype.getStringProperty = function(name, opt_default){
		return this.getProperty(name, opt_default || '');
	};

	/** 
	 * @param  {string} name
	 * @param  {string} str
	 */
	qcurve.mvc.Model.prototype.setStringProperty = function(name, str){
		assertString(str);
		this.setProperty(name, str || '');
	};

	/** 
	 * @param  {string} name
	 * @param  {number=} opt_default
	 * @return {number}
	 */
	qcurve.mvc.Model.prototype.getNumberProperty = function(name, opt_default){
		return this.getProperty(name, opt_default || 0);
	};

	/** 
	 * @param  {string} name
	 * @param  {number} number
	 */
	qcurve.mvc.Model.prototype.setNumberProperty = function(name, number){
		assertNumber(number);
		this.setProperty(name, number || 0);
	};

	/** 
	 * @param  {string} name
	 * @param  {Object=} opt_default
	 * @return {Object}
	 */
	qcurve.mvc.Model.prototype.getObjectProperty = function(name, opt_default){
		return this.getProperty(name, opt_default || null);
	};

	/** 
	 * @param  {string} name
	 * @param  {Object} object
	 */
	qcurve.mvc.Model.prototype.setObjectProperty = function(name, object){
		assertObject(object);

		this.setProperty(name, object || null);
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
