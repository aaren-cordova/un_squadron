goog.provide('qcurve.display.Stage');
goog.require('goog.string');
goog.require('qcurve.events.Event');
goog.require('qcurve.display.Component');
goog.require('goog.asserts');

goog.scope(function(){
	var Stage = qcurve.display.Stage;
	var Event = qcurve.events.Event;
	var assert = goog.asserts.assert;

	/**
	* @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
	* @constructor
	* @extends {qcurve.display.Component}
	*/
	qcurve.display.Stage = function(opt_domHelper){
		assert(!qcurve.display.Stage.instance_, 'Stage is singleton class.');

		goog.base(this, opt_domHelper);

		this.render();
	};

	goog.inherits(qcurve.display.Stage, qcurve.display.Component);

	/** @override */
	qcurve.display.Stage.prototype.createDom = function(){
		this.decorateInternal(this.dom_.createDom('div'));
	};


	/** @override */
	qcurve.display.Stage.prototype.disposeInternal = function(){
		goog.base(this, 'disposeInternal');
	};

	/** @override */
	qcurve.display.Stage.prototype.decorateInternal = function(element){
		goog.base(this, 'decorateInternal', element);

		goog.dom.setProperties(element, {'class' : 'stage'});
	};

	/** @override */
	qcurve.display.Stage.prototype.setParent = function(value){
		throw new Error('Stage must be the top component.');
	};



	/** @override */
	qcurve.display.Stage.prototype.getRoot = function(){
		return this;
	};


	/** @override */
	qcurve.display.Stage.prototype.getStage = function (){
		return this;
	};

	goog.addSingletonGetter(qcurve.display.Stage);
});
