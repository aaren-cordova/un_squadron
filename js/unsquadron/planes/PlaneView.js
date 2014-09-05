goog.scope(function(){
	goog.require('goog.events');
	goog.require('goog.ui.Component');
	goog.require('goog.events.KeyHandler');
	goog.provide('unsquadron.planes.PlaneModel')
	goog.provide('unsquadron.planes.PlaneView')
	

	var listen = goog.events.listen;
	var listen = goog.events.listen;
	var unlisten = goog.events.unlisten;

	var PlaneModelEventType = unsquadron.planes.PlaneModel.EventType;
	var KeyHandlerEventType = unsquadron.planes.PlaneModel.KeyHandlerEventType;

	/** 
	* @implements {unsquadron.planes.IPlaneView}
	* @extends {goog.Disposable}
	*/
	unsquadron.planes.PlaneView = function(){
		goog.ui.Component.call(this);
	};
	goog.inherits(unsquadron.planes.PlaneView, goog.ui.Component);

	unsquadron.planes.PlaneView.prototype.disposeInteral = function(){
		this.setPlaneModel(null);
		this.setPlaneController(null);
	};

	/** @param {unsquadron.planes.IPlaneModel} planeModel */
	unsquadron.planes.PlaneView.prototype.setPlaneModel = function(planeModel){
		if(this.planeModel_){
			unlisten(this.planeModel_, PlaneModelEventType.HORIZONAL_DIRECTION, this.onHorizonalDirectionChange_, false, this);
			unlisten(this.planeModel_, PlaneModelEventType.VERTICAL_DIRECTION, this.onVerticalDirectionChange_, false, this);
			unlisten(this.planeModel_, PlaneModelEventType.HORIZONAL_SPEED, this.onHorizonalDirectionChange_, false, this);
			unlisten(this.planeModel_, PlaneModelEventType.VERTICAL_SPEED, this.onVerticalSpeedChange_, false, this);

		}

		this.planeModel_ = planeModel;

		if(this.planeModel_){
			listen(this.planeModel_, PlaneModelEventType.HORIZONAL_DIRECTION, this.onHorizonalDirectionChange_, false, this);
			listen(this.planeModel_, PlaneModelEventType.VERTICAL_DIRECTION, this.onVerticalDirectionChange_, false, this);
			listen(this.planeModel_, PlaneModelEventType.HORIZONAL_SPEED, this.onHorizonalDirectionChange_, false, this);
			listen(this.planeModel_, PlaneModelEventType.VERTICAL_SPEED, this.onVerticalSpeedChange_, false, this);
		}
	};

	/** @param {unsquadron.planes.IPlaneController} planeController */
	unsquadron.planes.PlaneView.prototype.setPlaneController = function(planeController){
		this.planeController_ = planeModel;
	};












	/** @inheritDoc*/
	unsquadron.planes.PlaneView.prototype.createDom = function(){
		var planeModel = this.planeModel_;
		var dom = this.dom_;
		var rootElement = dom.createDom("div", {'class': 'plane'});

		this.decorateInternal(rootElement);
	};

	/** @inheritDoc */
	unsquadron.planes.PlaneView.prototype.decorateInternal = function(rootElement){
		this.setElementInternal(element);

		this.keyHandler_ = new goog.events.KeyHandler(document.body);
		listen(this.keyHandler_, KeyHandlerEventType.KEY)
		if(this.planeController_){
			listen(docu)
			onPreviousSpecialWeaponButtonDown
			onPreviousSpecialWeaponButtonUp
			onNextSpecialWeaponButtonDown
			onNextSpecialWeaponButtonUp
			onUseStandardWeaponButtonDown
			onUseStandardWeaponButtonUp
			onUseSpecialWeaponButtonDown
			onUseSpecialWeaponButtonUp
			onLeftButtonDown
			onLeftButtonUp
			onRightButtonDown
			onRightButtonUp
			onUpButtonDown
			onUpButtonUp
			onDownButtonDown
			onDownButtonUp
			onPauseButtonDown
			onPauseButtonUp
			onSelectButtonDown
			onSelectButtonUp
		}
		this.invalidate();
	};

	unsquadron.planes.PlaneView.prototype.invalidate = function(rootElement){
		this.onHorizonalDirectionChange_(null);
		this.onHorizonalSpeedChange_(null);
		this.onVerticalSpeedChange_(null);
		this.onVerticalSpeedChange_(null);
	};

	unsquadron.planes.PlaneView.prototype.onHorizonalDirectionChange_ = function(event){
		var element = getContentElement();
		if(element){
			goog.dom.setProperties(element, {'data-horizontal-direction': this.planeModel_.getHorizonalDirection()});
		}
	};
	
	unsquadron.planes.PlaneView.prototype.onVerticalDirectionChange_ = function(event){
		var element = getContentElement();
		if(element){
			goog.dom.setProperties(element, {'data-vertical-direction': this.planeModel_.getVerticalDirection()});
		}
	};

	unsquadron.planes.PlaneView.prototype.onHorizonalSpeedChange_ = function(event){
		var element = getContentElement();
		if(element){
			goog.dom.setProperties(element, {'data-horizontal-speed': this.planeModel_.getHorizonalSpeed()});
		}
	};
	
	unsquadron.planes.PlaneView.prototype.onVerticalSpeedChange_ = function(event){
		var element = getContentElement();
		if(element){
			goog.dom.setProperties(element, {'data-vertical-speed': this.planeModel_.getVerticalSpeed()});
		}
	};
});


	