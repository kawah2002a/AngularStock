'use strict';

angular.module('myApp.controllers', [])
.controller('globalCtrl', ['$scope', '$route', '$location', 'ngProgress', function ($scope, $route, $location, ngProgress) {
	$scope.$on('$routeChangeStart', function() {
           ngProgress.reset(); // Required to handle all edge cases.
           ngProgress.color('OrangeRed');
           ngProgress.start();
    });
	$scope.$on('$routeChangeSuccess', function ($event, $current, $previous) {
		$scope.title = $route.current.title;
		$scope.path = $location.path();
		ngProgress.complete();
    });
	$scope.$on('$routeChangeError', function() {
           ngProgress.reset();
	});
	
	$scope.apps = [{ name : 'Stock', value : '/stock'}, 
				   { name : 'Other', value : '/other'}];
}])
.controller('stockCtrl', ['$scope', function ($scope) {
	$scope.Test = 'Testing';
}]);