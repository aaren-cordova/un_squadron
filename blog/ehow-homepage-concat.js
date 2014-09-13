

String.format = function (str) {
	var _string, i, n;

	if (arguments.length === 0) {
		return null;
	}

	_string = str;

	for (i = 1, n = arguments.length; i < n; i++) {
		_string = _string.replace(new RegExp('\\{' + (i - 1) + '\\}', 'gm'), arguments[i]);
	}

	return _string;
};

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function (from, to) {
	var rest = this.slice((to || from) + 1 || this.length);
	this.length = from < 0 ? this.length + from : from;
	return this.push.apply(this, rest);
};

//Array.indexOf for old browsers
if (!Array.indexOf) {
	Array.prototype.indexOf = function(obj){
		var i, c;
		for(i = 0, c = this.length; i<c; i++) {
			if (this[i] === obj) {
				return i;
			}
		}
		return -1;
	};
}

if (typeof Object.create !== "function") {
	Object.create = function (o) {
		var F = function () {return this;};
		F.prototype = o;
		return new F();
	};
}

// redirect, preserve referer in IE
window.location.redirect = function (url) {
	var a = document.createElement('a');
	// not IE
	if (!a.click) {
		window.location = url;
		return;
	}
	a.setAttribute('href', url);
	a.style.display = 'none';
	document.body.appendChild(a);
	a.click();
};

var ehow = {};

var lsapp = LSAPP = {};

var dmjs = window.dmjs || {};
dmjs.global = dmjs.global || {};
dmjs.onFBInit = [];
dmjs.onTWInit = [];
dmjs.onGapiInit = [];
dmjs.revenueTags = [];

/** 
* Immediate function call (namespace affordance)
* @param {!Function} fn
*/
dmjs.scope = function(fn){
	fn();
};

/** 
* Immediate function call (filter / iterator affordance)
* @param {...!Function} var_args
*/
dmjs.execute = dmjs.scope;

/**
* Partially applies this function and zero or more arguments. 
* The result is a new function with some arguments of the first
* function pre-filled.
*
* Usage:
* var g = partial(f, arg1, arg2);
* g(arg3, arg4);
*
* @param {Function} fn A function to partially apply.
* @param {...*} var_args Additional arguments that are partially
*	 applied to fn.
* @return {!Function} A partially-applied form of the function bind() was
*	 invoked as a method of.
*/
dmjs.partial = function(fn, var_args) {
	var args = Array.prototype.slice.call(arguments, 1);
	return function() {
		// Prepend the bound arguments to the current arguments.
		var newArgs = Array.prototype.slice.call(arguments);
		newArgs.unshift.apply(newArgs, args);
		return fn.apply(window, newArgs);
	};
};

/** Array related functions */
dmjs.scope(function(){
	dmjs.array = {};
	
	/**
	 * Calls a function for each element in an array. Skips holes in the array.
	 * See {@link http://tinyurl.com/developer-mozilla-org-array-foreach}
	 *
	 * @param {Array.<T>} arr Array or array like object over
	 *	 which to iterate.
	 * @param {?function(this: S, T, number, ?): ?} fn The function to call for every
	 *	 element. This function takes 3 arguments (the element, the index and the
	 *	 array). The return value is ignored.
	 * @param {S=} opt_obj The object to be used as the value of 'this' within f.
	 * @template T,S
	 */
	dmjs.array.forEach = function(arr, fn, opt_obj) {
		var l, i;
		l = arr.length;	// must be fixed during loop... see docs
		for (i = 0; i < l; i++) {
			if (arr.hasOwnProperty(i)) {
				fn.call(opt_obj, arr[i], i, arr);
			}
		}
	};
});

dmjs.updateMetaTag = function (name,content) {
	var metas = document.getElementsByTagName('meta');
	for (var i = 0; i < metas.length; i++) {
		if (metas[i].getAttribute("name") && metas[i].getAttribute("name") === name) {
			metas[i].setAttribute("content", content);
		}
	}
}

//Defines missing variables from 3rd party scripts. (IE fix).
var _JT;

dmjs.translation = {"article-rc-widget-title":"Top 5 To Try"};

dmjs.maintenance = {
	"author_profile": true,
	"comments": {
		"enabled": true,
		"facebook_comments": true
	},
	"dart": false,
	"demdex": false,
	"facebook_login": true,
	"google_ads": true,
	"hnh": true,
	"community": {
		"index": {
			"enabled": true
		},
		"discussion": {
			"enabled": true
		},
		"article": {
			"enabled": true
		}
	},
	"js_logging": true,
	"search": {
		"botcheck": false,
		"box": {
			"channel_filter": false,
			"suggest": false
		},
		"query_filter": true,
		"record_query": false,
		"record_results": false,
		"throttling": true,
		"useragent_blacklist": false,
		"related-searches": true
	},
	"show_omniture_link_set": true,
	"social_proof": true
};


dmjs.setting = {
	"i18n": {
		"lang": "en-us"
	},
	"ads": {
		"dart": {
			"siteCode": "dmd.ehow",
			"server": "http:\/\/ad.doubleclick.net\/"
		}
	},
	"beacon": {
		"server": "http:\/\/beacon.ehowdev.com\/"
	},
	"cdn": {
		"cdnImage": "http:\/\/ajc10.ehowdev.com\/"
	},
	"env": "development",
	"tablet": {
		"video": {
			"ipad": "iPad",
			"silk": "Silk",
			"android": "Android"
		}
	},
	"platform": {
		"mobile": {
			"mobileexplorer": null,
			"openwave": null,
			"opera mini": null,
			"operamini": null,
			"elaine": null,
			"palmsource": null,
			"digital paths": null,
			"avantgo": null,
			"xiino": null,
			"palmscape": null,
			"nokia": null,
			"ericsson": null,
			"blackBerry": null,
			"motorola": null,
			"netfront": null,
			"windowsce": null,
			"google-bot": null,
			"palmos": null,
			"symbian": null,
			"ipod": "iPod",
			"iphone": "iPhone",
			"android": "Android",
			"nokiae7": "NokiaE7",
			"webOS": "PalmPre",
			"windows phone": "Windows",
			"googlebot-mobile": "Googlebot-Mobile"
		},
		"tablet": {
			"ipad": "iPad",
			"silk": "Silk",
			"android": "Android"
		},
		"versionstring": {
			"ipad": "os",
			"iphone": "os",
			"ipod": "os",
			"android": "android",
			"windows": "os"
		}
	},
	"video": {
		"url": "http:\/\/once.unicornmedia.com\/now\/od\/auto\/305f3605-907b-45e6-8938-3444d51e052b\/f7529abe-1f00-4185-b1ad-33ca5daecb5e\/%s\/content.once"
	}
};


if(dmjs.maintenance.js_logging) {
  window.onerror = function(error, where, line) {
	if((where == undefined || where.indexOf('ehow') === -1) || line == undefined) return true;

	var i,
		img = new Image(),
		d = [],
		p = {
		  error: error,
		  file: where,
		  line: line,
		  useragent: navigator.userAgent
		};

	for(i in p) d.push(i + '=' + escape(p[i]));

	img.src = '/services/jslogging/log/?' + d.join('&');
  }
}

/*
	dlabs
	
	addLoadEvent.js
		Replaces userAction.js in delay loading scripts.  Executes scripts at window.load in order of priority with lowest number executed first.  Defaults to a priority of 3 if none passed.
		
	Usage:
		Enclose the function you wish to call in function(){} and add a priority (if different from 3) to call the function.
		
	Priorities:
		Priorities should be a value between 1-5 inclusive, the lowest being highest priority.  Examples of high prorities would be lazy image loading (1).  Low priorities would be intellitxt(4), addthis (5), facebooklike (5).  A value of 3 is considered average and loaded by default.
	
			
	Examples:
		addLoadEvent(function(){coolstuff();}, 3);
		addLoadEvent(function(){
			$('.featuredItems').onVisible({callback: function() {
				$('.featuredItemImage img',this).lazyImage();
			}});
		}, 1);
		
		onVisible() will be executed first before coolstuff()
		
		addLoadEvent also accepts $.getScript and callback functions -
		
		addLoadEvent(
			'script.js',
			function(){alert("script.js loaded!");},
			1
		);
		
*/
(function(){
	var queue = [];
	var loaded = false;
	dmjs.addLoadEvent = function(fn, priority) {

		if(loaded){
			fn();
			return;
		}

		if (typeof priority == "function") {
			var cb = priority;
			priority = arguments[2];
		}
		if (priority==undefined) { priority = 3; }
		queue.push({
			fn: fn,
			priority: priority,
			cb: cb
		});
	};

	dmjs.fireEvents = function() {
		loaded = true;
		dmjs.sortQueue();
		for(var i=0; i<queue.length; i++) {
			if (typeof queue[i].fn == "string") {
				$.ajax({
					url: queue[i].fn,
					dataType: 'script',
					success: queue[i].cb,
					error: function(data) {
						//console.log('error loading script', data);
						return false;
					}
				});
			} else {
				queue[i].fn();
			}
		}
	};
	dmjs.sortQueue = function() {
		queue.sort(function(a, b) {
			return a.priority - b.priority;
		});
	};

	dmjs.addEvent = function (obj, evType, fn, useCapture) {
		if (obj.addEventListener) {
			obj.addEventListener(evType, fn, useCapture);
			return true;
		} else if (obj.attachEvent) {
			var r = obj.attachEvent("on" + evType, fn);
			return r;
		}
	};

})();



/*!
 * domready (c) Dustin Diaz 2014 - License MIT
 */
try{
!function (name, definition) {
	if(dmjs.isIE8){
		dmjs[name] = dmjs.addLoadEvent;
	}
	else{
		dmjs[name] = definition()
	}
}('domready', function () {

	var fns = [], listener
	, doc = document
	, domContentLoaded = 'DOMContentLoaded'
	, loaded = /^loaded|^c/.test(doc.readyState)

	if (!loaded)
		doc.addEventListener(domContentLoaded, listener = function () {
			doc.removeEventListener(domContentLoaded, listener)
			loaded = 1
			while (listener = fns.shift()) listener()
		})

	return function (fn) {
		loaded ? fn() : fns.push(fn)
	}

});
}catch(err){
	//Fallback to addLoadEvent
	dmjs.domready = dmjs.addLoadEvent;
}

/**
 * Basic cookie helper methods.
 *
 * Example:
 * 
 *	 dmjs.cookies.createCookie('testCookie', 'somevalue', 7);
 *	 
 *	 dmjs.cookies.readCookie('testCookie');
 *	 
 *	 dmjs.eraseCookie('testCookie');
 *
 * @todo Replace with CookieMonster.
 */

dmjs.cookies = {
	
	//Caches cookie so we're not re-parsing it on each read.
	cookieCache: null,

	/**
	 * Creates a cookie and updates the cookie cache.
	 *
	 * @param {String} name Name of the cookie.
	 * @param {String} value Value of the cookie.
	 * @param {Integer} days Number of days until cookie expires.
	 * @param {String} url Base url for the cookie.
	 */

	createCookie: function(name, value, days, url) {
		var date = new Date(),
			expires = '',
			path = url || "/";

		if(days) {
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toGMTString();
		}

		document.cookie = name + "=" + value + expires + "; path=" + path;
		this.cookieCache[name.replace(' ', '')] = value;
	},

	/**
	 * Reads a cookie and builds the cache if needed.
	 *
	 * @param {String} name Name of the cookie to read.
	 * @returns Value of the cookie.
	 */

	readCookie: function(name) {
		if(!this.cookieCache) {
			this.cookieCache = {};
			var cookies = document.cookie.split(';');

			for(var i = cookies.length; i--;) {
				var cookie = cookies[i].split('=');
				this.cookieCache[cookie[0].replace(' ', '')] = cookie[1];
			}
		}
		
		return this.cookieCache[name] || null;
	},

	/**
	 * Removes a cookie.
	 *
	 * @param {String} name Name of the cookie to be removed.
	 */

	eraseCookie: function(name) {
		createCookie(name, "", -1);
	}
};

/**
 * Central platform object that gives browser, mobile, tablet, os information from
 * user agent string. Stores the values in the 'platform' cookie. 
 * 
 * 
 * @author Joel Kopelioff
 * @date Mon Mar 18 11:31:41 PDT 2013
 * @requires cookie.class.js
 */

dmjs.platform = {
	
	tablet: null, 			//Holds the tablet type, if appropriate
	mobile: null, 			//Holds the mobile type
	version: null, 			//Holds the version of either the tablet or mobile

	init: function (userAgentString){

		var platformCookie = dmjs.cookies.readCookie('platformjs');

		//Don't read the cookie if we are in dev or staging
		if ( platformCookie && dmjs.setting.env == 'production' ){

			var platJSON = JSON.parse(platformCookie);

			this.tablet  = platJSON.tablet;
			this.mobile  = platJSON.mobile;
			this.version = platJSON.version;

		} else {

			var agentStr = userAgentString.toLowerCase();

			//If it has mobile in the agent str, lets look for mobile
			if ( agentStr.indexOf( 'mobile' ) != -1 ){
				this.mobile = this._parsePlatform( agentStr, dmjs.setting.platform.mobile );
			}

			if ( !this.mobile ){
				//Parse out the tablet type
				this.tablet = this._parsePlatform( agentStr, dmjs.setting.platform.tablet );
			}

			//Parse the version 
			this.version = this._parseVersion( agentStr, (this.isTablet())? this.tablet : this.mobile );
			this.version = this.version ? parseFloat(this.version) : null;

			//Store cookie to speed up load next time
			dmjs.cookies.createCookie('platformjs', JSON.stringify(this), 365);
		}
	},

	//Check to see if its a tablet 
	isTablet: function (){
		return (this.tablet != null && this.mobile == null);
	},


	isMobile: function (){
		return (this.mobile != null);
	},

	isAndroid: function (){
		return (this.tablet == 'android' || this.mobile == 'android');
	},

	isIOS: function (){
		return  (this.isTablet() && this.tablet.match( /iphone|ipad|ipod/i ) != null) || 
				(this.isMobile() && this.mobile.match( /iphone|ipad|ipod/i ) != null);
	},

	// ---------------------- INTERNAL FUNCTIONS ------------------- //

	_parsePlatform: function ( agentStr, agentsArray ){
		var agents=[];
		for ( var userAgent in agentsArray ) {
			var agentName = agentsArray[userAgent];
			if ( agentName ){
				agents.push(agentName);
			}
		}
		var match = agentStr.match(new RegExp(agents.join("|"), "i"));
		return (match)?match[0]:null;
	},

	_parseVersion: function ( agentStr, platformName ){
		//Lookup the keyword that shows up before the version, e.g. os 6.1 
		var versionstring = (dmjs.setting.platform.versionstring[platformName])?
										dmjs.setting.platform.versionstring[platformName]:
										platformName;

		var versionMatch = agentStr.match(new RegExp(versionstring + "[\\s\)\;\/]*([\\d\._]+)[\\s\)\;]*", "i"));
		
		var version = (versionMatch && versionMatch.length > 1)?versionMatch[1]:null;

		return (version)? version.replace('_', '.') : null;
	}
};

//Let initialize with current userAgent
dmjs.platform.init(navigator.userAgent);

var urlQueryString = {};
function queryURI(uri) {
	uri = uri || window.location.search;

	var e,
		a = /\+/g,  // Regex for replacing addition symbol with a space
		r = /([^?&;=]+)=?([^?&;]*)/g,
		d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
		q = uri.substring(1);

	while (e = r.exec(q)) urlQueryString[d(e[1])] = d(e[2]);

	return urlQueryString;
}


/**
 * This is one crappy Javascript
 * @Important-Note: All the web developers, please read and remember this js file and NEVER && NEVER, write javascript like this, for instance using document.write(); Thank You!
 * @Side-Note: If by mistake you run any JS linter on this file, may GOD be with you.
 * @maintainer: J Assi (NOT ORIGINAL AUTHOR)
 * @requires: dmjs
 * @requires: $
 * @requires: $.template
 * @requires: queryURI
 * @requires: ehow.relatedAdsManager
 */

/* jshint undef: true, unused: true */
/* jshint asi:true, multistr:true, boss:true, evil:true */

