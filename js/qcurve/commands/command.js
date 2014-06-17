goog.require('goog.asserts');
goog.provide('qcurve.commands.Command');

goog.scope(function(){
	/**
	* @constructor
	* @param {Object=} target
	* @param {(Function | string)=} command
	* @param {...} var_args
	* @export
	*/
	qcurve.commands.Command = function(target, command, var_args){
		if(arguments.length){
			if(goog.isString(command)){
				goog.asserts.assert(target, 'Target must be defined when the command is a string.');
				this.command_ = target[command];
			}
			else{
				goog.asserts.assertFunction(command);
				this.command_ = command;
			}
		}

		this.target_ = target || null;
		this.arguments_ = Array.prototype.slice.call(arguments, 2);
	};

	qcurve.commands.Command.fn = qcurve.commands.Command.prototype;

	/** @export */
	qcurve.commands.Command.prototype.execute = function(){
		this.command_.apply(this.target_, this.arguments_);
	};
});
