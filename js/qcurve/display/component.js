goog.require('goog.ui.Component');
goog.require('goog.string');
goog.require('goog.Timer');
goog.require('goog.asserts');
goog.require('qcurve.style');
goog.require('qcurve.asserts');
goog.require('qcurve.events.Event');
goog.require('goog.math.Coordinate');

goog.provide('qcurve.display.Component');

goog.scope(function(){
	var Stage = qcurve.display.Stage;
	var Timer = goog.Timer;
	var Event = qcurve.events.Event;
	var assert = goog.asserts.assert;
	var assertNumber = goog.asserts.assertNumber;
	var assertNonEmptyString = qcurve.asserts.assertNonEmptyString;
	var assertInstanceof = goog.asserts.assertInstanceof;
	var setLeft = qcurve.style.setLeft;
	var setTop = qcurve.style.setTop;
	var Coordinate = goog.math.Coordinate;

	/**
	* @constructor
	* @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
	* @extends {goog.ui.Component}
	*/
	qcurve.display.Component = function(opt_domHelper){
		goog.base(this, opt_domHelper);
	};
	goog.inherits(qcurve.display.Component, goog.ui.Component);

	/** @override */
	qcurve.display.Component.prototype.decorateInternal = function(element){
		goog.base(this, 'decorateInternal', element);

		var id = 'instance' + qcurve.display.Component.numInstances_;
		qcurve.display.Component.numInstances_++;
		this.setId(id);
	};

	/** @override */
	qcurve.display.Component.prototype.setId = function(value) {
		goog.base(this, 'setId', value);
		this.setElementAttibute('id', value);
	};

	/** @public */
	qcurve.display.Component.prototype.enterDocument = function(){
		goog.base(this, 'enterDocument');

		this.tryDetectStage$qcurve_display_Component_();
	};

	/** @public */
	qcurve.display.Component.prototype.exitDocument = function(){
		goog.base(this, 'exitDocument');

		this.stage_ = null;
	};

	/** @private */
	qcurve.display.Component.prototype.tryDetectStage$qcurve_display_Component_ = function(){
		if(!this.stage_){
			this.detectStage$qcurve_display_Component_();
		}
	};

	/** @private */
	qcurve.display.Component.prototype.detectStage$qcurve_display_Component_ = function(){
		if(this.stage_){
			return;
		}

		var topParent = this;

		while(topParent.getParent()){
			topParent = topParent.getParent();
		}

		this.stage_ = /**@type {qcurve.display.Stage} */ (qcurve.as(topParent, qcurve.display.Stage));
	};

	/** @private */
	qcurve.display.Component.prototype.detectRoot$qcurve_display_Component_ = function(){
		var topParent = this;

		while(topParent.getParent()){
			topParent = topParent.getParent();
		}

		this.root_ = topParent;
	};

	/**
	* @public
	* @param {string} str
	* @return {string}
	*/
	qcurve.display.Component.prototype.getElementAttibute = function(str){
		return this.getElement().getAttribute(str);
	};

	/**
	* @public
	* @param {string} str
	* @param {string|number|boolean} value
	*/
	qcurve.display.Component.prototype.setElementAttibute = function(str, value){
		return this.getElement().setAttribute(str, value);
	};



	/**
	* @public
	* @param {string} str
	* @param {string|number|boolean} value
	*/
	qcurve.display.Component.prototype.setElementStyle = function(str, value){
		goog.style.setStyle(this.getElement(), str, value);
	};

	/**
	* @public
	* @param {string} str
	* @return {string}
	*/
	qcurve.display.Component.prototype.getElementStyle = function(str){
		return goog.style.getStyle(this.getElement(), str);
	};

	/** @return {goog.ui.Component} */
	qcurve.display.Component.prototype.getRoot = function(){
		return this.root_;
	};

	/** @override */
	qcurve.display.Component.prototype.setParent = function(value) {
		goog.base(this, 'setParent', value);

		if(!value){
			this.dispatchEvent(Event.REMOVED);

			if(this.stage_){
				this.stage_ = null;
				this.root_ = null;
				this.dispatchEvent(Event.REMOVED_FROM_STAGE);
			}
		}
		else{
			assertInstanceof(value, qcurve.display.Component);
			this.dispatchEvent(Event.ADDED);
			this.detectRoot$qcurve_display_Component_();
			this.tryDetectStage$qcurve_display_Component_();
		}
	};

	/** @protected */
	qcurve.display.Component.prototype.invalidatePositionInternal = function(){
		this.invalidatePosition_();
	};

	/** @protected */
	qcurve.display.Component.prototype.validatePositionInternal = function(){
		this.validatePosition_();
	};

	/**
	* @protected
	* @return {boolean} */
	qcurve.display.Component.prototype.isPositionValidated = function(){
		return this.positionValidated_;
	};

	/** @private */
	qcurve.display.Component.prototype.invalidatePosition_ = function(){
		this.positionValidated_ = false;
	};

	/** @private */
	qcurve.display.Component.prototype.validatePosition_ = function(){
		this.positionValidated_ = true;
	};

	/**
	* @param {goog.math.Coordinate=} opt_offset
	* @return {goog.math.Coordinate}
	*/
	qcurve.display.Component.prototype.getLocalToGlobal = function(opt_offset){
		var child = this;
		var root = this.root_;
		var position = child.getPosition();

		while(child !== root){
			child = child.getParent();
			
			var childPosition = child.getPosition();
			position.translate(childPosition);
		}

		if(opt_offset){
			position.translate(opt_offset);
		}

		return position;
	};

	/**
	* @param {goog.math.Coordinate=} opt_offset
	* @return {goog.math.Coordinate}
	*/
	qcurve.display.Component.prototype.getGlobalToLocal = function(opt_offset){
		var child = this;
		var root = this.root_;
		var position = child.getPosition();

		while(child !== root){
			child = child.getParent();
			
			var childPosition = child.getPosition();
			position.translate(-childPosition.x, -childPosition.y);
		}

		if(opt_offset){
			position.translate(-opt_offset.x, -opt_offset.y);
		}

		return position;
	};

	/** @return {!goog.math.Coordinate} */
	qcurve.display.Component.prototype.getPosition = function(){
		return goog.style.getPosition(this.getElement());
	};

	/** @param {!goog.math.Coordinate} value*/
	qcurve.display.Component.prototype.setPosition = function(value){
		this.invalidatePosition_();
		goog.style.setPosition(this.getElement(), value);
	};

	/** @return {!goog.math.Coordinate}*/
	qcurve.display.Component.prototype.getCenterCoordinate = function(){
		return qcurve.style.getCenterCoordinate(/**@type{!Element}*/(this.getElement()));
	};

	/**
	* @param {number} x
	* @param {number} y
	*/
	qcurve.display.Component.prototype.setXY = function(x, y){

		if(this.getElement()){
			this.invalidatePosition_();
			qcurve.style.setXY(/**@type{!Element}*/(this.getElement()), x, y);
		}
	};

	/** @return {number} */
	qcurve.display.Component.prototype.getX = function(){
		if(this.getElement()){
			return qcurve.style.getX(/**@type{!Element}*/(this.getElement()));
		}

		return 0;
	};

	/** @param {number} value */
	qcurve.display.Component.prototype.setX = function(value){
		if(this.getElement()){
			this.invalidatePosition_();
			qcurve.style.setX(/**@type{!Element}*/ (this.getElement()), value);
		}
	};

	/** @return {number} */
	qcurve.display.Component.prototype.getY = function(){
		if(this.getElement()){
			return qcurve.style.getY(/**@type{!Element}*/ (this.getElement()));
		}

		return 0;
	};

	/** @param {number} value */
	qcurve.display.Component.prototype.setY = function(value){
		if(this.getElement()){
			this.invalidatePosition_();
			qcurve.style.setY(/**@type{!Element}*/ (this.getElement()), value);
		}
	};

	/** @return {number} */
	qcurve.display.Component.prototype.getWidth = function(){
		if(this.getElement()){
			return qcurve.style.getWidth(/**@type{!Element}*/ (this.getElement()));
		}

		return 0;
	};

	/** @param {number} value */
	qcurve.display.Component.prototype.setWidth = function(value){
		if(this.getElement()){
			qcurve.style.setWidth(/**@type{!Element}*/ (this.getElement()), value);
		}
	};

	/** @return {number} */
	qcurve.display.Component.prototype.getHeight = function(){
		if(this.getElement()){
			return qcurve.style.getHeight(/**@type{!Element}*/ (this.getElement()));
		}

		return 0;
	};

	/** @param {number} value */
	qcurve.display.Component.prototype.setHeight = function(value){
		if(this.getElement()){
			qcurve.style.setHeight(/**@type{!Element}*/ (this.getElement()), value);
		}
	};

	
	/**
	* @public
	* @return {string}
	*/
	qcurve.display.Component.prototype.getName = function(){
		return this.getElementAttibute('name') || '';
	};

	/**
	* @public
	* @param {string} value
	*/
	qcurve.display.Component.prototype.setName = function(value){
		this.setElementAttibute('name', value);
	};

	/**
	* @public
	* @return {qcurve.display.Stage}
	*/
	qcurve.display.Component.prototype.getStage = function(){
		return this.stage_;
	};

	/**
	* @private
	* @type {qcurve.display.Stage}
	*/
	qcurve.display.Component.prototype.stage_ = null;

	/**
	* @private
	* @type {goog.ui.Component}
	*/
	qcurve.display.Component.prototype.root_ = null;

	/**
	* @private
	* @type {number}
	*/
	qcurve.display.Component.numInstances_ = 0;
});
