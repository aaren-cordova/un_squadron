goog.require('goog.asserts');
goog.provide('unsquadron.players.IPlayerController');

goog.scope(function(){

	/** 
	 * @interface
	 * @extends {goog.disposable.Disposable}
	 */
	unsquadron.players.IPlayerController = function(){};

	/** 
	 * @param {unsquadron.players.IPlayerModel} playerModel
	 */
	unsquadron.players.IPlayerController.prototype.setPlayerModel = function(playerModel){};

	unsquadron.players.IPlayerController.prototype.onLeftButtonDown = function(event){};
	unsquadron.players.IPlayerController.prototype.onLeftButtonUp = function(event){};

	unsquadron.players.IPlayerController.prototype.onRightButtonDown = function(event){};
	unsquadron.players.IPlayerController.prototype.onRightButtonUp = function(event){};

	unsquadron.players.IPlayerController.prototype.onUpButtonDown = function(event){};
	unsquadron.players.IPlayerController.prototype.onUpButtonUp = function(event){};

	unsquadron.players.IPlayerController.prototype.onDownButtonDown = function(event){};
	unsquadron.players.IPlayerController.prototype.onDownButtonUp = function(event){};

	unsquadron.players.IPlayerController.prototype.onXButtonDown = function(event){};
	unsquadron.players.IPlayerController.prototype.onXButtonUp = function(event){};

	unsquadron.players.IPlayerController.prototype.onYButtonDown = function(event){};
	unsquadron.players.IPlayerController.prototype.onYButtonUp = function(event){};

	unsquadron.players.IPlayerController.prototype.onAButtonDown = function(event){};
	unsquadron.players.IPlayerController.prototype.onAButtonUp = function(event){};

	unsquadron.players.IPlayerController.prototype.onBButtonDown = function(event){};
	unsquadron.players.IPlayerController.prototype.onBButtonUp = function(event){};
});