// JavaScript Document
var orz = orz || {};

(function(){

	orz = function(settings){
		this.init.call(this, settings);
		try {
			console.log('%c', 'padding:108px 200px; line-height:216px; background:url(http://orz.link/img/orz.jpg);');
			console.log('Actually, I\'m an actor!')
		} catch (e) {}
	}

	orz.prototype = {
		init: function(settings){
			if(navigator.appName === 'Microsoft Internet Explorer'){
				alert('Sorry, This website does not support your browser, Please download the following modern browser');
				window.location = 'https://www.google.com/intl/' + navigator.userLanguage + '/chrome/browser/';
			}
		}
	}

})();