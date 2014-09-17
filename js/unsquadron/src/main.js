/** @define {boolean} */
unsquadron.autoInitialize = false;


goog.require('unsquadron.Game');
goog.require('qcurve.display');
goog.require('goog.events');
goog.require('qcurve.display.Stage');
goog.require('qcurve.display.Sprite');
goog.require('unsquadron.display.Bullet0');
goog.require('unsquadron.display.Tank0');
goog.require('unsquadron.display.Turrent0');
goog.require('unsquadron.display.Turrent1');
goog.require('unsquadron.display.Mountain0');
goog.require('unsquadron.display.Mountain1');
goog.require('goog.events.EventType');
goog.require('goog.Timer');

goog.provide('unsquadron.Main');


goog.scope(function(){
	var listen = goog.events.listen;
	var unlisten = goog.events.unlisten;
	var EventType = goog.events.EventType;
	var Linear = greensock.Linear;
	var TweenMax = greensock.TweenMax;
	var Stage = qcurve.display.Stage;
	var Bullet0 = unsquadron.display.Bullet0;
	var Tank0 = unsquadron.display.Tank0;
	var Turrent0 = unsquadron.display.Turrent0;
	var Turrent1 = unsquadron.display.Turrent1;
	var Game = unsquadron.Game;
	var Sprite = qcurve.display.Sprite;
	var Mountain0 = unsquadron.display.Mountain0;
	var Mountain1 = unsquadron.display.Mountain1;
	var Timer = goog.Timer;

	
	/** @constructor */
	unsquadron.Main = function(){
		var stage = Stage.getInstance();
		var game = Game.getInstance();
		stage.addChild(game, true);

		this.addSky(game.getLayerAt(0));
		this.addMountains(game.getLayerAt(1));
		this.addGround(game.getLayerAt(5));
		this.addPlayerTarget(game.getLayerAt(6));
		this.addEnemies(game.getLayerAt(6));
		this.addPlayerAvatar(game.getLayerAt(7));

		var STAGE_WIDTH = 510;
		var LEVEL_TIME = 50 / qcurve.display.FRAME_RATE_RATIO;
		this.enableHorizontalParrallax(game.getLayerAt(5), LEVEL_TIME, -1, this.ground_.getWidth() - STAGE_WIDTH);
		this.enableHorizontalParrallax(game.getLayerAt(6), LEVEL_TIME, -1, this.ground_.getWidth() - STAGE_WIDTH);
		this.enableHorizontalParrallax(this.mountains_, LEVEL_TIME * 2, -1, this.mountains_.getWidth() - STAGE_WIDTH);

		if(!stage.isInDocument()){
			stage.render();
		}

		listen(stage.getElement(), EventType.MOUSEMOVE, this.onMouseMove_, false, this);
	}
	goog.addSingletonGetter(unsquadron.Main);

	unsquadron.Main.prototype.addSky = function(layer){
		var sky0 = new Sprite('sky0');
		layer.addChild(sky0, true);
	};

	unsquadron.Main.prototype.addMountains = function(layer){
		this.mountains_ = new Sprite('mountains');
		layer.addChild(this.mountains_, true);
		var classes = [];

		for(var i = 0; i < 20; ++i){
			classes.push(Math.random() < .5 ? Mountain0 : Mountain1);
		}

		for(i = 0; i < classes.length; ++i){
			var MountainClass = classes[i];
			var mountain = new MountainClass();
			this.mountains_.addChild(mountain, true);
			mountain.setX(this.mountains_.getWidth());
			this.mountains_.setWidth(this.mountains_.getWidth() + mountain.getWidth())
		}
		this.mountains_.setY(223);
	};

	unsquadron.Main.prototype.addGround = function(layer){
		this.ground_ = new Sprite('ground');
		layer.addChild(this.ground_, true);

		this.ground_.setWidth(5190);
		this.ground_.setY(319);
	};

	unsquadron.Main.prototype.enableHorizontalParrallax = function(component, seconds, direction, transition){
		TweenMax.to(component.getElement(), seconds, {
			'css':{
				'left':(direction * transition) + 'px'
			}, 
			'overwrite':true,
			'ease': Linear.easeNone,
			'repeat': Number.POSITIVE_INFINITY,
			'repeatDelay': 2
		});
	};

	unsquadron.Main.prototype.addPlayerTarget = function(layer){
		this.playerTarget_ = new Sprite('player0Target');
		layer.addChild(this.playerTarget_, true);
		this.playerTarget_.setX(50);
		this.playerTarget_.setY(30);
	};

	unsquadron.Main.prototype.addPlayerAvatar = function(layer){
		this.playerAvatar_ = new Sprite('player0');
		layer.addChild(this.playerAvatar_, true);
		this.playerAvatar_.setX(50);
		this.playerAvatar_.setY(30);
	};

	unsquadron.Main.prototype.addEnemies = function(layer){
		var turrent0;
		turrent0 = new Turrent0();
		layer.addChild(turrent0, true);
		turrent0.setX(700);
		turrent0.setY(384);
		turrent0.setMissleTarget(this.playerTarget_);

		turrent0 = new Turrent0();
		layer.addChild(turrent0, true);
		turrent0.setX(917);
		turrent0.setY(384);
		turrent0.setMissleTarget(this.playerTarget_);
		
		turrent0 = new Turrent0();
		layer.addChild(turrent0, true);
		turrent0.setX(1040);
		turrent0.setY(384);
		turrent0.setMissleTarget(this.playerTarget_);

		turrent0 = new Turrent0();
		layer.addChild(turrent0, true);
		turrent0.setX(1225);
		turrent0.setY(384);
		turrent0.setMissleTarget(this.playerTarget_);

		turrent0 = new Turrent0();
		layer.addChild(turrent0, true);
		turrent0.setX(1435);
		turrent0.setY(384);
		turrent0.setMissleTarget(this.playerTarget_);

		turrent0 = new Turrent0();
		layer.addChild(turrent0, true);
		turrent0.setX(2591);
		turrent0.setY(384);
		turrent0.setMissleTarget(this.playerTarget_);

		turrent0 = new Turrent0();
		layer.addChild(turrent0, true);
		turrent0.setX(2783);
		turrent0.setY(384);
		turrent0.setMissleTarget(this.playerTarget_);

		turrent0 = new Turrent0();
		layer.addChild(turrent0, true);
		turrent0.setX(3167);
		turrent0.setY(384);
		turrent0.setMissleTarget(this.playerTarget_);

		var tank0;
		tank0 = new Tank0();
		layer.addChild(tank0, true);
		tank0.setX(760);
		tank0.setY(339);
		tank0.setMissleTarget(this.playerTarget_);


		tank0 = new Tank0();
		layer.addChild(tank0, true);
		tank0.setX(960);
		tank0.setY(353);
		tank0.setMissleTarget(this.playerTarget_);

		tank0 = new Tank0();
		layer.addChild(tank0, true);
		tank0.setX(1200);
		tank0.setY(329);
		tank0.setMissleTarget(this.playerTarget_);

		tank0 = new Tank0();
		layer.addChild(tank0, true);
		tank0.setX(1500);
		tank0.setY(329);
		tank0.setMissleTarget(this.playerTarget_);

		

		var turrent1;
		turrent1 = new Turrent1();
		layer.addChild(turrent1, true);
		turrent1.setX(1705);
		turrent1.setY(303);
		turrent1.setMissleTarget(this.playerTarget_);

		turrent1 = new Turrent1();
		layer.addChild(turrent1, true);
		turrent1.setX(2280);
		turrent1.setY(303);
		turrent1.setMissleTarget(this.playerTarget_);

		turrent1 = new Turrent1();
		layer.addChild(turrent1, true);
		turrent1.setX(2280);
		turrent1.setY(303);
		turrent1.setMissleTarget(this.playerTarget_);
		
		turrent1 = new Turrent1();
		layer.addChild(turrent1, true);
		turrent1.setX(3256);
		turrent1.setY(353);
		turrent1.setMissleTarget(this.playerTarget_);
	};

	unsquadron.Main.prototype.onMouseMove_ = function (event){
		this.mouseMoveEvent_ = event;

		if(!this.mouseMoveEvent_){
			return;
		}

		this.playerTarget_.setXY(
			this.mouseMoveEvent_.clientX,
			this.mouseMoveEvent_.clientY
		);

		this.playerAvatar_.setX(this.mouseMoveEvent_.clientX -16);
		this.playerAvatar_.setY(this.mouseMoveEvent_.clientY);
	};


	unsquadron.Main.prototype.playerTarget_ = null;

	goog.exportSymbol('unsquadron.Main', unsquadron.Main);
	goog.exportProperty(unsquadron.Main, 'getInstance', unsquadron.Main.getInstance);

	if(unsquadron.autoInitialize){
		unsquadron.Main.getInstance();
	}
});


