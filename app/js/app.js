'use strict';

var app = (function () {
	var _init = function () {
		// remove it - this is just a demo!
		console.log('Hey, I am here!');
	};
	return {
		init: _init
	};
})();

(function () {
	app.init();
})();