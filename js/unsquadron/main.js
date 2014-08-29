goog.require('unsquadron.Game');
goog.require('qcurve.display.Stage');
goog.require('qcurve.display.Sprite');
goog.require('unsquadron.display.Bullet0');
goog.require('unsquadron.display.Tank0');
goog.require('unsquadron.display.Turrent0');
goog.require('unsquadron.display.Turrent1');
goog.require('unsquadron.display.Helicopter');
goog.require('unsquadron.players.PlayerModel');
goog.require('unsquadron.planes.PlaneModel');

goog.provide('unsquadron.Main');
goog.scope(function(){
	var Linear = greensock.Linear;
	var TweenLite = greensock.TweenLite;
	var Stage = qcurve.display.Stage;
	var Bullet0 = unsquadron.display.Bullet0;
	var Tank0 = unsquadron.display.Tank0;
	var Turrent0 = unsquadron.display.Turrent0;
	var Turrent1 = unsquadron.display.Turrent1;
	var Helicopter = unsquadron.display.Helicopter;
	var Game = unsquadron.Game;
	var PlayerModel = unsquadron.players.PlayerModel;
	var PlaneModel = unsquadron.planes.PlaneModel;

	/** @constructor */
	unsquadron.Main = function(){
		var stage = Stage.getInstance();
		var game = Game.getInstance();
		stage.addChild(game, true);

		var layer4 = game.getLayerAt(4);
		//var helicopter = new Helicopter0();
		//RenderManager.addChildToLayer(helicopter, 4, true);
		this.rainbowBullet_ = new Bullet0();
		layer4.addChild(this.rainbowBullet_, true);

		// TODO - remove tesing characters
		var tank = new Tank0();
		layer4.addChild(tank, true);
		tank.setX(100);
		tank.setY(433);
		tank.setMissleTarget(this.rainbowBullet_);

		tank = new Tank0();
		layer4.addChild(tank, true);
		tank.setX(300);
		tank.setY(433);
		tank.setMissleTarget(this.rainbowBullet_);

		tank = new Tank0();
		layer4.addChild(tank, true);
		tank.setX(500);
		tank.setY(433);
		tank.setMissleTarget(this.rainbowBullet_);

		var turrent0 = new Turrent0();
		layer4.addChild(turrent0, true);
		turrent0.setX(50);
		turrent0.setY(380);
		turrent0.setMissleTarget(this.rainbowBullet_);

		turrent0 = new Turrent0();
		layer4.addChild(turrent0, true);
		turrent0.setX(150);
		turrent0.setY(380);
		turrent0.setMissleTarget(this.rainbowBullet_);

		turrent0 = new Turrent0();
		layer4.addChild(turrent0, true);
		turrent0.setX(250);
		turrent0.setY(380);
		turrent0.setMissleTarget(this.rainbowBullet_);

		turrent0 = new Turrent0();
		layer4.addChild(turrent0, true);
		turrent0.setX(350);
		turrent0.setY(380);
		turrent0.setMissleTarget(this.rainbowBullet_);

		turrent0 = new Turrent0();
		layer4.addChild(turrent0, true);
		turrent0.setX(450);
		turrent0.setY(380);
		turrent0.setMissleTarget(this.rainbowBullet_);

		turrent0 = new Turrent0();
		layer4.addChild(turrent0, true);
		turrent0.setX(550);
		turrent0.setY(380);
		turrent0.setMissleTarget(this.rainbowBullet_);

		turrent0 = new Turrent0();
		layer4.addChild(turrent0, true);
		turrent0.setX(650);
		turrent0.setY(380);
		turrent0.setMissleTarget(this.rainbowBullet_);


		var turrent1 = new Turrent1();
		layer4.addChild(turrent1, true);
		turrent1.setX(15);
		turrent1.setY(400);
		turrent1.setMissleTarget(this.rainbowBullet_);

		turrent1 = new Turrent1();
		layer4.addChild(turrent1, true);
		turrent1.setX(300);
		turrent1.setY(400);
		turrent1.setMissleTarget(this.rainbowBullet_);

		turrent1 = new Turrent1();
		layer4.addChild(turrent1, true);
		turrent1.setX(700);
		turrent1.setY(400);
		turrent1.setMissleTarget(this.rainbowBullet_);
		this.playerModel_ = new PlayerModel();


		// TODO move to factory.
		var planeModel = new PlaneModel();
		planeModel.setName('F8E Crusader');
		planeModel.setDescription('The most basic of all available fighter aircraft. With a good pilot, the F8E can hit both air and ground targets effectively.');
		//planeModel.setHorizonalSpeed(1);
		//planeModel.setVerticalSpeed(1);

		this.playerModel_.setPlaneModel(planeModel);

		goog.global['rainbowBullet'] = this.rainbowBullet_;
		setInterval(this.onInterval_, 3000);

		this.onInterval_();
	};

	goog.addSingletonGetter(unsquadron.Main);

	unsquadron.Main.prototype.onInterval_ = function (){
		TweenLite.to(goog.global['rainbowBullet'].getElement(), 0.9, {
				'top' : ((Math.random() * 467) + 5) + 'px',
				'left' : ((Math.random() * 778)) + 'px'
			}
		);
	};

	unsquadron.Main.prototype.rainbowBullet_ = null;

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
