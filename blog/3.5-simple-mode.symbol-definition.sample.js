// Defining symbols

/** @define {boolean} Whether we know at compile-time that the browser is IE. */
goog.useragent.ASSUME_IE = false;


/**@define {boolean} Whether we know at compile-time that the browser is GECKO.*/
goog.useragent.ASSUME_GECKO = false;


/** @define {boolean} Whether we know at compile-time that the browser is WEBKIT.*/
goog.useragent.ASSUME_WEBKIT = false;


/**
 * @define {boolean} Whether we know at compile-time that the browser is a
 *		 mobile device running WebKit e.g. iPhone or Android.
 */
goog.useragent.ASSUME_MOBILE_WEBKIT = false;


/** @define {boolean} Whether we know at compile-time that the browser is OPERA.*/
goog.useragent.ASSUME_OPERA = false;


/**
 * @define {boolean} Whether the {@code goog.useragent.isVersion} function will
 *		 return true for any version.
 */
goog.useragent.ASSUME_ANY_VERSION = false;

/**
 * Whether we know the browser engine at compile-time.
 * @type {boolean}
 * @private
 */
goog.useragent.BROWSER_KNOWN_ =
	goog.useragent.ASSUME_IE ||
	goog.useragent.ASSUME_GECKO ||
	goog.useragent.ASSUME_MOBILE_WEBKIT ||
	goog.useragent.ASSUME_WEBKIT ||
	goog.useragent.ASSUME_OPERA;






/**
 * Initializer for goog.userAgent.
 *
 * This is a named function so that it can be stripped via the jscompiler
 * option for stripping types.
 * @private
 */
goog.userAgent.init_ = function() {
	goog.userAgent.detectedOpera_ = false;
	goog.userAgent.detectedIe_ = false;
	goog.userAgent.detectedWebkit_ = false;
	goog.userAgent.detectedMobile_ = false;
	goog.userAgent.detectedGecko_ = false;

	var ua;
	if (!goog.userAgent.BROWSER_KNOWN_ &&
			(ua = goog.userAgent.getUserAgentString())) {
		var navigator = goog.userAgent.getNavigator();
		goog.userAgent.detectedOpera_ = ua.indexOf('Opera') == 0;
		goog.userAgent.detectedIe_ = !goog.userAgent.detectedOpera_ &&
				ua.indexOf('MSIE') != -1;
		goog.userAgent.detectedWebkit_ = !goog.userAgent.detectedOpera_ &&
				ua.indexOf('WebKit') != -1;
		// WebKit also gives navigator.product string equal to 'Gecko'.
		goog.userAgent.detectedMobile_ = goog.userAgent.detectedWebkit_ &&
				ua.indexOf('Mobile') != -1;
		goog.userAgent.detectedGecko_ = !goog.userAgent.detectedOpera_ &&
				!goog.userAgent.detectedWebkit_ && navigator.product == 'Gecko';
	}
};




if (!goog.useragent.BROWSER_KNOWN_) {
	// Run user agent detection script
	goog.useragent.init_()
}