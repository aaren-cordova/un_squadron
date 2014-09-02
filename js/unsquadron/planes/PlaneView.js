goog.scope(function(){
	goog.require('goog.events');
	goog.require('goog.ui.Component');
	goog.provide('unsquadron.planes.PlaneModel')
	goog.provide('unsquadron.planes.PlaneView')
	

	var listen = goog.events.listen;
	var listen = goog.events.listen;
	var unlisten = goog.events.unlisten;

	var EventType = unsquadron.planes.PlaneModel.EventType;


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
	};

	/** @param {unsquadron.planes.IPlaneModel} planeModel */
	unsquadron.planes.PlaneView.prototype.setPlaneModel = function(planeModel){
		if(this.planeModel_){
			unlisten(this.planeModel_, this.onHorizonalDirectionChange_, EventType.HORIZONAL_DIRECTION, false, this);
			unlisten(this.planeModel_, this.onVerticalDirectionChange_, EventType.VERTICAL_DIRECTION, false, this);
			unlisten(this.planeModel_, this.onHorizonalDirectionChange_, EventType.HORIZONAL_SPEED, false, this);
			unlisten(this.planeModel_, this.onVerticalSpeedChange_, EventType.VERTICAL_SPEED, false, this);

		}

		this.planeModel_ = planeModel;

		if(this.planeModel_){
			listen(this.planeModel_, this.onHorizonalDirectionChange_, EventType.HORIZONAL_DIRECTION, false, this);
			listen(this.planeModel_, this.onVerticalDirectionChange_, EventType.VERTICAL_DIRECTION, false, this);
			listen(this.planeModel_, this.onHorizonalDirectionChange_, EventType.HORIZONAL_SPEED, false, this);
			listen(this.planeModel_, this.onVerticalSpeedChange_, EventType.VERTICAL_SPEED, false, this);
		}
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

	// L
	unsquadron.planes.PlaneView.prototype.onPreviousSpecialWeaponButtonDown = function(event){};
	unsquadron.planes.PlaneView.prototype.onPreviousSpecialWeaponButtonUp = function(event){};

	// R
	unsquadron.planes.PlaneView.prototype.onNextSpecialWeaponButtonDown = function(event){};
	unsquadron.planes.PlaneView.prototype.onNextSpecialWeaponButtonUp = function(event){};

	// Y / X
	unsquadron.planes.PlaneView.prototype.onUseStandardWeaponButtonDown = function(event){};
	unsquadron.planes.PlaneView.prototype.onUseStandardWeaponButtonUp = function(event){};

	// B / A
	unsquadron.planes.PlaneView.prototype.onUseSpecialWeaponButtonDown = function(event){};
	unsquadron.planes.PlaneView.prototype.onUseSpecialWeaponButtonUp = function(event){};

	// <
	unsquadron.planes.PlaneView.prototype.onLeftButtonDown = function(event){
		this.planeModel_.setHorizonalDirection(-1);
	};
	unsquadron.planes.PlaneView.prototype.onLeftButtonUp = function(event){
		this.planeModel_.setHorizonalDirection(0);
	};

	// >
	unsquadron.planes.PlaneView.prototype.onRightButtonDown = function(event){
		this.planeModel_.setHorizonalDirection(1);
	};
	unsquadron.planes.PlaneView.prototype.onRightButtonUp = function(event){
		this.planeModel_.setHorizonalDirection(0);
	};

	// ^
	unsquadron.planes.PlaneView.prototype.onUpButtonDown = function(event){
		this.planeModel_.setVerticalDirection(1);
	};
	unsquadron.planes.PlaneView.prototype.onUpButtonUp = function(event){
		this.planeModel_.setVerticalDirection(0);
	};

	// v
	unsquadron.planes.PlaneView.prototype.onDownButtonDown = function(event){
		this.planeModel_.setVerticalDirection(-1);
	};
	unsquadron.planes.PlaneView.prototype.onDownButtonUp = function(event){
		this.planeModel_.setVerticalDirection(0);
	};

	// pause
	unsquadron.planes.PlaneView.prototype.onPauseButtonDown = function(event){
		// TODO
	};
	unsquadron.planes.PlaneView.prototype.onPauseButtonUp = function(event){};

	// select
	unsquadron.planes.PlaneView.prototype.onSelectButtonDown = function(event){
		// TODO
	};
	unsquadron.planes.PlaneView.prototype.onSelectButtonUp = function(event){
		// TODO
	};
});