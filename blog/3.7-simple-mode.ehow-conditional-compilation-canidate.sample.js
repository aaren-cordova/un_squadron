// ehow core platform
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