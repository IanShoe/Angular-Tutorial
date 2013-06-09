var tutorialApp = angular.module('tutorialApp', []);

tutorialApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.
	when('/home', {
		templateUrl: 'partials/home.html',
		controller: homeCtrl
	}).
	when('/list', {
		templateUrl: 'partials/list.html',
		controller: listCtrl
	}).
	otherwise({
		redirectTo: '/home'
	});
	$locationProvider.html5Mode(true);
}]);