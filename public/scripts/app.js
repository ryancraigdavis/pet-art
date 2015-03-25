// var app = angular.module('petApp',['ui.router']);

// app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
//     $urlRouterProvider.otherwise('/');
 
//     $stateProvider
//         .state('home', {
//             url:'/',
//             templateUrl: 'index.html',
//             controller: 'mainCtrl'
//         })
//         .state('artists', {
//             url:'/',
//             templateUrl: 'artists.html',
//             controller: 'artistsCtrl'
//         })
 
// }]);

var app = angular.module('petApp', ['ngRoute'])

	app.config(function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: "homeView.html",
			controller:  "mainCtrl"
		})
		.when('/artists', {
			templateUrl: 'artists.html',
			controller: 'artistsCtrl'
		})
		.when('/gallery', {
			templateUrl: 'gallery.html',
			controller: 'galleryCtrl'
		})

		.otherwise({
			redirectTo: "/"
		})
	})