var googleAds = function() {
	var self = googleAds;
	
	window.google_ad_num = 0;
  var _ads = [],
	  _ads_overridden = {},
	  _currentIndex = -1,
	  _additional_channels = {},
	  apostrophe1 = /'/ig,
	  apostrophe2 = /&#39;/ig;

	var clean = function(str) {
		return str.replace(/"/ig, "&quot;");
	}

	var extend = function(obj, defaults) {
		for (var item in defaults) {
			if (typeof obj[item] === 'undefined') obj[item] = defaults[item];
		}
		if(~~obj.google_num_radlinks < ~~defaults.google_num_radlinks) {
			obj.google_num_radlinks = defaults.google_num_radlinks;
		}
		return obj;
	}

	var getCurrentAd = function() {
		return (_currentIndex < _ads.length)?_ads[_currentIndex]:false;
	}

	var renderAd = function() {
		var currentAd = getCurrentAd();
		extend(currentAd, googleAds.defaults);
		if(_ads_overridden[currentAd.adUnitId]) {
			currentAd = _ads[_currentIndex] = extend(_ads_overridden[currentAd.adUnitId], currentAd);
		}
		if (!currentAd) return;
		if(!currentAd.enabled) {
			_currentIndex++;
			renderAd();
			return;
		}
		if (currentAd.google_num_radlinks) {
			window.google_radlink_request_done = radlinkRequestDone;
			window.google_ad_request_done = function() {};
		} else {
			window.google_radlink_request_done = function() {};
			window.google_ad_request_done = adRequestDone;
		}
		document.write('<script>');
		for (var item in currentAd) {
			if (typeof currentAd[item] !== "function" && typeof currentAd[item] !== "object") {
				if ( item == 'google_ad_channel' ) {
					var checkURIutm = queryURI();
					var utmMedium = checkURIutm['utm_medium'] || "",
						utmCookie = dmjs.cookies.readCookie('utm_medium');
					if(utmMedium == "" && utmCookie) {
						utmMedium = utmCookie;
					} else if(utmMedium != "" && utmMedium.match(/(\w{1,25})/g).length==1) {
						dmjs.cookies.createCookie('utm_medium', utmMedium, 1);
					} else {
						utmMedium = "";
					}

					var utmSource = checkURIutm['utm_source'];
					var utmRef = checkURIutm['ref'];
					if(utmSource == "ask" && utmRef && utmMedium == "") {
						var askRef = utmRef;
						if(askRef != "" && askRef.match(/(\w{1,25})/g).length==1) {
							dmjs.cookies.createCookie('utm_medium', askRef, 1);
							utmMedium += askRef;
						}
					}

					currentAd[item] += (utmMedium != "") ? "," + utmMedium : "";

					if(_additional_channels[currentAd.adUnitId]) {
						for(var i = _additional_channels[currentAd.adUnitId].length; i--;) {
							currentAd[item] += (_additional_channels[currentAd.adUnitId][i] != "") ? "," + _additional_channels[currentAd.adUnitId][i] : "";
						}
					}
				}
				//prevent xss double quotes will be encoded by encodeURIComponent and thus safe
				if(item === 'google_kw') {
					document.write("var " + item + " = decodeURIComponent(\"" + encodeURIComponent(currentAd[item]) +"\");");
				} else {
					document.write("var " + item + " = '" + currentAd[item]+"';");
				}
			}
		}
		document.write("google_skip = google_ad_num;");
		document.write('</script>');
		document.write('<script src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>'); 
	}

	var radlinkRequestDone = function(radlinks) {
		if (radlinks.length != 0) { 
			var currentAd = getCurrentAd();
			if (!currentAd) return;

	  //debugger;
	  var tmp = (currentAd.templates && currentAd.templates.relatedAds)?currentAd.templates.relatedAds:googleAds.templates.relatedAds;
			if (googleAds.preRender) 
				tmp = googleAds.preRender(currentAd);


			var radlinkTokens = radlinks[0].radlink_token;
			for(i=1; i<radlinks.length; i++) {
				radlinkTokens += "|"+radlinks[i].radlink_token;
			}

			var radlinkTerms = radlinks[0].term;
			for(i=1; i<radlinks.length; i++) {
				radlinkTerms += "|"+radlinks[i].term;
			}

			tmp = tmp || googleAds.templates.relatedAds;

			dmjs.domready(function(){
				//hack until all pages start using relatedAdsManager
				if(!ehow.relatedAdsManager) {
					$('#'+currentAd.adUnitId).template(tmp, { ads: radlinks, currentAd: currentAd, terms: radlinkTerms, tokens: radlinkTokens });
				} else {
					//$('body').trigger('relatedAdsManager.ads', [{ ads: radlinks, currentAd: currentAd, terms: radlinkTerms, tokens: radlinkTokens }]);
					ehow.relatedAdsManager.load({ ads: radlinks, currentAd: currentAd, terms: radlinkTerms, tokens: radlinkTokens });
				}
			});
		}
		_currentIndex++;
		renderAd();
	}

	var adRequestDone = function(ads) {
		if (ads.length != 0) {
			var currentAd = getCurrentAd();
			if (!currentAd) return;

			var type = ads[0].type;
			var tmp = (currentAd.templates && currentAd.templates[type])?currentAd.templates[type]:googleAds.templates[type];
			if (googleAds.preRender) 
				tmp = googleAds.preRender(currentAd);

			dmjs.domready(function(){
				$('#'+currentAd.adUnitId).template(tmp, { ads: ads, currentAd: currentAd, clean: clean});
			});
			window.google_ad_num += ads.length;
		}
		_currentIndex++;	
		renderAd();
	}

	var sortAds = function() {
		_ads.sort(function(a, b) {
			return a.priority - b.priority;
		})
	}

	return {
		getAds: function() {
			return _ads;
		},
		overrideAd: function(id, obj) {
			if(_ads_overridden[id]) {
				_ads_overridden[id] = extend(obj, _ads_overridden[id]);
			} else {
				_ads_overridden[id] = obj;
			}
			
		},
		addChannel: function(id, channel) {
			if(!_additional_channels[id]) _additional_channels[id] = [];
			_additional_channels[id].push(channel);
		},
		addAdUnit: function(obj) {
			/*obj = extend(obj, this.defaults);*/
			_ads.push(obj);
		},
		render: function() {
			sortAds();
			_currentIndex = 0;
			renderAd();
		},
		addAdUnits: function(adUnits) {
			for (var i = 0; i < adUnits.length; i++) {
				this.addAdUnit(adUnits[i]);
			}
			this.render();
		},
		defaults: {
			enabled: true,
			google_ad_type: 'text_image_flash',
			google_ad_output: 'js',
			google_safe: 'high',
			google_abtest: 'false',
			google_adtest: 'off',
			google_ad_section: 'default',
			google_encoding: 'utf8',
			google_language: 'en'
		},
		templates: {
			text: '<div class="GoogleTextAd">\
					<a class="header" href="{!= google_info.feedback_url !}">Ads by Google</a>\
					<ul>\
					{! for (var i = 0; i < ads.length; i++) { !}\
						<li class="Ad">\
							<a rel="nofollow" target="_blank" href="{!= ads[i].url !}" title="go to {!= clean(ads[i].visible_url) !}" class="title">\
								<span>{!= ads[i].line1 !}</span>\
							</a>\
							<a rel="nofollow" target="_blank" href="{!= ads[i].url !}" title="go to {!= clean(ads[i].visible_url) !}" class="baseurl url">\
								{!= ads[i].visible_url !}\
							</a>\
							<p class="copy">{!= ads[i].line2 !} {!= ads[i].line3 !}</p>\
						</li>\
					{! } !}\
					</ul>\
				</div>',
			image: '<div class="GoogleImageAd"> \
						<a class="header" href="{!= google_info.feedback_url !}">Ads by Google</a> \
						<a href="{!= ads[0].url !}" title="go to {!= clean(ads[0].visible_url) !}" target="_blank" class="Ad" >\
							<img src="{!= ads[0].image_url !}" width="{!= ads[0].image_width !}" height="{!= ads[0].image_height !}" border="0" alt="" />\
						</a> \
					</div>',
			flash: '<div class="GoogleFlashAd">\
						<a class="header" href="{!= google_info.feedback_url !}">Ads by Google</a> \
						<div class="Ad">\
							<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="{!= ads[0].image_width !}" height="{!= ads[0].image_height !}"><param name="movie" value="{!= ads[0].image_url !}"><param name="quality" value="high"><param name="AllowScriptAccess" value="never"><embed src="{!= ads[0].image_url !}" width="{!= ads[0].image_width !}" height="{!= ads[0].image_height !}" type="application/x-shockwave-flash" AllowScriptAccess="never" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed></object>\
						</div>\
					</div>',
			relatedAds: '<ul class="RelatedAds"> \
							{! for (var i = 0; i < ads.length; i++) { !}\
								<li> \
									<a href="/ehow_radlinks_ads.html?\
									term={!= ads[i].url_escaped_term !}\
									&channel={!= currentAd.google_ad_channel !}\
									&google_rt={!= ads[i].radlink_token !}\
									&google_kw_type=radlinks\
									&google_rts={!= tokens !}\
									&radkws={!= encodeURIComponent(terms) !}\
									&google_page_url={!= encodeURIComponent(currentAd.google_page_url) !}\
									{! if (currentAd.metaData) { \
										for (var meta in currentAd.metaData) { !}\
											&{!= meta !}={!= encodeURIComponent(currentAd.metaData[meta]).replace("%20", "+") !}\
										{! } \
									} !}" \
									class="ad">\
										<span>{!= ads[i].term !}</span></a></li>\
							{! }!} \
						</ul>'
		}
	}
}();


/* Tests */
// googleAds.overrideAd('GoogleAdsense336x280', {
// 	google_ad_type: 'image'
// });

// googleAds.overrideAd('GoogleAdsense160x600', {
// 	google_ad_type: 'text'
// });

var DartUtils = (function() {
	return {
		takeover : function(image, clickthru, options) {
			dmjs.domready(function(){
			dmjs.hasTakeoverSkin = true;
			var eHow_width = 1020;
			var window_width = $(window).width();
			var window_height = $(window).height();
			var sides_width = ((window_width - eHow_width)/2) - 10; /* Minus 10 for FF 3.6 fix. */
			var header_height = options.headerHeight || 130;

			$(window).resize(function(e) {
				window_width = $(window).width();
				sides_width = ((window_width - eHow_width)/2) - 10;
			});

			if (!options.noClick) {
				$(document).mousemove(function(e){
					if(
					(
					(e.clientX < sides_width + 22) && (e.clientX > (sides_width-208))
					||
					(e.clientX > (eHow_width+sides_width) - 6) && (e.clientX < (eHow_width+(sides_width*2)) && (e.clientX < (eHow_width+sides_width+213)))
					)
					&&
					(
					(e.clientY > header_height)
					)
					) {
						$("html").css("cursor", "pointer");
					} else {
						$("html").css("cursor", "default");
					}
				});

				$(document).unbind("click");
				$(document).bind("click", function(e){
					if (e.clientX == 0 && e.clientY == 0)
						return;
					if(
					(e.clientX < sides_width + 22) && (e.clientX > (sides_width-208))
					||
					(e.clientX > (eHow_width+sides_width) - 6) && (e.clientX < (eHow_width+(sides_width*2)) && (e.clientX < (eHow_width+sides_width+213)))
					) {
						if (options.sameWindow)
							window.location = clickthru;
						else
							window.open(clickthru);
					}
				});
			};

			if(image) {
				$('html').css('background-image', 'url('+image+')')
				.css('background-position', 'center 131px')
				.css('background-repeat', 'no-repeat');
			}

			if (options.takeoverBanner) {
				var href = $("<a>", { css: {
					cursor: 'pointer',
					display: 'block',
					height: '175px',
					width: '100%'
				}}).attr("href", clickthru);
				$("#PromoAd990x90").after(href);
			}
			if (options.fixedBg) {
				$('html').css('background-attachment', 'fixed').css('background-position', 'center 0');
			}
			if (options.bgcolor) {
				$('html').css('background-color', options.bgcolor);
			}
			});
		},
		AdUnit300x600: function() {
			dmjs.domready(function() {
				$("#Dart300x250").attr("data-dartAdSize", "[300, 600]").attr("data-dartAdParams", "[{ sz: '300x600' }]").css("height", "600px");
			});
		},
		HomeDepotTYNBranding: function(image, clickthru) { // CUSTOM: Just for Home Depot, for now
			dmjs.domready(function(){
				$tyn = $("article .thingsYouNeed");
				$tyn.find(".header").css("background","#f3842a");
				$tyn.find(".container").css("background","none");
				$tyn.css({ position:"relative", backgroundImage:"none", backgroundColor:"#fff", border:"1px solid #ccc", paddingBottom:"30px", paddingLeft:"0", marginBottom:"20px" });
				var $logo = $("<a href='"+clickthru+"'><img src='"+image+"' /></a>").insertAfter($tyn.find("ul"));
				$logo.css({ display:"block", marginTop:"5px" }).find("img").css("width","145px");
				var $tagline = $("<a href='"+clickthru+"'>Get what you need for every<br />project at HomeDepot.com</a>").insertAfter($logo);
				$tagline.css({ display:"block", position:"absolute", height:"30px", width:"175px", padding:"5px", background:"#f3842a", color:"#fff", textAlign:"center", left:"0px", bottom:"0px" });
				var $shadow = $("<div class='dropShadow'></div>").insertAfter($tagline);
				$shadow.css({ position:"absolute", width:"185px", height:"20px", background:"url(http://v5-static.ehowcdn.com/ui/images/pages/article/things-needed-dropshadow.png) no-repeat -7px 100% #fff", left:"0px", bottom:"-20px" });
				$tyn.find("li").css("borderColor","#ccc");

				$('.ContentCuration', $tyn).remove();
			});
		},
		TYNBranding: function(clickThru, options) {

			/*==== DEMO OF FUNCTION CALL USED FOR DART: ====//
			 DartUtils.TYNBranding("http://www.ehow.com", {
			 image:"http://www.site.com/image.gif",
			 tagline:"The text for the tagline goes here.",
			 bgColor:"#ffffff",
			 headerColor:"#000000",
			 lineColor:"#cccccc"
			 });
			 Just remove any items from the options object that aren't needed.
			 //==== END DEMO OF FUNCTION CALL FOR DART ====*/
			dmjs.domready(function(){
				$tyn = $("article .thingsYouNeed");
				$tyn.addClass('branded');
				if (options.image) {
					var $logo = $("<a target='_blank' style='text-align: center;' href='"+clickThru+"'><img src='"+options.image+"' /></a>").insertAfter($tyn.find(".container"));
					$tyn.css('backgroundColor', '#f4f7f6'); /* added for new article page test */
					$tyn.find(".container").css("paddingBottom", "5px");
					$logo.css({ display:"block" }).find("img").css("width","185px");
				}
				if (options.headerColor)
					$tyn.find(".header").css({
						"background": options.headerColor,
						'color': '#fff', /* added for article page test */
						'padding': '5px 0'
					});
				if (options.bgColor)
					$tyn.find(".container").css("backgroundColor", options.bgColor);
				if (options.lineColor)
					$tyn.find("span.title").css("borderBottomColor",options.lineColor);
				if (options.tagline) {
					var $tagline = $("<a target='_blank' href='"+clickThru+"'>"+options.tagline+"</a>").insertAfter($tyn.find("ul"));
					$tagline.css({ display:"block", fontSize:"11px", color:"#999", textAlign:"center", marginTop:"5px" });
				}

				$('.ContentCuration', $tyn).remove();
			});
		},
		MilfCompanion: function(){
			dartAds.renderAdDynamic('.adx238',[{ sz: '238x24' }], 238, 24);
		}
	}
})();

/**
 * Basic cookie helper methods.
 *
 * Example:
 * 
 *	 dmjs.cookies.createCookie('testCookie', 'somevalue', 7);
 *	 
 *	 dmjs.cookies.readCookie('testCookie');
 *	 
 *	 dmjs.eraseCookie('testCookie');
 *
 * @todo Replace with CookieMonster.
 */

dmjs.cookies = {
	
	//Caches cookie so we're not re-parsing it on each read.
	cookieCache: null,

	/**
	 * Creates a cookie and updates the cookie cache.
	 *
	 * @param {String} name Name of the cookie.
	 * @param {String} value Value of the cookie.
	 * @param {Integer} days Number of days until cookie expires.
	 * @param {String} url Base url for the cookie.
	 */

	createCookie: function(name, value, days, url) {
		var date = new Date(),
			expires = '',
			path = url || "/";

		if(days) {
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toGMTString();
		}

		document.cookie = name + "=" + value + expires + "; path=" + path;
		this.cookieCache[name.replace(' ', '')] = value;
	},

	/**
	 * Reads a cookie and builds the cache if needed.
	 *
	 * @param {String} name Name of the cookie to read.
	 * @returns Value of the cookie.
	 */

	readCookie: function(name) {
		if(!this.cookieCache) {
			this.cookieCache = {};
			var cookies = document.cookie.split(';');

			for(var i = cookies.length; i--;) {
				var cookie = cookies[i].split('=');
				this.cookieCache[cookie[0].replace(' ', '')] = cookie[1];
			}
		}
		
		return this.cookieCache[name] || null;
	},

	/**
	 * Removes a cookie.
	 *
	 * @param {String} name Name of the cookie to be removed.
	 */

	eraseCookie: function(name) {
		createCookie(name, "", -1);
	}
};
/**
 * Google Analytics tracking class.
 * Please do not alter without consulting UI Team.
 */

dmjs.GA = {
	/**
	 * time in ms that should be waited to allow page exit events to track before sending
	 * the client to the next page
	 */
	track_delay : 150,
	scope : {
		VISITOR : 1, // max of 5 distinct values allowed, new values are in effect for current and future sessions
		SESSION : 2, //
		PAGE : 3 // no absolute limit, up to 5 per pageview track event
	},
	// data is an object type meant for segmenting GA data
	get_segment : function (name) {
		var segments = {
			Env : {index:5, scope:this.scope.SESSION}, // pool-test#~active-test~...
			Page : {index:4, scope:this.scope.PAGE}, // channel~page-type~...
			Module : {index:3, scope:this.scope.PAGE} // referrer module
			// index : 3 open for anything else
			// index : 2 open for anything else
			// index : 1 open for anything else
		};
		return segments[name];
	},

	/**
	 * traffic segmentation utility
	 *
	 * [!] NOTE: The total combined length of any custom variable name and
	 * value may not exceed 64 bytes.
	 *
	 * try to avoid !, *, ( and ) in variable names/values. ~ and . are ok
	 *
	 * @param name
	 * @param value
	 * @param index
	 * @param scope
	 */
	segment : function (name, value, index, scope) {
		var segment = this.get_segment(name);
		if (segment) {
			index = segment.index;
			scope = segment.scope;
		}
		index = index || 1;
		scope = scope || GATrackerClass.scope.PAGE;

		// log Env to custom var as well for profile filtering
		if (name == 'Env') {
			_gaq.push(['_setVar', value]);
		}

		_gaq.push(['_setCustomVar', index, name, value, scope]);
	}
};


var _gaq = _gaq || [];
_gaq.push(['_setAccount', dmjs.global.gaq.accountId]);

dmjs.GA.segment('Env', dmjs.global.gaq.env);
dmjs.GA.segment('Page', dmjs.global.gaq.page);

(function () {
	if(dmjs.global.gaq.customVars){
		//Custom vars
		var i = 0, customVars = dmjs.global.gaq.customVars, len = dmjs.global.gaq.customVars.length;
		for (; i < len; i++) {
			_gaq.push(['_setCustomVar', customVars[i].index, customVars[i].name, customVars[i].value, customVars[i].scope]);
		}
	}
})();

_gaq.push(['_trackPageview']);
_gaq.push(['_trackPageLoadTime']);

/*
 *  ga.js (Older way of loading async google analytics)
 * */
(function () {
	var ga = document.createElement('script');
	ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
})();

/*
 *  analytics.js: New way of loading async google analytics
 * */
(function (i, s, o, g, r, a, m) {
	i['GoogleAnalyticsObject'] = r;
	i[r] = i[r] || function () {
		(i[r].q = i[r].q || []).push(arguments)
	}, i[r].l = 1 * new Date();
	a = s.createElement(o), m = s.getElementsByTagName(o)[0];
	a.async = 1;
	a.src = g;
	m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', dmjs.global.gaq.accountId, 'auto');
ga('send', 'pageview');

if (dmjs.global.pool !== 'default') {
	// tracking for search Pogo rate
	var search_page_regex = /^[^?]*\/search.html(\?.*)?/i;
	if (dmjs.cookies.readCookie('pogo-q') && document.referrer && search_page_regex.test(document.referrer) && !search_page_regex.test(window.location.href)) {
		var count = parseInt(dmjs.cookies.readCookie('pogo-p')) + 1;
		dmjs.cookies.createCookie('pogo-p', count, false, '/');
		_gaq.push(['_trackEvent', 'SearchPogo', 'ResultView', count.toString(), count * 2 - 1, false]);
	}
}
/**
 * @author Aaren Cordova (aaren.cordova@demandmedia.com)
 * @fileoverview Simplifies / abstracts tracking on anchor tags
 * ie.
 *	<a
 *		href="http://some-url.com"
 *		data-analytics-hitType="event" // [default=event]
 *		data-analytics-eventCategory="Blog" // Required
 *		data-analytics-eventAction="FooterMoreClick" // [default=click]
 *		data-analytics-eventLabel="How to Connect with Your Older Kids Through Books" // Optional
 *		data-analytics-eventValue="" // Optional
 *	>
 *		How to Connect with Your Older Kids Through Books
 *	</a>
*/
(function(){
	var numPixelsExpectedToFire_, numPixelsFired_;

	function sendAnalytics_gaq_(data){
		_gaq.push(['_set','hitCallback', data.hitCallback]);

		_gaq.push([
			'_trackEvent',
			data.eventCategory,
			data.eventAction,
			data.eventLabel,
			data.eventValue,
			data.noninteraction
		]);
	}

	function sendAnalytics_ga_(data){
		ga('set', 'hitCallback', data.hitCallback);

		ga('send', {
			'hitType': data.hitType,
			'eventCategory': data.eventCategory,
			'eventAction': data.eventAction,
			'eventLabel': data.eventLabel,
			'eventValue': data.eventValue,
			'noninteraction': data.noninteraction
		});
	}

	function sendAnalyticsToTargetAnalyticsObjects_(analyticsTargets, data){
		numPixelsFired_ = 0;
		var analyticsFunctions = [];

		if(analyticsTargets.indexOf('ga') !== -1 && ga){
			analyticsFunctions.push(dmjs.partial(sendAnalytics_ga_, data));
		}

		if(analyticsTargets.indexOf('_gaq') !== -1 && _gaq){
			analyticsFunctions.push(dmjs.partial(sendAnalytics_gaq_, data));
		}

		numPixelsExpectedToFire_ = analyticsFunctions.length;
		dmjs.array.forEach(analyticsFunctions, dmjs.execute);
	}

	function navigateToAnchorHref_(anchor){
		var $a, href;

		$a = jQuery(anchor);
		href = $a.attr('href') || $a.attr('data-href');

		if(href){
			document.location = href;
		}
	}

	function decipherAnalyticsTargets_(str){
		str = str.replace(/\s*/g, '');
		str = str.toLowerCase();
		return str.split(',');
	}

	function onAnalyticsHitCallback_(event){
		++numPixelsFired_;

		if(numPixelsFired_ >= numPixelsExpectedToFire_){
			navigateToAnchorHref_(event.currentTarget);
		}
	}

	// track on click and prevent default
	function onAnalyticsAnchorClick_(event){
		var $a, element, analyticsTargets;

		event.preventDefault();
		event.stopPropagation();

		element = event.currentTarget;
		$a = jQuery(element);

		analyticsTargets = decipherAnalyticsTargets_(
			$a.attr('data-analytics-object') || 'ga,_gaq'
		);

		sendAnalyticsToTargetAnalyticsObjects_(
			analyticsTargets,
			{
				'hitType': $a.attr('data-analytics-hitType') || 'event',
				'eventCategory': $a.attr('data-analytics-eventCategory'),
				'eventAction': $a.attr('data-analytics-eventAction') || 'click',
				'eventLabel': $a.attr('data-analytics-eventLabel') || undefined,
				'eventValue': $a.attr('data-analytics-eventValue') || undefined,
				'noninteraction': false,

				'hitCallback': dmjs.partial(onAnalyticsHitCallback_, event)
			}
		);

		return false;
	}

	function addListenerToAnalyticsToAnchors_(){
		jQuery(document).on(
			'click',
			'a[data-analytics-eventCategory]',
			onAnalyticsAnchorClick_
		);
	}

	dmjs.domready(function(){
		if(jQuery){
			addListenerToAnalyticsToAnchors_();
		}
	});
}());

/*! jQuery v1.7.1 jquery.com | jquery.org/license */
if(!dmjs.isIE8){
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
	f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
	{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
}

(function($){
  var templateCache = {};
  $.fn.template = function tmpl(template, data){
	var fn = !/\W/.test(template) ?
	  templateCache[template] = templateCache[template] ||
		tmpl(document.getElementById(template).innerHTML) :
	  new Function("obj",
		"var p=[],print=function(){p.push.apply(p,arguments);};" +
		"with(obj){p.push('" +
		template
		  .replace(/[\r\t\n]/g, "")
		  .split("{!").join("\t")
		  .replace(/((^|!})[^\t]*)'/g, "$1\r")
		  .replace(/\t=(.*?)!}/g, "',$1,'")
		  .split("\t").join("');")
		  .split("!}").join("p.push('")
		  .split("\r").join("\\'")
	  + "');}return p.join('');");
	return data ? this.html(fn( data )) : fn;
  };
})(jQuery);

dmjs.addLoadEvent(function(){
	var e = document,
	b,a = (e.location.protocol=="https:"?"https":"http"),
	c=(a=="https"?"https://info.evidon.com/c/betrad/pub/":"http://cdn.betrad.com/pub/");
	e.getElementById("_bapw-icon").src=c+"icon1.png";

	$(".ad-choice").click(function(){
		var f=this;
		function d(i,l){
			var j=e.getElementsByTagName("head")[0]||e.documentElement,
			h=false,
			g=e.createElement("script");

			function k(){
				g.onload=g.onreadystatechange=null;
				j.removeChild(g);
				l()
			}
			g.src=i;
			g.onreadystatechange=function(){
				if(!h&&(this.readyState=="loaded"||this.readyState=="complete")){
					h=true;k()}
			};
			g.onload=k;
			j.insertBefore(g,j.firstChild)
		}
		d(a+"://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js",function(){
			d(c+"pub1.js",function(){
				BAPW.i(f,
				{pid:46,
					ocid:374
				},false)
			})
		});

		return false;
	});
	b=new Image();
	b.src=a+"://l.betrad.com/pub/p.gif?pid=46&ocid=374&ii=1&r="+Math.random()
}, 20);if (dmjs.revenueTags.length != 0) {
	$("<meta/>").attr("scheme", "DMINSTR2")
	.attr("name", "ltvtag")
	.attr("content", encodeURIComponent(dmjs.revenueTags.join("|")))
	.appendTo($("head"));
};(function() {
	var ua = navigator.userAgent.toLowerCase();
	var dmTrackUrl = dmjs.global.dm_tracker.domain;
	var jsUrl = "vs.js";
	if (ua.indexOf('safari') != -1) {
		if (ua.indexOf('chrome')  > -1) {
			// Not on Safari
		} else {
			dmTrackUrl = dmjs.global.dm_tracker.url;
			dmjs.urls.dmtracker = dmjs.global.dm_tracker.url;
			jsUrl = dmjs.global.dm_tracker.bit+ ".js";
		}
	}
	var dmJSUrl = "http://"+dmTrackUrl+"/tags/"+jsUrl;

	var dmTrack = document.createElement('script');
	dmTrack.async = true;
	dmTrack.src = dmJSUrl;
	var s = document.getElementById('dmOmni'); s.parentNode.insertBefore(dmTrack, s);
})();var _comscore = _comscore || [];
_comscore.push(dmjs.global.comscore);
(function() {
	var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
	s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
	el.parentNode.insertBefore(s, el);
})();

(function (scope, $) {
	scope = scope || this;

	/**
	 * DOM Module
	 * @constructor
	 * @param {string}  guid A unique framework guid
	 * @requires $
	 */
	var Dom = function () {
		var exports = {};

		/**
		 * @public
		 * @param {src} ScriptURL url
		 * @param {jQuery Object} $selector
		 * @param {string} [position=append] how to load this script w.r.t the $selector. Possible values are: append,prepend,before,after
		 */
		exports.loadScript = function (url, $selector) {
			if (!url || ($selector.length === 0)) {
				return false;
			}

			var elem = document.createElement('SCRIPT');
			elem.setAttribute('src', url);
			elem.setAttribute('type', 'text/javascript');
			elem.setAttribute('data-id','dynamicScript');
			$selector[0].appendChild(elem);
		};

		exports.loadCss = function () {
		};

		return exports;
	};

	scope.dom = Dom();

})(dmjs, jQuery);

/*!
  * jquery.cropd.js - A jQuery plugin that will center and crop images inside a container 
  * v0.0.1
  * https://github.com/jgallen23/cropd
  * copyright JGA 2012
  * MIT License
  */

!function($) {

  $.fn.cropd = function(options) {

	options = $.extend({}, $.fn.cropd.defaults, options);

	var centerImage = function(container, img) {
	  var w = img.width();
	  var h = img.height();

	  var offsetX = 0, 
		  offsetY = 0, 
		  newWidth = options.maxWidth,
		  newHeight = options.maxHeight;

	  if (options.maxWidth > w) {
		newWidth = w;
	  } else {
		offsetX = (options.maxWidth - w) / 2;
	  }

	  if (options.maxHeight > h) {
		newHeight = h;
	  } else {
		offsetY = (options.maxHeight - h) / 2;
	  }

	  img.css({
		position: 'relative',
		left: offsetX,
		top: offsetY
	  });

	  container.css({
		width: newWidth,
		height: newHeight,
		visibility: 'visible'
	  });
	};

	return this.each(function() {
	  var el = $(this);

	  el.css({
		overflow: 'hidden',
		width: options.maxWidth,
		height: options.maxHeight,
		visibility: 'hidden'
	  });
	  var img = $('img', el);
	  img.bind('load', function() {
		 centerImage(el, img);
	  });

	   //Try centering image when called
	  centerImage(el, img);
	});
  };

  $.fn.cropd.defaults = {
  };

}(window.jQuery || window.Zepto);

if (!dmjs.cookies.readCookie('oml')) {
  dmjs.cookies.createCookie("oml", (document.referrer)?document.referrer.split("/")[2]:"direct");
}

var dartAds = function (win, doc) {

	var perfTest = (win.location.search.indexOf("perftest=true") != -1),
		_page = false,
		_params = [],
		_tile = 1,
		_ord,
		_deferredAds = {},
		_siteCodeOR = "";

	win.dartAdComplete = function (id, w, h) {
		var iframe = doc.getElementById(id).firstChild;
			iframe.width = w + "px";
			iframe.height = h + "px";
	};

	var generateUrl = function (params, iframe) {
		var url = [],
			revTags = [],
			dartParam = [],
			pi = 0,
			param,
			paramsLength = params.length,
			uuid,
			dx,
			dxFixed,
			yieldBotParams = 'n';

		if (!_public.defaults.server || !_public.defaults.siteCode) {
			return "";
		}

		url.push(_public.defaults.server);
		url.push((iframe) ? "adi" : "adj");
		url.push("/");

		if (_siteCodeOR === "") {
			url.push(_public.defaults.siteCode);
		} else {
			url.push(_siteCodeOR);
		}

		url.push("/" + _page + ";");

		for (; pi < paramsLength; pi++) {
			var item = params[pi];
			for (param in item) {
				if (typeof item[param] === "object") {
					for (var i = 0; i < item[param].length; i++) {
						url.push(param + "=" + item[param][i] + ";");
						revTags.push(param + "=" + item[param][i] + "_");
						dartParam[param] = item[param][i];
					}
				} else {
					if (perfTest && param == "cat") {
						item[param] = "perftest";
					}
					else if (perfTest && param == "scat") {
						item[param] = "perftest";
					}
					else if (perfTest && param == "sscat") {
						item[param] = "perftest";
					}
					url.push(param + "=" + item[param] + ";");
					revTags.push(param + "=" + item[param]);
					dartParam[param] = item[param];
				}
			}
		}

		dmjs.revenueTags.push("Dart;" + revTags.join("_"));

		if (_public.defaults.staging) {
			url.push("envr=stage;");
		}

		if (typeof win.dexQS !== "undefined" && win.dexQS.length > 0) {
			url.push(win.dexQS+";");
		}

		var yieldSzs = ["300x250","300x250,300x600","990x90,728x90"];
		if ((yieldSzs.indexOf(dartParam.sz) !== -1) && _siteCodeOR !== "dmd.rem.ehow") {
	  		if (dartParam['sz'] === "990x90,728x90") {
				try {
		  			yieldBotParams = yieldbot.params('728x90-banner'); 
				} catch (e) { }
	  		} else {
				try {   
		  			yieldBotParams = yieldbot.params('300x250-banner');
				} catch (e) { } 
	  		}
	  		if (yieldBotParams !== 'n') {
	  			url.push("ybot_ad=" + yieldBotParams + ";");
	  		}
		}

		url.push("dc_ref=" +_dc_ref + ";");
		url.push("tile=" + _tile + ";");
		if (typeof crtg_content !== "undefined" && crtg_content.length > 0) {
			url.push(crtg_content+";");
		}
		url.push("ord="+ _ord + "?");

		_tile++;
		return url.join("");
	};

	var _public = {
		getAdUrl: function (params, iframe) {

			var p = [], i, j;

			// url params
			for (i=0;i<_params.length;i++) {
				p.push(_params[i]);
			}
			// ad sizes
			for(j=0;j<params.length;j++) {
				p.push(params[j]);
			}

			var url = generateUrl(p, (iframe));
			return url;
		},
		getAd: function (params, width, height) {
			var iframe = (width && height);

			if ( dmjs.platform.isTablet() ) {
				iframe = false;
			}

			var url = this.getAdUrl(params, iframe);
			if (!url) {
				return false;
			}

			var adCall;

			if (!iframe) {
				adCall = '<center><scr'+'ipt type="text/javascript" src="'+url+'"><\/script></center>';
			} else {
				adCall = '<iframe src="'+url+'" width="'+width+'" height="'+height+'" marginwidth="0" marginheight="0" frameborder="0" scrolling="no"></iframe>';
			}

			return adCall;
		},
		setParams: function (page, params) {
			_page = page;
			_params = params;
			_ord = Math.floor(Math.random()*10000000000000);
			_dc_ref = window.location.href.replace("#", "-");
		},
		renderAd: function (params, width, height) {
			if (!_page || !_params) {
				return;
			}

			var ad = this.getAd(params, width, height);

			doc.write(ad);
		},
		renderiFrameAd: function (params, width, height, code) {
			// code is being used to pass a new siteCode
			var newSiteCode = code || "";

			_siteCodeOR = newSiteCode;

			if(dmjs.global.opDART160Test && params[0]["sz"] === "160x600") {
				params[0].test = "onesixty";
			}

			if ( dmjs.platform.isTablet() ) {
				this.renderAd(params, width, height);
				return;
			}

			var id = "DartAd_"+Math.round(Math.random()*10000000) ;
			var url = this.getAdUrl(params);
			if (!url) {
				return;
			}

			var i = doc.createElement("iframe");
			var src = "/media/ad.html?divId="+id+"&w="+width+"&ad="+escape(url);

			i.scrolling = "no";
			i.frameBorder = "no";
			i.marginHeight = "0";
			i.marginWidth = "0";
			i.height = height || "0px";
			i.width = "0px";
			//i.src = src;
			doc.write("<div><center id='"+id+"'></center></div>");
			doc.getElementById(id).appendChild(i);
			//for FF 3.5
			i.contentWindow.location.href = src;
		},
		renderAdDynamic: function (container, params, width, height) {
			var id = "DartAd_" + Math.round(Math.random()*10000000);
			var url = this.getAdUrl(params);
			if (!url)  {
				return;
			}

			var i = doc.createElement("iframe");
			var src = "/media/ad.html?divId="+id+"&w="+width+"&ad="+escape(url);
			i.scrolling = "no";
			i.frameBorder = "no";
			i.marginHeight = "0";
			i.marginWidth = "0";
			i.height = height || "0px";
			i.width = "0px";

			var center = $("<div><center id='"+id+"'></center></div>");
			center.find("#"+id).append(i);
			$(container).append(center);
			//for FF 3.5
			i.contentWindow.location.href = src;
		},
		renderAdElements: function (nodes) {
			var i = 0,
				ii = nodes.length;

			if (!_page || !_params) {
				return;
			}

			for (; i < ii; i++) {
				var node = nodes[i];
				var size = eval(node.getAttribute("data-dartAdSize"));
				var params = eval(node.getAttribute("data-dartAdParams"));
				if (node.getAttribute("data-dartCompanion") == "1") {
					var adUrl = this.getAdUrl(params, false);
					win.adaptvCompanionAdTag = adUrl;
				} else {
					var ad = this.getAd(params, size[0], size[1]);
					if (ad) {
						node.innerHTML = ad;
					}
				}
			}
		},
		defaults: {
			server: null,
			siteCode: null,
			staging: false
		}
	};
	return _public;
}(window, document);

var OmnitureLinkSet = function($element, linkSetId, location, rcp, rcp_specifics) {
	var LT = new LinkTracking($element, rcp);
	if (rcp_specifics) { LT.setRCPSpecifics(rcp_specifics); };
	return LT.linksetId(linkSetId).location(location).run();
};

var linkTracking = function($el) {
	return new LinkTracking($el);
};

var LinkTracking = function($element, rcp) {
	this.el = $element;
	this.props = {
		encode: true,
		debug: false
	};

	this.rcp_specifics = {
		algo_id: null,
		request_id: null,
		weight_config_name: null,
		widget_id: null,
		category: null
	};

	this.rcp_mappings = {
		algo_id: 'wa_user1',
		request_id: 'wa_un',
		weight_config_name: 'wa_user2',
		widget_id: 'wa_wsid',
		category: 'category'
	};

	this.uniqueLinks = {}
	if(rcp) this.props.objectType = 'PLATFORM';

	this.linkTags = $("a", this.el);

	this.baseUrl = 'http://'+_omnitureLinkSetDomain+'/images/zig.gif?';
	this._getUrls();
};

LinkTracking.prototype.debug = function(debug) {
	this.props.debug = debug;
	return this;
};
LinkTracking.prototype.linksetId = function(linksetId) {
	this.props.linksetId = linksetId;
	return this;
};
LinkTracking.prototype.location = function(location) {
	this.props.location = location;
	return this;
};
LinkTracking.prototype.type = function(type) {
	this.props.objectType = type;
	return this;
};

LinkTracking.prototype.setRCPSpecifics = function (specifics) {
	for (key in specifics) {
		this.rcp_specifics[key] = specifics[key];
	};

	return this;
};

LinkTracking.prototype.extendRCPData = function (data) {
	for (key in this.rcp_specifics) {
		if (this.rcp_specifics[key] !== null && this.rcp_specifics[key] !== '') {
			data[this.rcp_mappings[key]] = this.rcp_specifics[key];
		};
	};

	return data;
};

LinkTracking.prototype._serialize = function(obj) {
	var qs = [];
	for (var key in obj) {
		qs.push(key+"="+ obj[key]);
	}
	return qs.join('&');
};

LinkTracking.prototype._getUrls = function() {
	this.urlMap = {};
	this.urls = [];
	var href;
	var index = 1;
	for (var i = 0; i < this.linkTags.length; i++) {
		href = this.linkTags[i].href;
		if (href) {
			if (this.props.encode) {
				href = encodeURIComponent(href);
			}
			if(typeof this.urlMap[href] === 'undefined') {
				this.urlMap[href] = index;
				this.urls.push(href+";"+index);
				index++;
			}
		}
	}
	return this;
};

LinkTracking.prototype._getRandomNumber = function() {
	return Math.floor(Math.random()*9999999);
};
LinkTracking.prototype._getExpName = function () {
	// experimental field to identify current pool
	// test pool or default 
	return $('meta[name=exp_name]').attr('content');
};
LinkTracking.prototype.trackImpression = function() {

	var data = {
		Log: 1,
		v: 'JT01.02',
		ev: 'lnkimpression',
		wa_page: encodeURIComponent(window.location.href),
		vid: this._getRandomNumber(),
		exp_name: this._getExpName()
	};
	if (this.props.linksetId)
		data.wa_lst = this.props.linksetId;
	if (this.props.location)
		data.wa_mp = this.props.location;
	if (this.props.objectType)
		data.wa_wot = this.props.objectType;

	this.extendRCPData(data);

	data.wa_l = this.urls.join('|');
	var qs = this._serialize(data);

	var trackUrl = this.baseUrl+qs;
	if (this.props.debug){
		console.log(data, trackUrl);
		return false;
	}
	$("body").append("<img src='"+trackUrl+"'/>");
	return this;

};

LinkTracking.prototype.bindClickTracking = function() {

  var self = this;

	this.linkTags.bind("click", function(e) {
	e.preventDefault();
		var link = $(this);
		var href = link.attr('href');
		var index = self.urlMap[encodeURIComponent(href)];

		var data = {
			Log: 1,
			v: 'JT01.02',
			ev: 'lnkimpression_click',
			wa_page_click: encodeURIComponent(window.location.href),
			vid: self._getRandomNumber(),
			exp_name: self._getExpName()
		};
		if (self.props.linksetId)
			data.wa_lst_click = self.props.linksetId;
		if (self.props.location)
			data.wa_mp_click = self.props.location;
		if (self.props.objectType)
			data.wa_wot = self.props.objectType;

		self.extendRCPData(data);

		var src = (self.props.encode)?encodeURIComponent(href):href;
		data.wa_l_click = src+';'+index;

		var qs = self._serialize(data);
		var clickUrl = String.format('http://{0}/images/zig.gif?{1}', _omnitureLinkSetDomain, qs);

		// if the image doesn't load before the page redirects, this could lead to a race-condition
		// where the tracking isn't captured

		$("body").append("<img src='"+clickUrl+"'/>");

		// Same setTimeout is on rcploader.js for rcp modules.
		// See: dmjs.rcpLoader.prototype.trackClick
		if (href) {
			window.setTimeout(function() {
			  window.location = href;
			}, 500);	
		}
		
	});
	return this;
};

LinkTracking.prototype.run = function() {
	if (this.el.length != 0) {
		this.trackImpression();
		this.bindClickTracking();
	}
	return this;
};

$(function() {
	var container = "div[data-type='adTracking']";
	$(container + " a, " + container + " div.GoogleFlashAd div.Ad").bind("mouseup", function() {
		var parent = $(this).parents(container);
		_JT.DM_Click(parent[0]);
	});
});

(function($) { 
	$.fn.textboxHint = function(hint, options) {
		var opts = $.extend({}, $.fn.textboxHint.defaults, options);
		var hideHint = function() {
			this
				.removeClass(opts.hintClass)
				.val('');
			if (opts.onHideHint)
				opts.onHideHint.call(this);
		};

		var showHint = function() {
			this
				.addClass(opts.hintClass)
				.val(hint);
			if (opts.onShowHint)
				opts.onShowHint.call(this);
		};

		return this.each(function() {
			var $this = $(this);
			$this.data("textBoxHintValue", hint);
			$this.bind("focus", function() {
				if ($this.val() == hint)
				hideHint.call($this)
			});
			$this.bind("blur", function() {
				if ($this.val() == "") 
				showHint.call($this);
			});
			if ($this.val() == "")
				showHint.call($this);
		});
	};
	$.fn.textboxHint.defaults = {
		hintClass: 'Hint'
	}
	$.fn.isTextValid = function() {
		if (this.data("textBoxHintValue") != this.val() && this.val() != "")
			return true;
		else
			return false;
	}
})(jQuery);

dmjs.fbLikeJumpFix = function() {
	var max = 80, 
		min = 23,
		selector = ".fbFaces",
		timeout = null,
		maxTimes = 10,
		timesRun = 0;

	var run = function() {
		timesRun++;
		var h = $("iframe", selector).height();
		if (h < max && h > min) {
			$(selector).height("inherit").css('overflow', 'visible');
		} else if (timesRun < maxTimes){
			window.setTimeout(run, 500);
		}
	}
	var hasFaces = ($(selector).length != 0);
	if (hasFaces) {
		run();
	}
};

/*!	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/

var swfobject = function() {
	
	var UNDEF = "undefined",
		OBJECT = "object",
		SHOCKWAVE_FLASH = "Shockwave Flash",
		SHOCKWAVE_FLASH_AX = "ShockwaveFlash.ShockwaveFlash",
		FLASH_MIME_TYPE = "application/x-shockwave-flash",
		EXPRESS_INSTALL_ID = "SWFObjectExprInst",
		ON_READY_STATE_CHANGE = "onreadystatechange",
		
		win = window,
		doc = document,
		nav = navigator,
		
		plugin = false,
		domLoadFnArr = [main],
		regObjArr = [],
		objIdArr = [],
		listenersArr = [],
		storedAltContent,
		storedAltContentId,
		storedCallbackFn,
		storedCallbackObj,
		isDomLoaded = true,
		isExpressInstallActive = false,
		dynamicStylesheet,
		dynamicStylesheetMedia,
		autoHideShow = true,
	
	/* Centralized function for browser feature detection
		- User agent string detection is only used when no good alternative is possible
		- Is executed directly for optimal performance
	*/	
	ua = function() {
		var w3cdom = typeof doc.getElementById != UNDEF && typeof doc.getElementsByTagName != UNDEF && typeof doc.createElement != UNDEF,
			u = nav.userAgent.toLowerCase(),
			p = nav.platform.toLowerCase(),
			windows = p ? /win/.test(p) : /win/.test(u),
			mac = p ? /mac/.test(p) : /mac/.test(u),
			webkit = /webkit/.test(u) ? parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, // returns either the webkit version or false if not webkit
			ie = !+"\v1", // feature detection based on Andrea Giammarchi's solution: http://webreflection.blogspot.com/2009/01/32-bytes-to-know-if-your-browser-is-ie.html
			playerVersion = [0,0,0],
			d = null;
		if (typeof nav.plugins != UNDEF && typeof nav.plugins[SHOCKWAVE_FLASH] == OBJECT) {
			d = nav.plugins[SHOCKWAVE_FLASH].description;
			if (d && !(typeof nav.mimeTypes != UNDEF && nav.mimeTypes[FLASH_MIME_TYPE] && !nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)) { // navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin indicates whether plug-ins are enabled or disabled in Safari 3+
				plugin = true;
				ie = false; // cascaded feature detection for Internet Explorer
				d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
				playerVersion[0] = parseInt(d.replace(/^(.*)\..*$/, "$1"), 10);
				playerVersion[1] = parseInt(d.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
				playerVersion[2] = /[a-zA-Z]/.test(d) ? parseInt(d.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0;
			}
		}
		else if (typeof win.ActiveXObject != UNDEF) {
			try {
				var a = new ActiveXObject(SHOCKWAVE_FLASH_AX);
				if (a) { // a will return null when ActiveX is disabled
					d = a.GetVariable("$version");
					if (d) {
						ie = true; // cascaded feature detection for Internet Explorer
						d = d.split(" ")[1].split(",");
						playerVersion = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
					}
				}
			}
			catch(e) {}
		}
		return { w3:w3cdom, pv:playerVersion, wk:webkit, ie:ie, win:windows, mac:mac };
	}(),
	
	/* Cross-browser onDomLoad
		- Will fire an event as soon as the DOM of a web page is loaded
		- Internet Explorer workaround based on Diego Perini's solution: http://javascript.nwbox.com/IEContentLoaded/
		- Regular onload serves as fallback
	*/ 
	onDomLoad = function() {
		if (!ua.w3) { return; }
		if ((typeof doc.readyState != UNDEF && doc.readyState == "complete") || (typeof doc.readyState == UNDEF && (doc.getElementsByTagName("body")[0] || doc.body))) { // function is fired after onload, e.g. when script is inserted dynamically 
			callDomLoadFunctions();
		}
		if (!isDomLoaded) {
			if (typeof doc.addEventListener != UNDEF) {
				doc.addEventListener("DOMContentLoaded", callDomLoadFunctions, false);
			}		
			if (ua.ie && ua.win) {
				doc.attachEvent(ON_READY_STATE_CHANGE, function() {
					if (doc.readyState == "complete") {
						doc.detachEvent(ON_READY_STATE_CHANGE, arguments.callee);
						callDomLoadFunctions();
					}
				});
				if (win == top) { // if not inside an iframe
					(function(){
						if (isDomLoaded) { return; }
						try {
							doc.documentElement.doScroll("left");
						}
						catch(e) {
							setTimeout(arguments.callee, 0);
							return;
						}
						callDomLoadFunctions();
					})();
				}
			}
			if (ua.wk) {
				(function(){
					if (isDomLoaded) { return; }
					if (!/loaded|complete/.test(doc.readyState)) {
						setTimeout(arguments.callee, 0);
						return;
					}
					callDomLoadFunctions();
				})();
			}
			addLoadEvent(callDomLoadFunctions);
		}
	}();
	
	function callDomLoadFunctions() {
		if (isDomLoaded) { return; }
		try { // test if we can really add/remove elements to/from the DOM; we don't want to fire it too early
			var t = doc.getElementsByTagName("body")[0].appendChild(createElement("span"));
			t.parentNode.removeChild(t);
		}
		catch (e) { return; }
		isDomLoaded = true;
		var dl = domLoadFnArr.length;
		for (var i = 0; i < dl; i++) {
			domLoadFnArr[i]();
		}
	}
	
	function addDomLoadEvent(fn) {
		if (isDomLoaded) {
			fn();
		}
		else { 
			domLoadFnArr[domLoadFnArr.length] = fn; // Array.push() is only available in IE5.5+
		}
	}
	
	/* Cross-browser onload
		- Based on James Edwards' solution: http://brothercake.com/site/resources/scripts/onload/
		- Will fire an event as soon as a web page including all of its assets are loaded 
	 */
	function addLoadEvent(fn) {
		if (typeof win.addEventListener != UNDEF) {
			win.addEventListener("load", fn, false);
		}
		else if (typeof doc.addEventListener != UNDEF) {
			doc.addEventListener("load", fn, false);
		}
		else if (typeof win.attachEvent != UNDEF) {
			addListener(win, "onload", fn);
		}
		else if (typeof win.onload == "function") {
			var fnOld = win.onload;
			win.onload = function() {
				fnOld();
				fn();
			};
		}
		else {
			win.onload = fn;
		}
	}
	
	/* Main function
		- Will preferably execute onDomLoad, otherwise onload (as a fallback)
	*/
	function main() { 
		if (plugin) {
			testPlayerVersion();
		}
		else {
			matchVersions();
		}
	}
	
	/* Detect the Flash Player version for non-Internet Explorer browsers
		- Detecting the plug-in version via the object element is more precise than using the plugins collection item's description:
		  a. Both release and build numbers can be detected
		  b. Avoid wrong descriptions by corrupt installers provided by Adobe
		  c. Avoid wrong descriptions by multiple Flash Player entries in the plugin Array, caused by incorrect browser imports
		- Disadvantage of this method is that it depends on the availability of the DOM, while the plugins collection is immediately available
	*/
	function testPlayerVersion() {
		var b = doc.getElementsByTagName("body")[0];
		var o = createElement(OBJECT);
		o.setAttribute("type", FLASH_MIME_TYPE);
		var t = b.appendChild(o);
		if (t) {
			var counter = 0;
			(function(){
				if (typeof t.GetVariable != UNDEF) {
					var d = t.GetVariable("$version");
					if (d) {
						d = d.split(" ")[1].split(",");
						ua.pv = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
					}
				}
				else if (counter < 10) {
					counter++;
					setTimeout(arguments.callee, 10);
					return;
				}
				b.removeChild(o);
				t = null;
				matchVersions();
			})();
		}
		else {
			matchVersions();
		}
	}
	
	/* Perform Flash Player and SWF version matching; static publishing only
	*/
	function matchVersions() {
		var rl = regObjArr.length;
		if (rl > 0) {
			for (var i = 0; i < rl; i++) { // for each registered object element
				var id = regObjArr[i].id;
				var cb = regObjArr[i].callbackFn;
				var cbObj = {success:false, id:id};
				if (ua.pv[0] > 0) {
					var obj = getElementById(id);
					if (obj) {
						if (hasPlayerVersion(regObjArr[i].swfVersion) && !(ua.wk && ua.wk < 312)) { // Flash Player version >= published SWF version: Houston, we have a match!
							setVisibility(id, true);
							if (cb) {
								cbObj.success = true;
								cbObj.ref = getObjectById(id);
								cb(cbObj);
							}
						}
						else if (regObjArr[i].expressInstall && canExpressInstall()) { // show the Adobe Express Install dialog if set by the web page author and if supported
							var att = {};
							att.data = regObjArr[i].expressInstall;
							att.width = obj.getAttribute("width") || "0";
							att.height = obj.getAttribute("height") || "0";
							if (obj.getAttribute("class")) { att.styleclass = obj.getAttribute("class"); }
							if (obj.getAttribute("align")) { att.align = obj.getAttribute("align"); }
							// parse HTML object param element's name-value pairs
							var par = {};
							var p = obj.getElementsByTagName("param");
							var pl = p.length;
							for (var j = 0; j < pl; j++) {
								if (p[j].getAttribute("name").toLowerCase() != "movie") {
									par[p[j].getAttribute("name")] = p[j].getAttribute("value");
								}
							}
							showExpressInstall(att, par, id, cb);
						}
						else { // Flash Player and SWF version mismatch or an older Webkit engine that ignores the HTML object element's nested param elements: display alternative content instead of SWF
							displayAltContent(obj);
							if (cb) { cb(cbObj); }
						}
					}
				}
				else {	// if no Flash Player is installed or the fp version cannot be detected we let the HTML object element do its job (either show a SWF or alternative content)
					setVisibility(id, true);
					if (cb) {
						var o = getObjectById(id); // test whether there is an HTML object element or not
						if (o && typeof o.SetVariable != UNDEF) { 
							cbObj.success = true;
							cbObj.ref = o;
						}
						cb(cbObj);
					}
				}
			}
		}
	}
	
	function getObjectById(objectIdStr) {
		var r = null;
		var o = getElementById(objectIdStr);
		if (o && o.nodeName == "OBJECT") {
			if (typeof o.SetVariable != UNDEF) {
				r = o;
			}
			else {
				var n = o.getElementsByTagName(OBJECT)[0];
				if (n) {
					r = n;
				}
			}
		}
		return r;
	}
	
	/* Requirements for Adobe Express Install
		- only one instance can be active at a time
		- fp 6.0.65 or higher
		- Win/Mac OS only
		- no Webkit engines older than version 312
	*/
	function canExpressInstall() {
		return !isExpressInstallActive && hasPlayerVersion("6.0.65") && (ua.win || ua.mac) && !(ua.wk && ua.wk < 312);
	}
	
	/* Show the Adobe Express Install dialog
		- Reference: http://www.adobe.com/cfusion/knowledgebase/index.cfm?id=6a253b75
	*/
	function showExpressInstall(att, par, replaceElemIdStr, callbackFn) {
		isExpressInstallActive = true;
		storedCallbackFn = callbackFn || null;
		storedCallbackObj = {success:false, id:replaceElemIdStr};
		var obj = getElementById(replaceElemIdStr);
		if (obj) {
			if (obj.nodeName == "OBJECT") { // static publishing
				storedAltContent = abstractAltContent(obj);
				storedAltContentId = null;
			}
			else { // dynamic publishing
				storedAltContent = obj;
				storedAltContentId = replaceElemIdStr;
			}
			att.id = EXPRESS_INSTALL_ID;
			if (typeof att.width == UNDEF || (!/%$/.test(att.width) && parseInt(att.width, 10) < 310)) { att.width = "310"; }
			if (typeof att.height == UNDEF || (!/%$/.test(att.height) && parseInt(att.height, 10) < 137)) { att.height = "137"; }
			doc.title = doc.title.slice(0, 47) + " - Flash Player Installation";
			var pt = ua.ie && ua.win ? "ActiveX" : "PlugIn",
				fv = "MMredirectURL=" + win.location.toString().replace(/&/g,"%26") + "&MMplayerType=" + pt + "&MMdoctitle=" + doc.title;
			if (typeof par.flashvars != UNDEF) {
				par.flashvars += "&" + fv;
			}
			else {
				par.flashvars = fv;
			}
			// IE only: when a SWF is loading (AND: not available in cache) wait for the readyState of the object element to become 4 before removing it,
			// because you cannot properly cancel a loading SWF file without breaking browser load references, also obj.onreadystatechange doesn't work
			if (ua.ie && ua.win && obj.readyState != 4) {
				var newObj = createElement("div");
				replaceElemIdStr += "SWFObjectNew";
				newObj.setAttribute("id", replaceElemIdStr);
				obj.parentNode.insertBefore(newObj, obj); // insert placeholder div that will be replaced by the object element that loads expressinstall.swf
				obj.style.display = "none";
				(function(){
					if (obj.readyState == 4) {
						obj.parentNode.removeChild(obj);
					}
					else {
						setTimeout(arguments.callee, 10);
					}
				})();
			}
			createSWF(att, par, replaceElemIdStr);
		}
	}
	
	/* Functions to abstract and display alternative content
	*/
	function displayAltContent(obj) {
		if (ua.ie && ua.win && obj.readyState != 4) {
			// IE only: when a SWF is loading (AND: not available in cache) wait for the readyState of the object element to become 4 before removing it,
			// because you cannot properly cancel a loading SWF file without breaking browser load references, also obj.onreadystatechange doesn't work
			var el = createElement("div");
			obj.parentNode.insertBefore(el, obj); // insert placeholder div that will be replaced by the alternative content
			el.parentNode.replaceChild(abstractAltContent(obj), el);
			obj.style.display = "none";
			(function(){
				if (obj.readyState == 4) {
					obj.parentNode.removeChild(obj);
				}
				else {
					setTimeout(arguments.callee, 10);
				}
			})();
		}
		else {
			obj.parentNode.replaceChild(abstractAltContent(obj), obj);
		}
	} 

	function abstractAltContent(obj) {
		var ac = createElement("div");
		if (ua.win && ua.ie) {
			ac.innerHTML = obj.innerHTML;
		}
		else {
			var nestedObj = obj.getElementsByTagName(OBJECT)[0];
			if (nestedObj) {
				var c = nestedObj.childNodes;
				if (c) {
					var cl = c.length;
					for (var i = 0; i < cl; i++) {
						if (!(c[i].nodeType == 1 && c[i].nodeName == "PARAM") && !(c[i].nodeType == 8)) {
							ac.appendChild(c[i].cloneNode(true));
						}
					}
				}
			}
		}
		return ac;
	}
	
	/* Cross-browser dynamic SWF creation
	*/
	function createSWF(attObj, parObj, id) {
		var r, el = getElementById(id);
		if (ua.wk && ua.wk < 312) { return r; }
		if (el) {
			if (typeof attObj.id == UNDEF) { // if no 'id' is defined for the object element, it will inherit the 'id' from the alternative content
				attObj.id = id;
			}
			if (ua.ie && ua.win) { // Internet Explorer + the HTML object element + W3C DOM methods do not combine: fall back to outerHTML
				var att = "";
				for (var i in attObj) {
					if (attObj[i] != Object.prototype[i]) { // filter out prototype additions from other potential libraries
						if (i.toLowerCase() == "data") {
							parObj.movie = attObj[i];
						}
						else if (i.toLowerCase() == "styleclass") { // 'class' is an ECMA4 reserved keyword
							att += ' class="' + attObj[i] + '"';
						}
						else if (i.toLowerCase() != "classid") {
							att += ' ' + i + '="' + attObj[i] + '"';
						}
					}
				}
				var par = "";
				for (var j in parObj) {
					if (parObj[j] != Object.prototype[j]) { // filter out prototype additions from other potential libraries
						par += '<param name="' + j + '" value="' + parObj[j] + '" />';
					}
				}
				el.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + att + '>' + par + '</object>';
				objIdArr[objIdArr.length] = attObj.id; // stored to fix object 'leaks' on unload (dynamic publishing only)
				r = getElementById(attObj.id);	
			}
			else { // well-behaving browsers
				var o = createElement(OBJECT);
				o.setAttribute("type", FLASH_MIME_TYPE);
				for (var m in attObj) {
					if (attObj[m] != Object.prototype[m]) { // filter out prototype additions from other potential libraries
						if (m.toLowerCase() == "styleclass") { // 'class' is an ECMA4 reserved keyword
							o.setAttribute("class", attObj[m]);
						}
						else if (m.toLowerCase() != "classid") { // filter out IE specific attribute
							o.setAttribute(m, attObj[m]);
						}
					}
				}
				for (var n in parObj) {
					if (parObj[n] != Object.prototype[n] && n.toLowerCase() != "movie") { // filter out prototype additions from other potential libraries and IE specific param element
						createObjParam(o, n, parObj[n]);
					}
				}
				el.parentNode.replaceChild(o, el);
				r = o;
			}
		}
		return r;
	}
	
	function createObjParam(el, pName, pValue) {
		var p = createElement("param");
		p.setAttribute("name", pName);	
		p.setAttribute("value", pValue);
		el.appendChild(p);
	}
	
	/* Cross-browser SWF removal
		- Especially needed to safely and completely remove a SWF in Internet Explorer
	*/
	function removeSWF(id) {
		var obj = getElementById(id);
		if (obj && obj.nodeName == "OBJECT") {
			if (ua.ie && ua.win) {
				obj.style.display = "none";
				(function(){
					if (obj.readyState == 4) {
						removeObjectInIE(id);
					}
					else {
						setTimeout(arguments.callee, 10);
					}
				})();
			}
			else {
				obj.parentNode.removeChild(obj);
			}
		}
	}
	
	function removeObjectInIE(id) {
		var obj = getElementById(id);
		if (obj) {
			for (var i in obj) {
				if (typeof obj[i] == "function") {
					obj[i] = null;
				}
			}
			obj.parentNode.removeChild(obj);
		}
	}
	
	/* Functions to optimize JavaScript compression
	*/
	function getElementById(id) {
		var el = null;
		try {
			el = doc.getElementById(id);
		}
		catch (e) {}
		return el;
	}
	
	function createElement(el) {
		return doc.createElement(el);
	}
	
	/* Updated attachEvent function for Internet Explorer
		- Stores attachEvent information in an Array, so on unload the detachEvent functions can be called to avoid memory leaks
	*/	
	function addListener(target, eventType, fn) {
		target.attachEvent(eventType, fn);
		listenersArr[listenersArr.length] = [target, eventType, fn];
	}
	
	/* Flash Player and SWF content version matching
	*/
	function hasPlayerVersion(rv) {
		var pv = ua.pv, v = rv.split(".");
		v[0] = parseInt(v[0], 10);
		v[1] = parseInt(v[1], 10) || 0; // supports short notation, e.g. "9" instead of "9.0.0"
		v[2] = parseInt(v[2], 10) || 0;
		return (pv[0] > v[0] || (pv[0] == v[0] && pv[1] > v[1]) || (pv[0] == v[0] && pv[1] == v[1] && pv[2] >= v[2])) ? true : false;
	}
	
	/* Cross-browser dynamic CSS creation
		- Based on Bobby van der Sluis' solution: http://www.bobbyvandersluis.com/articles/dynamicCSS.php
	*/	
	function createCSS(sel, decl, media, newStyle) {
		if (ua.ie && ua.mac) { return; }
		var h = doc.getElementsByTagName("head")[0];
		if (!h) { return; } // to also support badly authored HTML pages that lack a head element
		var m = (media && typeof media == "string") ? media : "screen";
		if (newStyle) {
			dynamicStylesheet = null;
			dynamicStylesheetMedia = null;
		}
		if (!dynamicStylesheet || dynamicStylesheetMedia != m) { 
			// create dynamic stylesheet + get a global reference to it
			var s = createElement("style");
			s.setAttribute("type", "text/css");
			s.setAttribute("media", m);
			dynamicStylesheet = h.appendChild(s);
			if (ua.ie && ua.win && typeof doc.styleSheets != UNDEF && doc.styleSheets.length > 0) {
				dynamicStylesheet = doc.styleSheets[doc.styleSheets.length - 1];
			}
			dynamicStylesheetMedia = m;
		}
		// add style rule
		if (ua.ie && ua.win) {
			if (dynamicStylesheet && typeof dynamicStylesheet.addRule == OBJECT) {
				dynamicStylesheet.addRule(sel, decl);
			}
		}
		else {
			if (dynamicStylesheet && typeof doc.createTextNode != UNDEF) {
				dynamicStylesheet.appendChild(doc.createTextNode(sel + " {" + decl + "}"));
			}
		}
	}
	
	function setVisibility(id, isVisible) {
		if (!autoHideShow) { return; }
		var v = isVisible ? "visible" : "hidden";
		if (isDomLoaded && getElementById(id)) {
			getElementById(id).style.visibility = v;
		}
		else {
			createCSS("#" + id, "visibility:" + v);
		}
	}

	/* Filter to avoid XSS attacks
	*/
	function urlEncodeIfNecessary(s) {
		var regex = /[\\\"<>\.;]/;
		var hasBadChars = regex.exec(s) != null;
		return hasBadChars && typeof encodeURIComponent != UNDEF ? encodeURIComponent(s) : s;
	}
	
	/* Release memory to avoid memory leaks caused by closures, fix hanging audio/video threads and force open sockets/NetConnections to disconnect (Internet Explorer only)
	*/
	var cleanup = function() {
		if (ua.ie && ua.win) {
			window.attachEvent("onunload", function() {
				// remove listeners to avoid memory leaks
				var ll = listenersArr.length;
				for (var i = 0; i < ll; i++) {
					listenersArr[i][0].detachEvent(listenersArr[i][1], listenersArr[i][2]);
				}
				// cleanup dynamically embedded objects to fix audio/video threads and force open sockets and NetConnections to disconnect
				var il = objIdArr.length;
				for (var j = 0; j < il; j++) {
					removeSWF(objIdArr[j]);
				}
				// cleanup library's main closures to avoid memory leaks
				for (var k in ua) {
					ua[k] = null;
				}
				ua = null;
				for (var l in swfobject) {
					swfobject[l] = null;
				}
				swfobject = null;
			});
		}
	}();
	
	return {
		/* Public API
			- Reference: http://code.google.com/p/swfobject/wiki/documentation
		*/ 
		registerObject: function(objectIdStr, swfVersionStr, xiSwfUrlStr, callbackFn) {
			if (ua.w3 && objectIdStr && swfVersionStr) {
				var regObj = {};
				regObj.id = objectIdStr;
				regObj.swfVersion = swfVersionStr;
				regObj.expressInstall = xiSwfUrlStr;
				regObj.callbackFn = callbackFn;
				regObjArr[regObjArr.length] = regObj;
				setVisibility(objectIdStr, false);
			}
			else if (callbackFn) {
				callbackFn({success:false, id:objectIdStr});
			}
		},
		
		getObjectById: function(objectIdStr) {
			if (ua.w3) {
				return getObjectById(objectIdStr);
			}
		},
		
		embedSWF: function(swfUrlStr, replaceElemIdStr, widthStr, heightStr, swfVersionStr, xiSwfUrlStr, flashvarsObj, parObj, attObj, callbackFn) {
			var callbackObj = {success:false, id:replaceElemIdStr};
			if (ua.w3 && !(ua.wk && ua.wk < 312) && swfUrlStr && replaceElemIdStr && widthStr && heightStr && swfVersionStr) {
				setVisibility(replaceElemIdStr, false);
				addDomLoadEvent(function() {
					widthStr += ""; // auto-convert to string
					heightStr += "";
					var att = {};
					if (attObj && typeof attObj === OBJECT) {
						for (var i in attObj) { // copy object to avoid the use of references, because web authors often reuse attObj for multiple SWFs
							att[i] = attObj[i];
						}
					}
					att.data = swfUrlStr;
					att.width = widthStr;
					att.height = heightStr;
					var par = {}; 
					if (parObj && typeof parObj === OBJECT) {
						for (var j in parObj) { // copy object to avoid the use of references, because web authors often reuse parObj for multiple SWFs
							par[j] = parObj[j];
						}
					}
					if (flashvarsObj && typeof flashvarsObj === OBJECT) {
						for (var k in flashvarsObj) { // copy object to avoid the use of references, because web authors often reuse flashvarsObj for multiple SWFs
							if (typeof par.flashvars != UNDEF) {
								par.flashvars += "&" + k + "=" + flashvarsObj[k];
							}
							else {
								par.flashvars = k + "=" + flashvarsObj[k];
							}
						}
					}
					if (hasPlayerVersion(swfVersionStr)) { // create SWF
						var obj = createSWF(att, par, replaceElemIdStr);
						if (att.id == replaceElemIdStr) {
							setVisibility(replaceElemIdStr, true);
						}
						callbackObj.success = true;
						callbackObj.ref = obj;
					}
					else if (xiSwfUrlStr && canExpressInstall()) { // show Adobe Express Install
						att.data = xiSwfUrlStr;
						showExpressInstall(att, par, replaceElemIdStr, callbackFn);
						return;
					}
					else { // show alternative content
						setVisibility(replaceElemIdStr, true);
					}
					if (callbackFn) { callbackFn(callbackObj); }
				});
			}
			else if (callbackFn) { callbackFn(callbackObj);	}
		},
		
		switchOffAutoHideShow: function() {
			autoHideShow = false;
		},
		
		ua: ua,
		
		getFlashPlayerVersion: function() {
			return { major:ua.pv[0], minor:ua.pv[1], release:ua.pv[2] };
		},
		
		hasFlashPlayerVersion: hasPlayerVersion,
		
		createSWF: function(attObj, parObj, replaceElemIdStr) {
			if (ua.w3) {
				return createSWF(attObj, parObj, replaceElemIdStr);
			}
			else {
				return undefined;
			}
		},
		
		showExpressInstall: function(att, par, replaceElemIdStr, callbackFn) {
			if (ua.w3 && canExpressInstall()) {
				showExpressInstall(att, par, replaceElemIdStr, callbackFn);
			}
		},
		
		removeSWF: function(objElemIdStr) {
			if (ua.w3) {
				removeSWF(objElemIdStr);
			}
		},
		
		createCSS: function(selStr, declStr, mediaStr, newStyleBoolean) {
			if (ua.w3) {
				createCSS(selStr, declStr, mediaStr, newStyleBoolean);
			}
		},
		
		addDomLoadEvent: addDomLoadEvent,
		
		addLoadEvent: addLoadEvent,
		
		getQueryParamValue: function(param) {
			var q = doc.location.search || doc.location.hash;
			if (q) {
				if (/\?/.test(q)) { q = q.split("?")[1]; } // strip question mark
				if (param == null) {
					return urlEncodeIfNecessary(q);
				}
				var pairs = q.split("&");
				for (var i = 0; i < pairs.length; i++) {
					if (pairs[i].substring(0, pairs[i].indexOf("=")) == param) {
						return urlEncodeIfNecessary(pairs[i].substring((pairs[i].indexOf("=") + 1)));
					}
				}
			}
			return "";
		},
		
		// For internal usage only
		expressInstallCallback: function() {
			if (isExpressInstallActive) {
				var obj = getElementById(EXPRESS_INSTALL_ID);
				if (obj && storedAltContent) {
					obj.parentNode.replaceChild(storedAltContent, obj);
					if (storedAltContentId) {
						setVisibility(storedAltContentId, true);
						if (ua.ie && ua.win) { storedAltContent.style.display = "block"; }
					}
					if (storedCallbackFn) { storedCallbackFn(storedCallbackObj); }
				}
				isExpressInstallActive = false;
			} 
		}
	};
}();

/* -----DART----- */
//dartAds.defaults.siteCode = dmjs.setting.ads.dart.siteCode;
//dartAds.defaults.server = dmjs.setting.ads.dart.server;

var Nav = {
	$primaryNav : $('#primaryNav'),
	$primaryNavItems : $('#primaryNav .js-list'),
	init: function ($) {
		Nav.$primaryNavItems.bind("mouseenter", function () {
			var target = $(this).find('a').data("channel");

			if (target === "more" || target === "ehownow" ) {
				Nav.toggleDropdown(target);
			}
		});

		// Tablet
		$('.js-more, .js-ehownow').bind('touchstart', function (e) {
			e.preventDefault();
			
			var $this = $(this),
				$channel = $this.data("channel");

			if (Nav.$primaryNav[0].className !== $channel) {
				Nav.$primaryNav.removeClass();
				Nav.$primaryNav.addClass($channel);

				if ($channel === 'more') {
					Nav.toggleArrow('&#x32;');
				} else {
					// open ehowNow here
					Nav.toggleBg('/ui/vendor/ehownow/nav-expert-bg.jpg');
					Nav.toggleArrow('&#x33;');
				}
			} else {
				Nav.$primaryNav.removeClass();
				Nav.toggleArrow('&#x33;');
			}
		});

		Nav.$primaryNavItems.bind("mouseleave",function () {
			var $channel = $(this).find('a').data('channel');
			Nav.$primaryNav.removeClass();
			if ($channel === 'more') {
				Nav.toggleArrow('&#x33;');
			}
		});
	},
	toggleDropdown : function (target) {
		Nav.$primaryNav.addClass(target);
		if (target === "ehownow" ){
			Nav.toggleBg('/ui/vendor/ehownow/nav-expert-bg.jpg');
		}
		if (target === "more") {
			Nav.toggleArrow('&#x32;');
		}
	},
	toggleArrow : function (entity) {
		$('.js-more').find('.js-icon')[0].innerHTML = entity;	
	},
	toggleBg : function(url) {
		$(".ehownow_dropdown").css('background', "#3c3c3c url('"+ url +"') 0 0 no-repeat");
	}
};

Nav.init(window.jQuery);


(function ($) {

	// eHow now dropdown
	// Author: Jenni Cheung
	$('#ehowNavQuestionForm span[data-category]').click(function(){
		// var
		var cat = $(this).attr("data-category"),
			tab = $(this).parent('li');
		if(cat != 'more'){
			var newaction = $('#ehowNavQuestionForm').attr("data-action").replace(/#category/g,$(this).attr("data-category"));
			$('#ehowNavQuestionForm').attr("action", newaction);
			$('#ehowNavQuestionForm ul.nav li').removeClass("active");
			tab.addClass("active");
		} else {
			if(tab.hasClass("active")){
				tab.removeClass("active");
			}else{
				tab.addClass("active");
			}
		}

	});

	// default to first one
	$('#ehowNavQuestionForm span[data-category]').eq(0).click();

	$('#ehowNavQuestionForm span[data-landing]').click(function(){
		var q = $("#ehowNavQuestionForm textarea").eq(0).val(),
			newUrl = $('#ehowNavQuestionForm').attr("data-landing").replace(/#category/g,$(this).attr("data-landing"));
		if(q==""){
			window.location = newUrl;
		} else {
			$('#ehowNavQuestionForm').attr("action", newUrl).submit();
		}
	})

}(window.jQuery));

/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
(function() {
	var initializing = false,
		fnTest = /xyz/.test(function() {
		xyz;
	}) ? /\b_super\b/ : /.*/;
	this.Class = function() {};
	Class.extend = function(prop) {
		var _super = this.prototype;
		initializing = true;
		var prototype = new this();
		initializing = false;
		for (var name in prop) {
			prototype[name] = typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name]) ? (function(name, fn) {
				return function() {
					var tmp = this._super;
					this._super = _super[name];
					var ret = fn.apply(this, arguments);
					this._super = tmp;
					return ret;
				};
			})(name, prop[name]) : prop[name];
		}
		function Class() {
			if (!initializing && this.init) this.init.apply(this, arguments);
		}
		Class.prototype = prototype;
		Class.constructor = Class;
		Class.extend = arguments.callee;
		return Class;
	};
})();

/*!
  * Fidel - A javascript controller
  * v1.2.2
  * https://github.com/jgallen23/fidel
  * copyright JGA 2011
  * MIT License
  */

!function(obj) {

  var Fidel = {};
  Fidel.guid = function(){
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	  var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
	  return v.toString(16);
	}).toUpperCase();	  
  };
  Fidel.extend = function() {
	throw new Error("Fidel.extend is deprecated, please use Fidel.ViewController.extend");
  };

  var o = obj.Fidel;
  Fidel.noConflict = function() {
	obj.Fidel = o;
	return this;
  };
  obj.Fidel = Fidel;
}(this);

!function(f) {
  var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
  // The base Class implementation (does nothing)
  f.Class = function(){};
  
  // Create a new Class that inherits from this class
  f.Class.extend = function(prop) {
	var _super = this.prototype;
	
	// Instantiate a base class (but only create the instance,
	// don't run the init constructor)
	initializing = true;
	var prototype = new this();
	initializing = false;
	
	// Copy the properties over onto the new prototype
	for (var name in prop) {
	  // Check if we're overwriting an existing function
	  prototype[name] = typeof prop[name] == "function" && 
		typeof _super[name] == "function" && fnTest.test(prop[name]) ?
		(function(name, fn){
		  return function() {
			var tmp = this._super;
			
			// Add a new ._super() method that is the same method
			// but on the super-class
			this._super = _super[name];
			
			// The method only need to be bound temporarily, so we
			// remove it when we're done executing
			var ret = fn.apply(this, arguments);		
			this._super = tmp;
			
			return ret;
		  };
		})(name, prop[name]) :
		prop[name];
	}
	
	// The dummy class constructor
	function Class(opt) {
	  // All construction is actually done in the init method
	  if (!initializing) {
		this.guid = f.guid();
		if (this.defaults) {
		  for (var key in this.defaults) {
			if (typeof opt !== 'object' || !opt[key]) this[key] = this.defaults[key];
		  }
		}
		if (typeof opt === 'object') {
		  for (var okey in opt) {
			this[okey] = opt[okey];
		  }
		}
		if (this._initialize) this._initialize.apply(this, arguments);
		if (this.init) this.init.apply(this, arguments);
	  }
	}
	
	// Populate our constructed prototype object
	Class.prototype = prototype;
	Class.prototype.proxy = function(func) {
	  var thisObject = this;
	  return(function(){ 
		if (!func) return;
		return func.apply(thisObject, arguments); 
	  });
	};
	
	// Enforce the constructor to be what we expect
	Class.constructor = Class;

	// And make this class extendable
	Class.extend = arguments.callee;
	
	return Class;
  };
}(Fidel || this);

!function(f) {
  var cache = {}; //check for "c_" cache for unit testing
  //publish("/some/topic", ["a","b","c"]);
  f.publish = function(topic, args){

	var subs = cache[topic], len = subs ? subs.length : 0;

	//can change loop or reverse array if the order matters
	while(len--){
	  subs[len].apply(this, args || []);
	}
  };
  //subscribe("/some/topic", function(a, b, c){ /* handle data */ });
  f.subscribe = function(topic, callback){
	if(!cache[topic]){
			cache[topic] = [];
	}
	cache[topic].push(callback);
	return [topic, callback]; // Array
  };
  //var handle = subscribe("/some/topic", function(){});
  //unsubscribe(handle);
  f.unsubscribe = function(handle){
	var subs = cache[handle[0]],
			  callback = handle[1],
			  len = subs ? subs.length : 0;

	while(len--){
	  if(subs[len] === callback){
	  subs.splice(len, 1);
	  }
	}
  };


  f.Class.prototype.on = f.Class.prototype.bind = function(name, callback) {
	return f.subscribe(this.guid+"."+name, this.proxy(callback));
  };
  f.Class.prototype.emit = f.Class.prototype.trigger = function(name, data) {
	f.publish(this.guid+"."+name, data);
	f.publish(name, data);
  };
  f.Class.prototype.removeListener = f.Class.prototype.unbind = function(handle) {
	f.unsubscribe(handle);
  };

}(Fidel || this);

(function(f) {
  var eventSplitter = /^(\w+)\s*(.*)$/;

  var ViewController = f.Class.extend({
	_initialize: function(options) {

	  if (!this.el) throw "el is required";
	  
	  this._subscribeHandles = {};
	  this._processedActions = {};
	  if (this.events) this.delegateEvents();
	  if (this.elements) this.refreshElements();
	  if (this.templateSelector) this.loadTemplate();
	  if (!this.actionEvent) this.actionEvent = "click";
	  if (this.subscribe) this.bindSubscriptions();
	  this.delegateActions();
	  this.getDataElements();
	},
	delegateEvents: function() {
	  for (var key in this.events) {
		var methodName = this.events[key];
		var match = key.match(eventSplitter);
		var eventName = match[1], selector = match[2];

		var method = this.proxy(this[methodName]);

		if (selector === '') {
		  this.el.bind(eventName, method);
		} else {
		  this.el.delegate(selector, eventName, method);
		}
	  }
	},
	delegateActions: function() {
	  var elements = this.find("[data-action]");
	  for (var i = 0, c = elements.length; i < c; i++) {
		var elem = $(elements[i]);
		var methodName = elem.attr("data-action");
		var method = this.proxy(this[methodName]);
		var eventName = this.actionEvent, selector = '[data-action="'+methodName+'"]';
		if (!this._processedActions[methodName]) {
		  this.el.delegate(selector, eventName, method);
		  this._processedActions[methodName] = true;
		}
	  }
	},
	refreshElements: function() {
	  for (var key in this.elements) {
		this[key] = this.find(this.elements[key]);
	  }
	},
	getDataElements: function() {
	  var self = this;
	  var elements = this.find("[data-element]");
	  for (var i = 0, c = elements.length; i < c; i++) {
		var name = elements[i].getAttribute('data-element');
		if (!self[name]) {
		  var elem = this.find('[data-element="'+name+'"]');
		  self[name] = elem;
		}
	  }
	},
	bindSubscriptions: function() {
	  for (var key in this.subscribe) {
		this._subscribeHandles[key] = Fidel.subscribe(key, this.proxy(this[this.subscribe[key]]));
	  }
	},
	loadTemplate: function() {
	  this.template = $(this.templateSelector).html();
	},
	find: function(selector) {
	  return $(selector, this.el[0]);
	},
	render: function(data, selector) {
	  var str = window.str || $;
	  if (str) {
		var tmp = str.template(this.template, data);
		selector = (selector)?$(selector):this.el;
		selector.html(tmp);
	  }
	},
	destroy: function() {
	  for (var key in this._subscribeHandles) {
		Fidel.unsubscribe(this._subscribeHandles[key]);
	  }
	  for (var action in this._processedActions) {
		this.el.unbind(action);
	  }
	  this.el = null;
	}
  });
  f.ViewController = ViewController;
})(Fidel || this);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

 /*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(window, document, $) {

	var isInputSupported = 'placeholder' in document.createElement('input');
	var isTextareaSupported = 'placeholder' in document.createElement('textarea');
	var prototype = $.fn;
	var valHooks = $.valHooks;
	var propHooks = $.propHooks;
	var hooks;
	var placeholder;

	if (isInputSupported && isTextareaSupported) {

		placeholder = prototype.placeholder = function() {
			return this;
		};

		placeholder.input = placeholder.textarea = true;

	} else {

		placeholder = prototype.placeholder = function() {
			var $this = this;
			$this
				.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
				.not('.placeholder')
				.bind({
					'focus.placeholder': clearPlaceholder,
					'blur.placeholder': setPlaceholder
				})
				.data('placeholder-enabled', true)
				.trigger('blur.placeholder');
			return $this;
		};

		placeholder.input = isInputSupported;
		placeholder.textarea = isTextareaSupported;

		hooks = {
			'get': function(element) {
				var $element = $(element);

				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value;
				}

				return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
			},
			'set': function(element, value) {
				var $element = $(element);

				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value = value;
				}

				if (!$element.data('placeholder-enabled')) {
					return element.value = value;
				}
				if (value == '') {
					element.value = value;
					// Issue #56: Setting the placeholder causes problems if the element continues to have focus.
					if (element != safeActiveElement()) {
						// We can't use `triggerHandler` here because of dummy text/password inputs :(
						setPlaceholder.call(element);
					}
				} else if ($element.hasClass('placeholder')) {
					clearPlaceholder.call(element, true, value) || (element.value = value);
				} else {
					element.value = value;
				}
				// `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
				return $element;
			}
		};

		if (!isInputSupported) {
			valHooks.input = hooks;
			propHooks.value = hooks;
		}
		if (!isTextareaSupported) {
			valHooks.textarea = hooks;
			propHooks.value = hooks;
		}

		$(function() {
			// Look for forms
			$(document).delegate('form', 'submit.placeholder', function() {
				// Clear the placeholder values so they don't get submitted
				var $inputs = $('.placeholder', this).each(clearPlaceholder);
				setTimeout(function() {
					$inputs.each(setPlaceholder);
				}, 10);
			});
		});

		// Clear placeholder values upon page reload
		$(window).bind('beforeunload.placeholder', function() {
			$('.placeholder').each(function() {
				this.value = '';
			});
		});

	}

	function args(elem) {
		// Return an object of element attributes
		var newAttrs = {};
		var rinlinejQuery = /^jQuery\d+$/;
		$.each(elem.attributes, function(i, attr) {
			if (attr.specified && !rinlinejQuery.test(attr.name)) {
				newAttrs[attr.name] = attr.value;
			}
		});
		return newAttrs;
	}

	function clearPlaceholder(event, value) {
		var input = this;
		var $input = $(input);
		if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
			if ($input.data('placeholder-password')) {
				$input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
				// If `clearPlaceholder` was called from `$.valHooks.input.set`
				if (event === true) {
					return $input[0].value = value;
				}
				$input.focus();
			} else {
				input.value = '';
				$input.removeClass('placeholder');
				input == safeActiveElement() && input.select();
			}
		}
	}

	function setPlaceholder() {
		var $replacement;
		var input = this;
		var $input = $(input);
		var id = this.id;
		if (input.value == '') {
			if (input.type == 'password') {
				if (!$input.data('placeholder-textinput')) {
					try {
						$replacement = $input.clone().attr({ 'type': 'text' });
					} catch(e) {
						$replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
					}
					$replacement
						.removeAttr('name')
						.data({
							'placeholder-password': $input,
							'placeholder-id': id
						})
						.bind('focus.placeholder', clearPlaceholder);
					$input
						.data({
							'placeholder-textinput': $replacement,
							'placeholder-id': id
						})
						.before($replacement);
				}
				$input = $input.removeAttr('id').hide().prev().attr('id', id).show();
				// Note: `$input[0] != input` now!
			}
			$input.addClass('placeholder');
			$input[0].value = $input.attr('placeholder');
		} else {
			$input.removeClass('placeholder');
		}
	}

	function safeActiveElement() {
		// Avoid IE9 `document.activeElement` of death
		// https://github.com/mathiasbynens/jquery-placeholder/pull/99
		try {
			return document.activeElement;
		} catch (err) {}
	}

}(this, document, jQuery));

/**
 * Simple javascript modal.
 *
 * Example:
 *	 ehow.Modal = new dmjs.ModalClass({selector: "a[data-type=modal]"});
 *
 * Data Values:
 * 	data-modal-class: Css class that will be applied to modal
 *	data-modal-content: Content to be shown as a caption for images 
 *
 * @requires jquery
 * @requires class
 * @param [Object] options Option object.
 * @option [String] selector Selector to attach modal clicks to.
 * @option [RegEx] imageReg Regular Expression to match images.
 * @option [Function] clickCallback Callback fired when modal is opened.
 */

dmjs.ModalClass = Class.extend({
	defaults: {
		selector: '',
		imageReg: /\.(jpe?g|png|gif|bmp)$/gi,
		clickCallback: function() {}
	},

	/**
	 * Initializes class. Attaches events to links.
	 *
	 * @param [Object] options Option object.
	 */

	init: function(options) {
		var self = this;		
		this.options = $.extend({}, this.defaults, options);
		
		if(this.options.selector.length>0) {
			$(this.options.selector).each(function(){
				var trigger = $(this).attr('data-modal-trigger');
				if(typeof trigger !== 'undefined') {
					$this = $(this);
					var data = {
						modalClass: $this.data("modal-class") || "",
						modalUrl: $this.attr('href') || $this.attr('data-href') || "",
						modalContent: $this.data('modal-content') || "",
						modalCredit: $this.data('modal-credit') || "",
						modalShowCloseButton: $this.data('modal-close') || "true",
						modalInline: $(this).data("modal-inline") || "",
						modalScroll: $(this).data("modal-scroll") || "no",
						disableOverlayClose: $(this).data("modal-disable-overlay-close") || false
					};
					$(trigger).click(function(){
						self.showModal(data);	
					});
				} else {
					$(this).click(function(e){
						e.preventDefault();
						$this = $(this);
						var data = {
							modalClass: $this.data("modal-class") || "",
							modalUrl: $this.attr('href') || $this.attr('data-href') || "",
							modalContent: $this.data('modal-content') || "",
							modalCredit: $this.data('modal-credit') || "",
							modalShowCloseButton: $this.data('modal-close') || "true",
							modalInline: $(this).data("modal-inline") || "",
							modalScroll: $(this).data("modal-scroll") || "no",
							disableOverlayClose: $(this).data("modal-disable-overlay-close") || false,
							preventBubbling: $this.data('modal-prevent-bubbling') || false
						};

						self.showModal(data);
					});
				}
			});
		}
	},

	/**
	 * Creates a modal and inserts content.
	 *
	 * @param {Object} data Data object containing various options.
	 */

	showModal: function(data) {
		var self = this;

		//makes sure all modals are closed first.
		this.removeModal();
		
		var body = $('body');
		var modalMaster = $('<div/>').addClass('Modal');
		var modalOverlay = $('<div/>').addClass('ModalOverlay').appendTo(modalMaster);
		var modalContainer = $('<div/>')
			.addClass('ModalContainer')
			.addClass(data.modalClass)
			.appendTo(modalMaster);

		var modalContents = $('<div/>')
			.addClass('contents')
			.appendTo(modalContainer);
		
		body.addClass('ModalOpen');
				
		if(data.modalUrl.length>0) {
			if(data.modalUrl.match(this.options.imageReg)) {
				var image = new Image();
				image.src = data.modalUrl;
				if(data.modalCredit.length>0) {
					image.setAttribute('data-credit',data.modalCredit);
				}
				var modalImage;

				modalContainer.hide();

			//IE awesome complete code
			if(image.complete || image.readyState === 4) {
			  modalImage = $('<div/>').addClass("ModalImage").prependTo(modalContents);
					modalContainer.css({
						display: 'block',
						width: image.width
					});
					$(image).prependTo(modalImage);
					
					modalContainer.css({
						width: image.width+22,
						display: 'block',
						left: '50%',
						marginLeft: '-'+image.width/2+'px'
					});
			} else {
			  $(image).one('load', function(){
			  	modalImage = $('<div/>').addClass("ModalImage").prependTo(modalContents);
						modalContainer.css({
							display: 'block',
							width: image.width
						});
						$(image).prependTo(modalImage);
						
						modalContainer.css({
							width: image.width+22,
							display: 'block',
							left: '50%',
							marginLeft: '-'+image.width/2+'px'
						});
			  });
			}
			} else {
				this.iframe = $('<iframe/>').attr({
					height: '300',
					width: '100%',
					scrolling: data.modalScroll,
					frameborder: '0',
					src: data.modalUrl
				}).css('border','0');
				modalContainer.css({
					width: 460+22
				});
				
				var modalFrame = $('<div/>').addClass("ModalFrame").appendTo(modalContents);
				$(this.iframe).appendTo(modalFrame);
			}
		} else {
			if(data.modalInline!=="") {
				// For directly loading page content (can't have data-url)
				$(modalContents).append($(data.modalInline).html());
			}
		}
		if(data.modalContent.length>0) {
			var contentContainer = $('<div/>')
				.addClass("ModalContent Note")
				.html(data.modalContent)
				.appendTo(modalContents);
		}
		
		if(data.modalShowCloseButton == "true") {
			var modalClose = $('<a/>')
				.addClass("ModalClose")
				.html("<span class='text'>X</span>")
				.prependTo(modalContainer);
				
			modalClose.one("click", function(e){
				if (data.preventBubbling) {
					e.stopPropagation();
				};

				self.removeModal(true);
			});
		}
		
		modalOverlay.css('opacity', 0);
		modalContainer.css('opacity', 0);
		modalOverlay.css('opacity', 0.85);
		modalContainer.css('opacity', 1);
		this.modalOverlay = modalOverlay;
		this.modalContainer = modalContainer;

		var scrollY = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

		this.modalContainer.css({
			top: (!scrollY ? 150 : scrollY+50)
		});
		
		modalMaster.prependTo(body);
		if(!data.disableOverlayClose) {
			modalOverlay.click(function(e){
				e.preventDefault();
				self.removeModal();
				return false;
			});
			modalContainer.click(function(e){
				return false;
			});

		}
		this.options.clickCallback();
	},

	/**
	 * Removes a modal.
	 *
	 * @param [Boolean] animate If true, fades the modal out.
	 */

	removeModal: function(animate) {
		if(animate) {
			this.modalContainer.animate({
				opacity: 0
			}, 250
			);
			this.modalOverlay.animate({
				opacity: 0
			}, 500, function(){
				$('.Modal').remove();
				$('body').removeClass('ModalOpen');
			});
		} else {
			$('.Modal').remove();
			$('body').removeClass('ModalOpen');
		}

		$('body').trigger('modal.close');
	},

	/**
	 * Resizes an iframe based modal
	 *
	 * @param {Integer} width Width of the iframe.
	 * @param {Integer} height Height of the iframe.
	 * @todo Make this work with non iframe modals.
	 */

	resize: function(width, height) {
		this.iframe.animate({
			width: width,
			height: height
		}, 500);

		this.modalContainer.css('width', width+22);
	}
});

/**
 * Shows just the (tool)tip.
 * 
 * Example:
 *	 
 *	 var tooltip = new TooltipClass({
 *	   selector: '.tipped'
 *	 });
 *
 * To inject content into the tooltip, place a data-tooltip attribute that matches the selector.
 * 
 * @param [Object] options Options to be used.
 * @option [String] selector Overrides default tooltip selector
 * @requires jquery
 * @requires class
 * @todo Convert to Fidel
 */

dmjs.TooltipClass = Class.extend({
	defaults: {
		selector: '[data-tooltip]'
	},

	/**
	 * Initializes tooltip events.
	 *
	 * @param [Object] options Options to be used.
	 */

	init: function(options) {
		var self = this;
		this.options = $.extend({}, this.defaults, options);

		this.windowWidth = $("html").width();
		this.bodyWidth = $("body").width();

		this.el = $(this.options.selector);
		this.el.live('mouseenter.tooltip', function() { self.show(this); });
		this.el.live('mouseleave.tooltip', function() { self.hide(this); });
	},

	/**
	 * Shows the tooltip.
	 *
	 * @param {DOMNode} el DOM node for moused over element.
	 */

	show: function(el) {
		var el = $(el),
				self = this;

	// Check if no data in tooltip
	if(el.data('tooltip').length==0) return false;

		this.tooltipElement = $('<div></div>')
			.addClass('TooltipContainer')
			.html(el.data('tooltip'))
			.appendTo('html')
			.show();


		$('html').bind('mousemove.tooltip', function(e) {
			self.updatePosition(e);
		});
	},

	/**
	 * Hides the tooltop
	 *
	 * @param {DOMNode} el DOM node for moused over element.
	 */

	hide: function(element) {
		$('html').unbind('mousemove.tooltip');
		$('.TooltipContainer').remove();
	},

	/**
	 * Updates the tooltips position when mouse is moved.
	 * 
	 * @param {Event} e Mouse move event
	 */

	updatePosition: function(e) {
		e = e || window.event;
		this.tooltipElement.css({
			left: e.clientX
		}).text(this.tooltipElement.text());

		var tooltipHeight = this.tooltipElement.height(); // this figure out how much to offset based on height of tooltip 
		this.tooltipElement.css({
			top: e.pageY-25-tooltipHeight
		});
	}
});

// Social Share Tracking

/**
 * Ensure global _gaq Google Analytics queue has been initialized.
 * @type {Array}
 */
var _gaq = _gaq || [];

/**
 * Namespace.
 * @type {!Object}.
 */
var _ga = _ga || {};
dmjs.scope(function(){
	function init_(){
		dmjs.onFBInit.push(_ga.onFacebookInit_);
		dmjs.onTWInit.push(_ga.onTwitterInit_);
	}

	/**
	 * Tracks social interactions by iterating through each tracker object
	 * of the page, and calling the _trackSocial method. This function
	 * should be pushed onto the _gaq queue. For details on parameters see
	 * http://code.google.com/apis/analytics/docs/gaJS/gaJSApiSocialTracking.html
	 * @param {string} network The network on which the action occurs.
	 * @param {string} socialAction The type of action that happens.
	 * @param {string=} opt_target Optional text value that indicates the
	 *	 subject of the action.
	 * @param {string=} opt_pagePath Optional page (by path, not full URL)
	 *	 from which the action occurred.
	 * @return a function that iterates over each tracker object
	 *	and calls the _trackSocial method.
	 * @private
	 */
	_ga.getSocialActionTrackers_ = function(network, socialAction, opt_target, opt_pagePath) {
		return function() {
			var trackers = _gat._getTrackers();
			for (var i = 0, tracker; tracker = trackers[i]; i++) {
				tracker._trackSocial(network, socialAction, opt_target, opt_pagePath);
			}
		};
	};

	/**
	 * @private
	 * Tracks Facebook likes, unlikes and sends by suscribing to the Facebook
	 * JSAPI event model. Note: This will not track facebook buttons using the
	 * iframe method.
	 * @param {string=} opt_pagePath An optional URL to associate the social
	 *	 tracking with a particular page.
	 */
	_ga.trackFacebook = function(opt_pagePath) {
		var pagePath;
		try {
			if (FB && FB.Event && FB.Event.subscribe) {
				FB.Event.subscribe('edge.create', dmjs.partial(_ga.onFacebookLike_, pagePath));
				FB.Event.subscribe('edge.remove', dmjs.partial(_ga.onFacebookUnlike_, pagePath));
				FB.Event.subscribe('message.send', dmjs.partial(_ga.onFacebookSend_, pagePath));
			}
		} catch (e) {
			if (!dmjs.global.IN_PRODUCTION) {
				if (window.console) {
					console.log('_qa.trackFacebook error: ' + e);
				}
			}
		}
	};

	/**
	 * Handles tracking for Twitter click and tweet Intent Events which occur
	 * everytime a user Tweets using a Tweet Button, clicks a Tweet Button, or
	 * clicks a Tweet Count. This method should be binded to Twitter click and
	 * tweet events and used as a callback function.
	 * Details here: http://dev.twitter.com/docs/intents/events
	 * @param {Object} intent_event An object representing the Twitter Intent Event
	 *	 passed from the Tweet Button.
	 * @param {string} opt_pagePath An optional URL to associate the social
	 *	 tracking with a particular page.
	 * @private
	 */
	_ga.trackTwitterHandler_ = function(intent_event, opt_pagePath) {
		var opt_target; //Default value is undefined
		if (
			intent_event &&
			intent_event.type == 'tweet' ||
			intent_event.type == 'click'
		){
			if (intent_event.target.nodeName == 'IFRAME') {
				opt_target = _ga.extractParamFromUri_(intent_event.target.src, 'url');
			}
			var socialAction = intent_event.type + ((intent_event.type == 'click') ?
				'-' + intent_event.region : ''); //append the type of click to action

			_ga.sendSocialGoogleAnalyticsAction('twitter', socialAction, opt_target, opt_pagePath);
		}
	};

	/**
	 * Binds Twitter Intent Events to a callback function that will handle
	 * the social tracking for Google Analytics. This function should be called
	 * once the Twitter widget.js file is loaded and ready.
	 * @param {string} opt_pagePath An optional URL to associate the social
	 *	 tracking with a particular page.
	 */
	_ga.trackTwitter = function(opt_pagePath) {
		var intent_handler = function(intent_event) {
			_ga.trackTwitterHandler_(intent_event, opt_pagePath);
		};

		//bind twitter Click and Tweet events to Twitter tracking handler
		twttr.events.bind('click', intent_handler);
		twttr.events.bind('tweet', intent_handler);
	};


	/**
	 * Extracts a query parameter value from a URI.
	 * @param {string} uri The URI from which to extract the parameter.
	 * @param {string} paramName The name of the query paramater to extract.
	 * @return {string} The un-encoded value of the query paramater. undefine
	 *	 if there is no URI parameter.
	 * @private
	 */
	_ga.extractParamFromUri_ = function(uri, paramName) {
		if (!uri) {
			return;
		}
		var regex = new RegExp('[\\?&#]' + paramName + '=([^&#]*)');
		var params = regex.exec(uri);
		if (params != null) {
			return unescape(params[1]);
		}
		return;
	};

	/**
	 * @param {string} network
	 * @param {string} action
	 * @param {string} opt_targetUrl
	 * @param {string} opt_pagePath
	 * @private
	 */
	_ga.sendSocialGoogleAnalyticsAction = function(network, action, opt_targetUrl, opt_pagePath){
		var targetUrl = opt_targetUrl || document.location.href;
		var pagePath = opt_pagePath || window.location.pathname + window.location.search;

		// New way
		ga('send', {
			'hitType': 'social',
			'socialNetwork': network,
			'socialAction': action,
			'socialTarget': targetUrl,
			'page': pagePath
		});

		// Old way
		_gaq.push(_ga.getSocialActionTrackers_(network, action, targetUrl, pagePath));
	};

	/** 
	* @private
	*/
	_ga.onFacebookInit_ = function (event){
		_ga.trackFacebook(); //Google Analytics tracking"
	};

	/** 
	* @private
	*/
	_ga.onTwitterInit_ = function (event){
		_ga.trackTwitter(); //Google Analytics tracking
	};

	/** 
	* @private
	* @param {string} pagePath - from trackFacebook
	* @param {string} targetUrl - from FB.Events.subscribe
	*/
	_ga.onFacebookLike_ = function (pagePath, targetUrl) {
		_ga.sendSocialGoogleAnalyticsAction('facebook', 'like', targetUrl, pagePath);
	};

	/** 
	* @private
	* @param {string} pagePath - from trackFacebook`
	* @param {string} targetUrl - from FB.Events.subscribe
	*/
	_ga.onFacebookUnlike_ = function (pagePath, targetUrl) {
		_ga.sendSocialGoogleAnalyticsAction('facebook', 'unlike', targetUrl, pagePath);
	};

	/** 
	* @private
	* @param {string} pagePath - from trackFacebook
	* @param {string} targetUrl - from FB.Events.subscribe
	*/
	_ga.onFacebookSend_ = function (pagePath, targetUrl) {
		_ga.sendSocialGoogleAnalyticsAction('facebook', 'send', targetUrl, pagePath);
	};
	
	init_.call(_ga);
});

$.fn.linky = function() {
	return this.each(function() {
		var $this = $(this);
		$this.attr("href", $this.attr('data-url'));
	});
};

$('[data-copy]').each(function(i){
	var dataText = $(this).attr('data-copy');
	$(this).html(dataText);
});

$.fn.lazyImage = function(options) {
	var settings = {
		errorImg: dmjs.errImg,
		callback: false
	};
	if (options) $.extend(settings, options);

	return this.each(function() {
		var self = this;
		$("<img />").bind("load", function() {
			$(self).attr("src", $(self).attr("data-img"));
			if (settings.callback) settings.callback.call(self);
		}).bind("error", function() {
			if (settings.errorImg) $(self).attr("src", settings.errorImg);
		}).attr("src", $(self).attr("data-img"));
	});
};

var response = null;
// Async load FB lib and trigger init when loaded
window.fbAsyncInit = function () {
	if (typeof FB != "undefined") {
		FB.init({appId: dmjs.global.facebook.app_id, status: true, cookie: true, xfbml: true, oauth: true,
			channelUrl: (window.location.protocol + '//' + window.location.host + '/xd_receiver.htm')
		});
		FB.XFBML.parse();

		dmjs.array.forEach(dmjs.onFBInit, dmjs.execute); // Run pending init handlers
		dmjs.onFBInit.push = dmjs.execute;// Run future init handlers immediately

		$(".facebookLike").css('background', 'transparent');

		if (dmjs.maintenance.facebook_login) {
			FB.getLoginStatus(function (response) {
				if (response.authResponse) {
					updateFBLogin();
				} else {
					updateFBLogin(true);
				}
			});

			function updateFBLogin (login, logify) {
				if (login) {
					return;
				}

				FB.api('/me', function (response) {
					if (logify) {
						$.post(dmjs.global.facebook.login_service, {
							uid: response.id,
							email: response.email
						});
					}

					// $('#FacebookLogin').html('Welcome, '+response.name+' | <a id="FBLogout">logout</a>');
					$('#FBLogout').one('click', function () {

						FB.logout(function (response) {
							updateFBLogin(true);
						});
					});

					//Note: Not sure if this code is currently used. Please investigate in later time
					var $facePile = $('#FacebookFacepile');
					$facePile.appendTo('#FacebookLogin');
					$('#FacebookLogin').hover(function () {
						$facePile.show();
					}, function () {
						$facePile.hide();
					});
				});
			}

			FB.Event.subscribe('auth.sessionChange', function (response) {
				if (response.authResponse) {
					updateFBLogin();
				}
			});
		}
	}
};
dmjs.addLoadEvent(function () {
	// Load the SDK's source Asynchronously
	(function (d, debug) {
		var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
		if (d.getElementById(id)) {
			return;
		}
		js = d.createElement('script');
		js.id = id;
		js.async = true;
		js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
		ref.parentNode.insertBefore(js, ref);
	}(document, /*debug*/ false));

});

// Twitter widget
dmjs.addLoadEvent(function () {
	window.twttr = (function (d,s,id) {
		var t, js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
		js.src="//platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
		return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
	}(document, "script", "twitter-wjs"));

	// Wait for the asynchronous resources to load
	twttr.ready(function(twttr) {
		dmjs.array.forEach(dmjs.onTWInit, dmjs.execute); // Run pending init handlers
		dmjs.onTWInit.push = dmjs.execute; // Run future init handlers immediately
	});
});

/**
 * Google Plus widget
 * Created by animeshmanglik on 3/4/14.
 */

// Callback function to execute scripts in google's API queue
window.gapiAsyncInit = function () {
	dmjs.array.forEach(dmjs.onGapiInit, dmjs.execute); // Run pending init handlers
	dmjs.onGapiInit.push = dmjs.execute; // Run future init handlers immediately
}

// Adding it to the dmjs onload for asynchronous loading
//gapiAsyncInit is the callback function defined after the google API has finished loading
dmjs.addLoadEvent(function () {

	window.___gcfg = {
		lang: 'en',
		parsetags: 'explicit'
	};
	(function () {
		var doc = document;
		var po = doc.createElement('script');
		po.type = 'text/javascript';
		po.async = true;
		po.src = 'https://apis.google.com/js/plusone.js?onload=gapiAsyncInit';
		var s = doc.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(po, s);
	})();

});

dmjs.onGapiInit.push(function () {
	gapi.plus.go();
});

dmjs.addLoadEvent(function () {

	//Load PinIt Button
	if (dmjs.global.share_tools_pinterest_button) {
		loadPinItButton(dmjs.global.share_tools_pinterest_button);
	}

	if (dmjs.global.share_rail_pinterest_button) {
		loadPinItButton(dmjs.global.share_rail_pinterest_button);
	}

	/**
	* Sanitize value for description field to be send to pinterest
	*
	* @param string description
	* @returns string
	*/
	function sanitizeDescription(description) {
		description = description.replace('<br>', '');
		return description.replace(/%26/g, 'and');
	}

	function getPinItButton (attr, id) {
		var baseHref = '//www.pinterest.com/pin/create/button/?url=__URL__&media=__MEDIA__&description=__DESCRIPTION__', domStr = '<a data-id="__ID__" target="_blank" href="__HREF__" data-pin-do="buttonPin" data-pin-config="none"><img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_gray_20.png" /></a>', id = id || '';

		var href = baseHref.replace('__URL__', encodeURIComponent(attr.url));
		href = href.replace('__MEDIA__', encodeURIComponent(attr.media));
		href = href.replace('__DESCRIPTION__', encodeURIComponent(sanitizeDescription(attr.title)));
		domStr = domStr.replace('__HREF__', href);
		domStr = domStr.replace('__ID__', id);

		return domStr;
	}

	function loadPinItButton (attr, id) {
		var selector = '[data-social_placeholder="' + attr.placeholder + '"]';

		if ($(selector).length > 0) {
			$(selector).append(getPinItButton(attr, id));
		}
	}

	/**
	 * Assuming the structure of img is '<parent><img></parent>'
	 * @param $img
	 * @returns {boolean}
	 */
	function showPinItOnHover($img)
	{
		var $elem = $img.parent();

		if($elem.find('[data-id="eh_pin_hover_btn"]').length >0){
			$elem.find('[data-id="eh_pin_hover_btn"]').show();
			return false;
		}

		var url = $img.attr('data-target') || '';
		var media = $img.attr('src') || '';
		var title = $img.attr('alt') || '';

		var attrs = {url:url,media:media,title:title};

		$elem.css('position','relative');
		$elem.append(getPinItButton(attrs,'eh_pin_hover_btn'));
	}

	/**
	 *  Assuming the structure of img is '<parent><img></parent>'
	 * @param $img
	 */
	function hidePinItOnHover($img){
		var $elem = $img.parent();
		$elem.find('[data-id="eh_pin_hover_btn"]').hide();
	}

	$('[data-pin-ehow-hover="true"]').parent().mouseenter(function(){
		showPinItOnHover($(this).find('img'));
	});

	$('[data-pin-ehow-hover="true"]').parent().mouseleave(function(){
		hidePinItOnHover($(this).find('img'));
	});

	$('body').on('click', '[data-id="eh_pin_hover_btn"]', function () {
		var href = $(this).attr('href') || $(this).attr('data-href'),
			target = $(this).attr('target') || $(this).attr('data-target'),
			defaults = "status=no,resizable=yes,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=632,height=270,left=0,top=0";

		if (href) {
			window.open(href, target, defaults);
		}

	});

	(function (d) {
		var f = d.getElementsByTagName('script')[0],
			p = d.createElement('script');
		p.async = true;
		p.setAttribute('data-pin-hover', true);
		p.src = '//assets.pinterest.com/js/pinit.js';
		f.parentNode.insertBefore(p, f);
	}(document));
});

if (dmjs.maintenance.demdex) {
  dmjs.addLoadEvent(function() {
	if(typeof Tim !== 'undefined' ){
	  Tim.Provider('simplifi').execute(); 
	}
  }, 20);
}

/**
 * Created by animeshmanglik on 5/5/14.
 */
(function($, doc, win){
$("body").bind('copy', function (e) {
	if (typeof win.getSelection == "undefined") return; //IE8 or earlier...

	var body_element = doc.getElementsByTagName('body')[0];
	var selection = win.getSelection();
	var win_location = doc.location.href;

	//if the selection is short let's not annoy our users
	if (("" + selection).length < 30) return;

	//create a div outside of the visible area
	//and fill it with the selected text
	var newdiv = doc.createElement('div');
	newdiv.style.position = 'absolute';
	newdiv.style.left = '-99999px';
	body_element.appendChild(newdiv);
	newdiv.appendChild(selection.getRangeAt(0).cloneContents());

	//we need a <pre> tag workaround
	//otherwise the text inside "pre" loses all the line breaks!
	if (selection.getRangeAt(0).commonAncestorContainer.nodeName == "PRE") {
		newdiv.innerHTML = "<pre>" + newdiv.innerHTML
		+ "</pre><br />Read more : <a href='" + win_location + "'>"
		+ win_location + "</a>";
	}
	else
		newdiv.innerHTML += "<br /><br />Read more : <a href='"
		+ win_location + "'>"
		+ win_location + "</a>";

	selection.selectAllChildren(newdiv);
	win.setTimeout(function () { body_element.removeChild(newdiv); }, 200);
})
})(jQuery, document, window);

dmjs.errImg = dmjs.setting.cdn.cdnImage+'/ui/images/modules/loading/no-image.gif';


/* -----Tooltips----- */
ehow.tooltips = new dmjs.TooltipClass();

/* -----linky----- */
$("a[data-url], area[data-url]").linky();

/* -----Modal----- */
ehow.Modal = new dmjs.ModalClass({selector: "a[data-type=modal]"});

/* -----Article Preview Lazyload / Newsletter / comscore / comments----- */
dmjs.addLoadEvent(function() {
	$('.ArticlePreview img').lazyImage();
	$('.ContentPreview img').lazyImage();
	$('.Newsletter').addClass('NewsletterLoaded');
	/* -----Comscore brick----- */
	$("#comscoreBrick").lazyImage();
	$("#Comments").find(".comment img").lazyImage();
}, 0);

dmjs.onFBInit.push(function() {
	dmjs.fbLikeJumpFix();
});

//search
if ($(document).scrollTop() < 70 && !dmjs.platform.isTablet() && !dmjs.platform.isMobile()) {
  $('#searchHeader input:text[data-type=searchinput]')[0].focus();
}

// Search Button Toggle
if (!dmjs.platform.isTablet() && !dmjs.platform.isMobile()) {
	var $search = $('.Search'),
		$searchInput = $search.find('.text');

		$search.on('keypress', function () {
			$search.addClass('active');
		});
		$search.on('focusout', function () {
			$search.removeClass('active');
		});
}


// IE8 and below placeholder hack
if ($.browser.msie && $.browser.version <= 8) {
	$('input, textarea').placeholder();
}

// binds to the submit event on the search box in the header
$('#searchHeader, #searchFooter').bind('submit', function() {
  // checks if the search input text is blank
	if ($('input', this).val() === "") {
	//prevents the user from submitting if the search is blank
		return false;
	}
});

$(function () {
	"use strict";

	if(!document.querySelector) {
		return;
	}

	var mobileDevice = dmjs.platform.mobile,
		mobileLink = document.querySelector(".view-mobile"),
		vmHeight = $(mobileLink).height(),
		footer = document.querySelector("#Footer"),
		mobileLinkSet = (mobileLink !== null && mobileDevice) ? true : false,
		setPosition = function () {
			mobileLink.style.visibility = "visible";
			// Since link is fixed, it covers up comscore brick.. this fixes that
			$(footer).css("margin-bottom", vmHeight);
		};

	if (mobileLinkSet) {
		// Android platform prior to 3, iphone platform prior to 5, do not support fixed positioning
		if ((mobileDevice === "android" && dmjs.platform.version < 3) || (mobileDevice === "iphone" && dmjs.platform.version < 5)) {
			mobileLink.style.position = "static";
			mobileLink.style.visibility = "visible";
			return;
		}
		setPosition();
	}
});

/*global _gaq*/
$(".FeatureNavLink").bind("click", function () {
	_gaq.push(["_trackEvent", "Navigation", "FeaturedNavClick", $(this).text()]);
});
$(".SlideshowPostPlayLink").bind("click", function () {
	_gaq.push(['_trackEvent', 'Navigation', 'SlideshowPostPlay',  $(this).attr('data-track-text')]);
});
$(".SlideshowRightRailLink").bind("click", function () {
		_gaq.push(['_trackEvent', 'Navigation', 'SlideshowRightRail',  $(this).attr('data-track-text')]);
});


//
// Author: Spencer Wiggins
// Purpose: Track anchor click events to GA
// 
// Instantiate:
// 		$('.js-masonry-box').masonryTrack();
// 		$('.js-masonry-list').masonryTrack({
// 			type: 'List',
// 			action: ['listNumber', 'listCount']
// 		});
// 		
// 		Defaults:
// 		{
// 			type: 'Box',
// 			action: ['location', 'size', 'nodeType']
// 		}
// 		
// 		Based on the type of module, different components are set and different actions
// 		are sent to GA.  Those values are set in the view as data-attributes.  
// 		See masonry_box.php and top_list.php for examples.
// 
// 
// Notes: Could be ported to a generic ga tracker if needed, however,
// the opt_value article ID of link URL (use "0" for external links,
// use "1" for internal links with no article ID) would need to be added to each module
// we need to track.  After the event is tracked, the default action is assumed to be a
// link, and therefor we fire Masonry_Tracker.redirect().
// 
(function ($, win) {
	'use strict';
 
	var Masonry_Tracker = {
		category: '',
		nodeType: '',
		location: '',
		size: '',
		opt_title: '',
		opt_value: '',
		listNumber: '',
		listCount: '',
		pageScore: false,
		init: function (options, elem) {
			var self = this;

			self.$elem = $(elem);
 
			self.options = $.extend({}, $.fn.masonryTrack.options, options);

			self.$elem.on('click', function(e) {
				self.clickHandler(e, self.$elem, self.options);	
			});
		},
		redirect: function (target) {
			win.location = target;
		},
		clickHandler: function (e, elem, options) {
			var self = this,
				nodeName = e.target.nodeName;

			e.preventDefault();

			// Check if we clicked on a pagescore module, if so, use image
			// See pagescore.php
			self.pageScore = ($(e.target).parent().data('score') !== undefined) ? true : false;

			self.nodeType = (nodeName === 'A') ? 'Text' : 
							(nodeName === 'IMG') ? 'Image' :
							(self.pageScore === true) ? 'Image' : null;

			if (!self.nodeType && !self.pageScore) {
				// Only want to track text and image nodes
				return;
			}

			self.category = elem.data('category');

			self['set' + options.type + 'Components'](e, elem, options);

		},
		setListComponents: function (e, elem, options) {

			var $target = $(e.target),
				self = this;

			// list-number is 0 index based, need to add 1
			self.listNumber = $target.data('list-number') + 1;
			self.listCount = elem.data('list-total');
			self.opt_title = $target.data('opt-title');
			self.opt_value = $target.data('opt-value');
			
			self.trackEvent(e, options);
			
		},
		setBoxComponents: function (e, elem, options) {
			var self = this;
			
			self.location = elem.data('location');
			self.opt_title = elem.data('opt-title');
			self.size = elem.data('size');
			self.opt_value = elem.data('opt-value');
	
			self.trackEvent(e, options);

		},
		trackEvent: function (e, options) {

			var self = this,
				action = '',
				target = (self.pageScore) ? $(e.target).parent('.js-pagescore').data('url') : $(e.target).data('target'),
				i = 0,
				ii = options.action.length,
				_gaq = win._gaq || {};

			for (i; i < ii; i++) {
				action += self[options.action[i]] + "|";
			}

			if (target) {
				_gaq.push(['_trackEvent', self.category, action, self.opt_title, self.opt_value]);

				_gaq.push(function () {
					self.redirect(target);
				});
			}
		}
	};
 
	$.fn.masonryTrack = function (options) {
		return this.each(function () {
			var masonry = Object.create(Masonry_Tracker);
			masonry.init(options, this);
		});
	};
 
	// Default options
	// Masonry_box: Location|Size|{Image/Text}
	// Masonry_list: list-number|list-count
	$.fn.masonryTrack.options = {
		type : 'Box',
		action: ['location', 'size', 'nodeType']
	};
 
}(window.jQuery, window));

/*!
 *  * jQuery-ajaxTransport-XDomainRequest - v1.0.3 - 2014-06-06
 *   * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
 *	* Copyright (c) 2014 Jason Moon (@JSONMOON)
 *	 * Licensed MIT (/blob/master/LICENSE.txt)
 *	  */
(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else if(typeof exports==='object'){module.exports=a(require('jquery'))}else{a(jQuery)}}(function($){if($.support.cors||!$.ajaxTransport||!window.XDomainRequest){return}var n=/^https?:\/\//i;var o=/^get|post$/i;var p=new RegExp('^'+location.protocol,'i');$.ajaxTransport('* text html xml json',function(j,k,l){if(!j.crossDomain||!j.async||!o.test(j.type)||!n.test(j.url)||!p.test(j.url)){return}var m=null;return{send:function(f,g){var h='';var i=(k.dataType||'').toLowerCase();m=new XDomainRequest();if(/^\d+$/.test(k.timeout)){m.timeout=k.timeout}m.ontimeout=function(){g(500,'timeout')};m.onload=function(){var a='Content-Length: '+m.responseText.length+'\r\nContent-Type: '+m.contentType;var b={code:200,message:'success'};var c={text:m.responseText};try{if(i==='html'||/text\/html/i.test(m.contentType)){c.html=m.responseText}else if(i==='json'||(i!=='text'&&/\/json/i.test(m.contentType))){try{c.json=$.parseJSON(m.responseText)}catch(e){b.code=500;b.message='parseerror'}}else if(i==='xml'||(i!=='text'&&/\/xml/i.test(m.contentType))){var d=new ActiveXObject('Microsoft.XMLDOM');d.async=false;try{d.loadXML(m.responseText)}catch(e){d=undefined}if(!d||!d.documentElement||d.getElementsByTagName('parsererror').length){b.code=500;b.message='parseerror';throw'Invalid XML: '+m.responseText;}c.xml=d}}catch(parseMessage){throw parseMessage;}finally{g(b.code,b.message,c,a)}};m.onprogress=function(){};m.onerror=function(){g(500,'error',{text:m.responseText})};if(k.data){h=($.type(k.data)==='string')?k.data:$.param(k.data)}m.open(j.type,j.url);m.send(h)},abort:function(){if(m){m.abort()}}}})}));

//
// Page Score Plugin
//
// Purpose: Populate page score of eHow page(s)
// Author: Spencer Wiggins
// Community Endpoint: http://services.ehow.com/api/socialsummary?url=http://www.ehow.com/someurl
//
// Instantiate:
// 		$('.js-page').pageScore();
//
// 		Options
// 		$('.js-page').pageScore({
//			threshold: 5, 					// Minimum threshold of when to show widget
//			pageType: 'article',			// In case you need to style a page type (i.e. homepage)
//			num: '.js-num',					// Where you are placing a single request number
//			resource: 'helpfulness', 		// Property in json object you want from 'resource' (Can be array - i.e ['facebook_shares', 'tweets', 'plusones', 'pins'])
//			socialbuttons: false			// Required if manipulating social share buttons
// 		});
//
//
// Sample json object
// {
// 	"resource": {
// 		"id": "3",
// 		"url": "http://www.ehow.com",
// 		"helpfulness": "1451067",
// 		"hnh": "0",
// 		"facebook_likes": "4082",
// 		"facebook_shares": "5977",
// 		"facebook_comments": "15746",
// 		"tweets": "29504",
// 		"plusones": "797236",
// 		"pins": "0",
// 		"views": "598522",
// 		"created": "2014-06-06 21:23:56",
// 		"updated": null
// 	},
// 	"next_set": 0,
// 	"success": true
// }

;(function ($) {
	"use strict";

	var PageScore = {
		init: function (options, elem) {
			var self = this;

			self.options = $.extend({}, $.fn.pageScore.options, options);

			self.$elem = $(elem);
			self.url = self.$elem.data('url');
			self.$num = self.$elem.find($(self.options.num));
			self.resource = self.options.resource;

			if (!self.url) {
				return;
			}

			self.cycle();

		},
		cycle: function () {
			var self = this,
				score,
				target,
				targets = {},
				scores,
				i,
				ii,
				num;

			self.fetch(self.url).done(function (data) {
				if (typeof self.resource === "string") {
					if (!self.meetsRequirements(data.resource[self.resource])) {
						return;
					}
					target = data.resource[self.resource];
				} else {
					i = 0;
					ii = self.resource.length;
					for (i; i < ii; i++) {
						if (!self.meetsRequirements(data.resource[self.resource[i]])) {
							continue;
						}
						targets[self.resource[i]] = data.resource[self.resource[i]];
					}
				}

				// singe resources
				if (target !== undefined) {
					num = parseInt(target, 10);
					score = self.convertString(num);
					self.populateWidget(score);
					self.showWidget();
				}

				// Multiple resources
				self.socialLoop(targets, self.$elem);

			});

		},
		meetsRequirements: function (resource) {
			if (resource !== null && resource >= this.options.threshold) {
				return true;
			}
			return false;
		},
		fetch: function (url) {
			var uri = (dmjs.global.IN_PRODUCTION) ? url : url.replace(dmjs.global.glbBaseUrl, "http://www.ehow.com"),
				contributor = (dmjs.global.contributor) ? dmjs.global.contributor : '';

			return $.ajax({
				beforeSend: function (xhr) {
					xhr.setRequestHeader('api_key','468ffb6fc82a4168178a1fc93997b5a6e8d4ba97ec6af27a3fcd2d4d4f64da81');
				},
				url: "http://services.ehow.com/api/socialsummary?url=" + uri + '&contributor=' + contributor
			});
		},
		socialLoop: function (obj, widget) {
			// Loops through scores,
			// verifies they exist and meets threshold,
			// then populates social buttons
			var	self = this,
				val,
				num;

			for (val in obj) {
				if (obj.hasOwnProperty(val) && self.meetsRequirements(obj[val])) {
					num = self.convertString(obj[val]);
					if (self.options.socialbuttons === true) {
						self.populateButton(val, num, widget);
					}
				}
			}
		},
		convertString: function (num) {
			num = num.toLocaleString("en-us");
			if (num.indexOf('.') > -1) {
				return num.slice(0, -3);
			}
			// Safari fix: eh-8036
			if (typeof window.safari !== undefined) {
				num = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			}
			return num;
		},
		populateButton: function (property, value, context) {
			var widget = context ? $(context) : this.$widget;
			widget.find($('.js-' + property))[0].innerHTML = value;
		},
		populateWidget: function (score) {
			this.$num.append(score);
			this.$elem.attr('title', score + ' people found this helpful');
		},
		showWidget: function () {
			this.$elem[0].style.visibility = 'visible';
			if (this.options.pageType === 'homepage') {
				this.$elem.addClass('active');
			}
		}
	};

	$.fn.pageScore = function (options) {
		return this.each(function () {
			var pageScore = Object.create(PageScore);
			pageScore.init(options, this);
		});
	};

	$.fn.pageScore.options = {
		threshold: 5, 					// Minimum threshold of when to show widget
		pageType: 'article',			// In case you need to style a page type (i.e. homepage)
		num: '.js-num',					// Where you are placing a single request number
		resource: 'helpfulness', 		// Property in json object you want from 'resource' (Can be array - i.e ['facebook_shares', 'tweets', 'plusones', 'pins'])
		socialbuttons: false			// Required if manipulating social share buttons
	};

}(window.jQuery));

$('.js-masonry-box').masonryTrack();
$('.js-masonry-list').masonryTrack({
	type: 'List',
	action: ['listNumber', 'listCount']
});

$(function () {
	$('.js-pagescore').pageScore({
		pageType : 'homepage'
	});
});

dmjs.addLoadEvent('//assets.pinterest.com/js/pinit.js', 0);

(function($, win) {
	var $socialModule = $('.social-follow'),
		$icons = $socialModule.find('.icons'),
		$arrow = $socialModule.find('.arrow'),
		$newsletter = $socialModule.find('.js-newsletter'),
		$newsletterBtn = $socialModule.find('.js-submit'),
		$target,
		active = 'active',
		prev = '',
		toggle = function (target) {
			
			$('.asset.' + active).toggleClass(active);
			$('.asset.' + target).addClass(active);

			$arrow.toggleClass(prev);
			$arrow.addClass(target);
			prev = target;
		};

		$icons.on('click', function (e) {
			e = e || win.event;
			e.preventDefault();

			$target = e.target.hash.substring(1);
			toggle($target);
		});

		$newsletterBtn.on('click', function () {
			if (win.localStorage && ($('.js-email').val() !== undefined)) {
				win.localStorage.setItem('newsletter-email', $('.js-email').val());
			}
		});

		$newsletter.on('submit', function (e) {
			e.preventDefault();
			$newsletterBtn.trigger('click');
		});

}(window.jQuery, window));

