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
goog.require('goog.events.EventType');
goog.require('goog.Timer');
goog.provide('unsquadron.Main');
goog.scope(function(){
	var listen = goog.events.listen;
	var unlisten = goog.events.unlisten;
	var EventType = goog.events.EventType;


	var Linear = greensock.Linear;
	var TimelineMax = greensock.TimelineMax;
	var TweenMax = greensock.TweenMax;
	var TweenLite = greensock.TweenLite;
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

	var STAGE_WIDTH = 510;
	var LEVEL_TIME = 80;
	/** @constructor */
	unsquadron.Main = function(){
		var stage = Stage.getInstance();
		var game = Game.getInstance();
		stage.addChild(game, true);

		var game = Game.getInstance();
		this.addSky(game.getLayerAt(0));
		this.addMountains(game.getLayerAt(1));
		this.addPlayer(game.getLayerAt(2));
		this.addGround(game.getLayerAt(2));

		if(!stage.isInDocument()){
			stage.render();
		}

		listen(game.getElement(), EventType.MOUSEMOVE, this.onMouseMove_, false, this);
		listen(qcurve.display.getEnterFrameTimer(), Timer.TICK, this.onEnterFrameTimer_, false, this);
	}
	goog.addSingletonGetter(unsquadron.Main);

	unsquadron.Main.prototype.addPlayer = function(layer){
		this.player_ = new Bullet0();
		layer.addChild(this.player_, true);
	};

	unsquadron.Main.prototype.addSky = function(layer){
		var sky0 = new Sprite('sky0');
		layer.addChild(sky0, true);
	};

	unsquadron.Main.prototype.addMountains = function(layer){
		var mountains = new Sprite('mountains');
		layer.addChild(mountains, true);
		var classes = [];

		for(var i = 0; i < 20; ++i){
			classes.push(Math.random() < .5 ? Mountain0 : Mountain1);
		}

		for(i = 0; i < classes.length; ++i){
			var MountainClass = classes[i];
			var mountain = new MountainClass();
			mountains.addChild(mountain, true);
			mountain.setX(mountains.getWidth());
			mountains.setWidth(mountains.getWidth() + mountain.getWidth())
		}
		mountains.setY(223);
		this.enableHorizontalParrallax(mountains, LEVEL_TIME * 2, mountains.getWidth() - STAGE_WIDTH);
	};

	unsquadron.Main.prototype.addGround = function(layer){
		var ground = new Sprite('ground');
		layer.addChild(ground, true);

		ground.setWidth(5190);
		ground.setY(319);

		this.addEnemies(ground);
		this.enableHorizontalParrallax(ground, LEVEL_TIME, ground.getWidth() - STAGE_WIDTH);
	};

	unsquadron.Main.prototype.enableHorizontalParrallax = function(component, seconds, transition){
		TweenMax.to(component.getElement(), seconds, {
			'css':{
				'left':'-' + (transition) + 'px'
			}, 
			'overwrite':true,
			'ease': Linear.easeNone,
			'repeat': Number.POSITIVE_INFINITY,
			'repeatDelay': 2
		});
	};

	unsquadron.Main.prototype.addEnemies = function(layer){
		var turrent0;
		turrent0 = new Turrent0();
		layer.addChild(turrent0, true);
		turrent0.setX(700);
		turrent0.setY(65);
		turrent0.setMissleTarget(this.player_);

		turrent0 = new Turrent0();
		layer.addChild(turrent0, true);
		turrent0.setX(917);
		turrent0.setY(65);
		turrent0.setMissleTarget(this.player_);
		
		turrent0 = new Turrent0();
		layer.addChild(turrent0, true);
		turrent0.setX(1040);
		turrent0.setY(65);
		turrent0.setMissleTarget(this.player_);

		turrent0 = new Turrent0();
		layer.addChild(turrent0, true);
		turrent0.setX(1225);
		turrent0.setY(65);
		turrent0.setMissleTarget(this.player_);

		turrent0 = new Turrent0();
		layer.addChild(turrent0, true);
		turrent0.setX(1435);
		turrent0.setY(65);
		turrent0.setMissleTarget(this.player_);

		turrent0 = new Turrent0();
		layer.addChild(turrent0, true);
		turrent0.setX(2591);
		turrent0.setY(29);
		turrent0.setMissleTarget(this.player_);

		turrent0 = new Turrent0();
		layer.addChild(turrent0, true);
		turrent0.setX(2783);
		turrent0.setY(29);
		turrent0.setMissleTarget(this.player_);

		turrent0 = new Turrent0();
		layer.addChild(turrent0, true);
		turrent0.setX(3167);
		turrent0.setY(29);
		turrent0.setMissleTarget(this.player_);

		var tank0;
		tank0 = new Tank0();
		layer.addChild(tank0, true);
		tank0.setX(760);
		tank0.setY(20);
		tank0.setMissleTarget(this.player_);


		tank0 = new Tank0();
		layer.addChild(tank0, true);
		tank0.setX(960);
		tank0.setY(34);
		tank0.setMissleTarget(this.player_);

		tank0 = new Tank0();
		layer.addChild(tank0, true);
		tank0.setX(1200);
		tank0.setY(10);
		tank0.setMissleTarget(this.player_);

		tank0 = new Tank0();
		layer.addChild(tank0, true);
		tank0.setX(1500);
		tank0.setY(10);
		tank0.setMissleTarget(this.player_);

		tank0 = new Tank0();
		layer.addChild(tank0, true);
		tank0.setX(1980);
		tank0.setY(10);
		tank0.setMissleTarget(this.player_);


		var turrent1;
		turrent1 = new Turrent1();
		layer.addChild(turrent1, true);
		turrent1.setX(1705);
		turrent1.setY(-16);
		turrent1.setMissleTarget(this.player_);

		turrent1 = new Turrent1();
		layer.addChild(turrent1, true);
		turrent1.setX(2280);
		turrent1.setY(-16);
		turrent1.setMissleTarget(this.player_);

		turrent1 = new Turrent1();
		layer.addChild(turrent1, true);
		turrent1.setX(2280);
		turrent1.setY(-16);
		turrent1.setMissleTarget(this.player_);
		
		turrent1 = new Turrent1();
		layer.addChild(turrent1, true);
		turrent1.setX(3256);
		turrent1.setY(34);
	};

	
	unsquadron.Main.prototype.onMouseMove_ = function (event){
		this.mouseMoveEvent_ = event;
	};

	unsquadron.Main.prototype.onEnterFrameTimer_ = function (){
		if(!this.mouseMoveEvent_){
			return;
		}

		this.player_.setX(this.mouseMoveEvent_.clientX - 5)
		this.player_.setY(this.mouseMoveEvent_.clientY - 25)
		this.mouseMoveEvent_ = null;
	};

	unsquadron.Main.prototype.player_ = null;

	goog.exportSymbol('unsquadron.Main', unsquadron.Main);


});

