'use strict';

angular.module('myApp.controllers', [])
.controller('globalCtrl', ['$scope', '$route', '$location', function ($scope, $route, $location) {
	$scope.$on('$routeChangeSuccess', function ($event, $current, $previous) {
		$scope.title = $route.current.title;
		$scope.path = $location.path();
    });
	
	$scope.apps = [{ name : 'Stock', value : '/stock'}, 
				   { name : 'Other', value : '/other'}];
}])
.controller('stockCtrl', ['$scope', function ($scope) {
	$scope.Test = 'Testing';
}]);