'use strict';

angular.module('myApp', [
	'ngRoute',
	'ngProgress',
	'myApp.controllers'
]).config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/stock', {
			title: 'Angular Stock',
			templateUrl: '/partials/stock.html',
			controller: 'stockCtrl'
		})
		.otherwise({
			title: 'My App',
			templateUrl: '/partials/index.html',
			controller: 'globalCtrl'
		});
}]);