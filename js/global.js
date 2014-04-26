// JavaScript Document
(function(){
	if(navigator.appName === 'Microsoft Internet Explorer'){
		alert('Sorry, This website does not support your browser, Please download the following modern browser');
		window.location = 'https://www.google.com/intl/' + navigator.userLanguage + '/chrome/browser/';
	}
})();