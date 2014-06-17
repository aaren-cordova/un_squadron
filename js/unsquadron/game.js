goog.provide('unsquadron.Game');
goog.provide('unsquadron.GameLayer');
goog.require('goog.asserts');
goog.require('goog.Timer');
goog.require('unsquadron.display.Bullet');
goog.require('qcurve.display.Component');

goog.scope(function(){
	var Bullet = unsquadron.display.Bullet;
	var Timer = goog.Timer;
	var Component = qcurve.display.Component;
	var assert = goog.asserts.assert;

	/**
	* @constructor
	* @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
	* @extends {qcurve.display.Component}
	*/
	unsquadron.Game = function(opt_domHelper){
		assert(!unsquadron.Game.instance_, 'Game can only be instantiated once, please use Game.getInstance()');
		unsquadron.Game.instance_ = this;

		goog.base(this, opt_domHelper);
	};
	goog.inherits(unsquadron.Game, Component);

	/** @override */
	unsquadron.Game.prototype.createDom = function(){
		var layers = unsquadron.Game.layers_;
		var element = this.getElement();

		if(!element){
			element = this.dom_.createDom('div', {'class' : 'game', 'id' : 'unsquadron'});
		}

		this.decorateInternal(element);

		for(var i = 0; i < 10; ++i){
			var layer = new unsquadron.GameLayer(i, this.getDomHelper());
			this.addChild(layer, true);
			layers.push(layer);
		}
	};

	/**
	* @param {number} index
	* @return {unsquadron.GameLayer}
	*/
	unsquadron.Game.prototype.getLayerAt = function(index){
		return unsquadron.Game.layers_[index];
	};

	/**
	* @type {Array.<unsquadron.GameLayer>}
	*/
	unsquadron.Game.layers_ = [];

	goog.addSingletonGetter(unsquadron.Game);
});

goog.scope(function(){
	var Component = qcurve.display.Component;
	var assert = goog.asserts.assert;

	/**
	* @constructor
	* @param {number} index
	* @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
	* @extends {qcurve.display.Component}
	*/
	unsquadron.GameLayer = function(index, opt_domHelper){
		goog.base(this, opt_domHelper);

		this.index_ = index;
	};
	goog.inherits(unsquadron.GameLayer, Component);

	/** @override */
	unsquadron.GameLayer.prototype.createDom = function(){
		var element = this.getElement();

		if(!element){
			element = this.dom_.createDom('div', {'name' : 'layer_' + this.getIndex()});
		}

		this.decorateInternal(element);
	};

	/** @return {number} */
	unsquadron.GameLayer.prototype.getIndex = function(){
		return this.index_;
	};

	/**
	* @private
	* @type {number}
	*/
	unsquadron.GameLayer.prototype.index_ = 0;
});