var main_ = unsquadron.Main.getInstance();


/*
var cssTemplate = [
	'.sprite_sheet[data-name="%s"][data-x-frame="%s"][data-y-frame="%s"][data-z-frame="%s"]{',
	'	background: url(\'%s\') no-repeat %spx %spx;',
	'	width: %spx;',
	'	height: %spx;',
	'}'
].join('\n');

function getSpriteCSS(name, xFrame, yFrame, zFrame, x, y, width, height, url){
	return goog.string.subs(cssTemplate, name, xFrame, yFrame, zFrame, url, x, y, width, height);
}

goog.require('goog.string');
jQuery(document).ready(function(){
	var cssBlocs = [];

	jQuery.getJSON( './media/sprite_sheet.json', function(data){
		alert('dson')
		var frames = data.frames;
		
		for(var i = 0; i < frames.length; ++i){
			var frameData = frames[i];

			var frameName = frameData.filename;
			var frame = frameData.frame;
			var rotated = !!frameData.rotated;
			var trimmed = !!frameData.trimmed;
			var spriteSourceSize = frameData.spriteSourceSize;
			var sourceSize = frameData.sourceSize;
			var name = frameName.replace(/_\d+y_\d+z\d+$/, '').toLowerCase();
			var frameXYZ = frameName.replace(/^.*_(\d+y_\d+z\d+)$/, '$1');
			var frameX = frameXYZ.replace(/^\d+y_\d+z(\d+)$/, '$1') | 0;
			var frameY = frameXYZ.replace(/^(\d+)y_\d+z\d+$/, '$1') | 0;
			var frameZ = frameXYZ.replace(/^\d+y_(\d+)z\d+$/, '$1') | 0;

			cssBlocs.push(
				getSpriteCSS(name, frameX, frameY, frameZ, frame.x, frame.y, frame.w, frame.h, '../media/sprite_sheet.png')
			);
		}

		jQuery('<style>')
		.append(
			cssBlocs.join('\n')
		)
		.appendTo('head');
	});
});
*/