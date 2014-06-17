goog.provide('qcurve.commands.CommandList');


goog.scope(function(){

	/**
	* @constructor
	* @param {...qcurve.commands.Command} var_args
	* @extends {qcurve.commands.Command}
	* @export
	*/
	qcurve.commands.CommandList = function(){
		goog.base(this);

		this.commands_ = Array.prototype.slice.apply(arguments, 0);
	};
	goog.inherits(qcurve.commands.CommandList, qcurve.commands.Command);

	/** @export */
	qcurve.commands.CommandList.prototype.execute = function(){
		var commands = this.commands_ ;
		var length = commands.length;

		for(var i = 0; i < length; ++i){
			var command = commands[i];
			command.execute();
		}
	};

	/**
	* @param {qcurve.commands.Command} command
	* @export
	*/
	qcurve.commands.CommandList.prototype.addCommand = function(command){
		this.commands_.push(command);
	};
});
