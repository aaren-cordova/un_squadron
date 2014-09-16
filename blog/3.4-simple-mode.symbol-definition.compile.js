// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS
// @output_file_name default.js
// @formatting pretty_print
// ==/ClosureCompiler==


// Example 3.4: Symbol Definition
// Mode: Simple Mode
// Overview: Symbols can be set by the compiler

(function(){
	// This is a symbol
	var browser_useragent_ASSUME_IE = false;
	// This is a symbol
	var browser_useragent_ASSUME_GECKO = false;
	// This is a symbol
	var browser_useragent_ASSUME_WEBKIT = false;
	// This is a symbol
	var browser_useragent_ASSUME_MOBILE_WEBKIT = false;
	// This is a symbol
	var browser_useragent_ASSUME_OPERA = false;
	// This is a symbol
	var browser_useragent_ASSUME_ANY_VERSION = false;

	// Constant folding
	var browser_useragent_BROWSER_KNOWN_ =
		browser_useragent_ASSUME_IE ||
		browser_useragent_ASSUME_GECKO ||
		browser_useragent_ASSUME_MOBILE_WEBKIT ||
		browser_useragent_ASSUME_WEBKIT ||
		browser_useragent_ASSUME_OPERA;

	/**
	 * Initializer for browser.userAgent.
	 *
	 * This is a named function so that it can be stripped via the jscompiler
	 * option for stripping types.
	 * @private
	 */
	var browser_useragent_init_ = function() {
		browser.userAgent.detectedOpera_ = false;
		browser.userAgent.detectedIe_ = false;
		browser.userAgent.detectedWebkit_ = false;
		browser.userAgent.detectedMobile_ = false;
		browser.userAgent.detectedGecko_ = false;

		var ua;
		if (!browser.userAgent.BROWSER_KNOWN_ &&
				(ua = browser.userAgent.getUserAgentString())) {
			var navigator = browser.userAgent.getNavigator();
			browser.userAgent.detectedOpera_ = ua.indexOf('Opera') == 0;
			browser.userAgent.detectedIe_ = !browser.userAgent.detectedOpera_ &&
					ua.indexOf('MSIE') != -1;
			browser.userAgent.detectedWebkit_ = !browser.userAgent.detectedOpera_ &&
					ua.indexOf('WebKit') != -1;
			// WebKit also gives navigator.product string equal to 'Gecko'.
			browser.userAgent.detectedMobile_ = browser.userAgent.detectedWebkit_ &&
					ua.indexOf('Mobile') != -1;
			browser.userAgent.detectedGecko_ = !browser.userAgent.detectedOpera_ &&
					!browser.userAgent.detectedWebkit_ && navigator.product == 'Gecko';
		}
	};


	if (!browser_useragent_BROWSER_KNOWN_) {
		// Run user agent detection script
		browser_useragent_init_()
	}

	if(browser_useragent_ASSUME_OPERA){
		console.log([
			'Christine:',
			'In sleep he sang to me ',
			'In dreams he came ',
			'That voice which calls to me ',
			'And speaks my name ',
			'And do I dream again ',
			'For now I find ',
			'The Phantom of the Opera is there ',
			'Inside my mind ',
			'',
			'Phantom:',
			'Sing once again with me ',
			'Our strange duet ',
			'My power over you ',
			'Grows stronger yet ',
			'And though you turn from me ',
			'To glance behind ',
			'The Phantom of the Opera is there ',
			'Inside your mind ',
			'',
			'Christine:',
			'Those who have seen your face ',
			'Draw back in fear ',
			'I am the mask you wear ',
			'',
			'Phantom:',
			'It\'s me they hear ',
			'',
			'Both:',
			'My/your spirit and your/my voice ',
			'In one combined ',
			'The Phantom of the Opera is there ',
			'Inside your/my mind ',
			'',
			'Offstage:',
			'He\'s there the Phantom of the Opera! ',
			'',
			'Phantom:',
			'In all your fantasies ',
			'You always knew ',
			'That man and mystery ',
			'',
			'Christine:',
			'Were both in you ',
			'',
			'Both:',
			'And in this labyrinth ',
			'Where night is blind ',
			'The Phantom of the Opera is there ',
			'Inside your/my mind ',
			'',
			'Christine:',
			'He\'s there, the Phantom of the Opera! ',
			'(Vocalizing) ',
			'',
			'Phantom:',
			'Sing, my angel of music! ',
			'',
			'Christine: ',
			'(Vocalizing higher) ',
			'',
			'Phantom:',
			'Sing for me! ',
			'',
			'Christine:',
			'(Vocalizing higher) ',
			'',
			'Phantom:',
			'Sing my angel of music! ',
			'',
			'Christine:',
			'(Sings higher) ',
			'',
			'Phantom:',
			'SING FOR ME! ',
			'',
			'Phantom:',
			'I have brought you ',
			'To the seat of sweet music\'s throne ',
			'To this kingdom where all must pay homage to music ',
			'Music.',
			'You have come here ',
			'For one purpose and one alone ',
			'Since the moment I first heard you sing ',
			'I have needed you with me to serve me ',
			'To sing for my music'
		].join('\n'))
	}


}());