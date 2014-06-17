goog.require('goog.events');
goog.provide('qcurve.events.Event');

goog.scope(function(){
	/** @const */
	qcurve.events.Event.ADDED = goog.events.getUniqueId('added');

	/** @const */
	qcurve.events.Event.ADDED_TO_STAGE = goog.events.getUniqueId('addedToStage');

	/** @const */
	qcurve.events.Event.REMOVED = goog.events.getUniqueId('removed');

	/** @const */
	qcurve.events.Event.REMOVED_FROM_STAGE = goog.events.getUniqueId('removedFromStage');

	/** @const */
	qcurve.events.Event.ENTER_FRAME = goog.events.getUniqueId('enterFrame');
});
