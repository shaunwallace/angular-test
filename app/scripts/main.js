;(function (angular, window, document, undefined ) {
	'use strict';

	angular
		.module('app', [])
		.controller('MainCtrl', MainCtrl)
		.filter('reverse', reverseFilter);

	function MainCtrl() {

		this.people = [
			{ name : 'shaun'}, 
			{ name : 'naomi'}, 
			{ name : 'ethan'}, 
			{ name : 'daniel'}, 
			{ name : 'test'}
		];
	}

	function reverseFilter() {

		return function( input ) {

			var out = '';
			input = input || '';
			
			for( var i = 0; i < input.length; i++ ) {
				out = input.charAt(i) + out;
			}

			return out;
		};
	}




})(angular, window, document, undefined);






